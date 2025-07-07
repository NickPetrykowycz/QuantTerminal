# Replace the entire monte_carlo.py router with this:

import os

# Import our new MonteCarloSimulator class
import sys
from typing import List

import numpy as np
from fastapi import APIRouter, HTTPException
from models.requests import MonteCarloRequest
from models.responses import (
    MonteCarloConfidenceInterval,
    MonteCarloConvergencePoint,
    MonteCarloPathPoint,
    MonteCarloResponse,
    MonteCarloStats,
)

sys.path.append(
    os.path.join(os.path.dirname(__file__), "..", "utils", "options_pricing_calc")
)
from MonteCarlo import MonteCarloSimulator

router = APIRouter()


def get_simulation_count(precision: str) -> int:
    """Map precision levels to simulation counts"""
    precision_map = {"fast": 10000, "standard": 100000, "high": 1000000}
    return precision_map.get(precision, 100000)


def generate_convergence_analysis(
    simulator: MonteCarloSimulator, params: dict, max_sims: int
) -> List[dict]:
    """Generate convergence analysis data"""
    convergence_points = []
    
    # Use fewer points but with more reasonable simulation counts
    sim_counts = [1000, 2500, 5000, 10000, 25000, 50000, 75000, 100000]
    
    # Only include counts that are <= max_sims
    sim_counts = [s for s in sim_counts if s <= max_sims]
    
    # Always include the final max_sims if it's not already there
    if max_sims not in sim_counts and max_sims > sim_counts[-1]:
        sim_counts.append(max_sims)

    for sim_count in sim_counts:
        # Create temporary simulator with more simulations for stable results
        temp_simulator = MonteCarloSimulator(sim_count)

        if params["style"] == "european":
            result = temp_simulator.price_european_option(
                params["S0"], params["K"], params["r"], params["q"],
                params["sigma"], params["T"], params["option_type"]
            )
        elif params["style"] == "asian":
            result = temp_simulator.price_asian_option(
                params["S0"], params["K"], params["r"], params["q"],
                params["sigma"], params["T"], params["option_type"], params["time_steps"]
            )
        else:  # american
            result = temp_simulator.price_american_option(
                params["S0"], params["K"], params["r"], params["q"],
                params["sigma"], params["T"], params["option_type"], params["time_steps"]
            )

        convergence_points.append({
            "simulations": int(sim_count),
            "price": result["price"],
            "std_error": result["std_error"],
            "lower_ci": result["lower_bound"],
            "upper_ci": result["upper_bound"]
        })

    return convergence_points


def generate_sample_paths(
    simulator: MonteCarloSimulator, params: dict, num_paths: int = 10
) -> List[dict]:
    """Generate sample paths for visualization"""
    # Generate paths for visualization
    paths = simulator.simulate_american_option_paths(
        params["S0"],
        params["r"],
        params["q"],
        params["sigma"],
        params["T"],
        params["time_steps"],
    )

    # Select a subset of paths for frontend
    selected_paths = paths[:num_paths]
    path_points = []

    for path_idx, path in enumerate(selected_paths):
        for time_idx, price in enumerate(path):
            time_value = (time_idx / len(path)) * params["T"]
            path_points.append(
                {"path_id": path_idx, "time": time_value, "price": price}
            )

    return path_points


@router.post("/monte-carlo", response_model=MonteCarloResponse)
async def calculate_monte_carlo_price(request: MonteCarloRequest):
    """
    Calculate Monte Carlo option price with convergence analysis and sample paths.
    """
    try:
        print(
            f"🎲 Monte Carlo Request: {request.option_type.upper()} {request.style} option"
        )
        print(
            f"📊 S0=${request.S0}, K=${request.K}, T={request.T}, r={request.r:.4f}, σ={request.sigma:.4f}"
        )
        print(
            f"🎯 Precision: {request.precision} ({get_simulation_count(request.precision):,} simulations)"
        )

        # Determine number of simulations based on precision or explicit request
        simulations = request.simulations or get_simulation_count(request.precision)

        # Handle dividend yield - always set q, default to 0
        q = 0.0
        if request.dividend_mode and request.dividend_mode != "none":
            if request.dividend_mode == "yield" and request.q is not None:
                q = request.q
            elif request.dividend_mode == "discrete":
                # For discrete dividends, approximate with continuous yield
                if request.dividend_amt and request.dividend_freq:
                    annual_dividend = request.dividend_amt * (
                        365 / request.dividend_freq
                    )
                    q = annual_dividend / request.S0

        # Prepare parameters for our new simulator
        params = {
            "S0": request.S0,
            "K": request.K,
            "r": request.r,
            "q": q,  # Always included
            "sigma": request.sigma,
            "T": request.T,
            "option_type": request.option_type,
            "style": request.style or "american",
            "time_steps": request.time_steps or 252,
        }

        # Set random seed if provided
        if request.random_seed:
            np.random.seed(request.random_seed)

        print(
            f"🚀 Starting Monte Carlo simulation with {simulations:,} simulations..."
        )

        # Create simulator
        simulator = MonteCarloSimulator(simulations)

        # Price the option based on style
        if params["style"] == "european":
            result = simulator.price_european_option(
                params["S0"],
                params["K"],
                params["r"],
                params["q"],
                params["sigma"],
                params["T"],
                params["option_type"],
            )
        elif params["style"] == "asian":
            result = simulator.price_asian_option(
                params["S0"],
                params["K"],
                params["r"],
                params["q"],
                params["sigma"],
                params["T"],
                params["option_type"],
                params["time_steps"],
            )
        else:  # american (default)
            result = simulator.price_american_option(
                params["S0"],
                params["K"],
                params["r"],
                params["q"],
                params["sigma"],
                params["T"],
                params["option_type"],
                params["time_steps"],
            )

        print(f"💰 Option Price: ${result['price']:.4f}")

        # Generate convergence analysis
        print("📈 Generating convergence analysis...")
        convergence_data = generate_convergence_analysis(simulator, params, simulations)

        # Generate sample paths for visualization
        print("🛤️ Generating sample paths...")
        path_sample_data = generate_sample_paths(simulator, params)

        print(f"✅ Monte Carlo calculation complete!")
        print(f"📈 Convergence points: {len(convergence_data)}")
        print(f"🛤️ Sample paths: {len(set(p['path_id'] for p in path_sample_data))}")

        # Convert to response models
        convergence_points = [
            MonteCarloConvergencePoint(**point) for point in convergence_data
        ]

        path_points = [MonteCarloPathPoint(**point) for point in path_sample_data]

        confidence_interval = MonteCarloConfidenceInterval(
            lower=result["lower_bound"], upper=result["upper_bound"], level=0.95
        )

        stats = MonteCarloStats(
            simulations=simulations,
            std_error=result["std_error"],
            confidence_level=0.95
        )

        return MonteCarloResponse(
            price=result["price"],
            convergence=convergence_points,
            path_sample=path_points,
            confidence_interval=confidence_interval,
            stats=stats,
            success=True,
            model_info={
                "simulations": simulations,
                "time_steps": params["time_steps"],
                "antithetic_variates": request.antithetic,
                "random_seed": request.random_seed,
                "precision_level": request.precision,
                "option_style": params["style"],
                "dividend_mode": request.dividend_mode or "none",
                "dividend_yield": q,
                "convergence_points": len(convergence_points),
                "sample_paths": len(set(p.path_id for p in path_points)),
            },
        )

    except ValueError as ve:
        print(f"🚫 Monte Carlo Validation Error: {ve}")
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        print(f"💥 Monte Carlo API Error: {e}")
        raise HTTPException(
            status_code=500, detail=f"Monte Carlo calculation failed: {str(e)}"
        )


@router.get("/monte-carlo/info")
async def get_monte_carlo_info():
    """Get information about the Monte Carlo pricing model."""
    return {
        "model": "Monte Carlo Simulation",
        "description": "Stochastic simulation for option pricing using geometric Brownian motion",
        "features": [
            "American and European options",
            "Statistical confidence intervals",
            "Convergence analysis",
            "Sample path visualization",
            "Antithetic variance reduction",
            "Flexible simulation parameters",
            "Always includes dividend yield support",
        ],
        "precision_levels": {
            "fast": "10,000 simulations - Quick approximation",
            "standard": "100,000 simulations - Balanced accuracy",
            "high": "1,000,000 simulations - Maximum precision",
        },
        "advantages": [
            "Handles complex payoff structures",
            "Supports path-dependent options",
            "Provides statistical confidence measures",
            "Flexible for exotic derivatives",
            "Intuitive methodology",
            "Consistent dividend handling",
        ],
        "parameters": {
            "simulations": "Number of Monte Carlo simulations (1K - 10M)",
            "time_steps": "Time discretization steps (default: 252)",
            "antithetic": "Use antithetic variance reduction (default: true)",
            "random_seed": "Seed for reproducible results (optional)",
        },
    }
