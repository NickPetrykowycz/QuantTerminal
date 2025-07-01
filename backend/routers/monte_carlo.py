from typing import List

from fastapi import APIRouter, HTTPException
from models.requests import MonteCarloRequest
from models.responses import (
    MonteCarloConfidenceInterval,
    MonteCarloConvergencePoint,
    MonteCarloPathPoint,
    MonteCarloResponse,
    MonteCarloStats,
)
from utils.options_pricing_calc.MonteCarlo import (
    calculate_monte_carlo_full,
    get_simulation_count,
)

router = APIRouter()


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

        # Prepare parameters
        params = {
            "S0": request.S0,
            "K": request.K,
            "T": request.T,
            "r": request.r,
            "sigma": request.sigma,
            "option_type": request.option_type,
            "style": request.style or "american",
            "precision": request.precision or "standard",
            "time_steps": request.time_steps or 252,
            "random_seed": request.random_seed,
            "antithetic": (
                request.antithetic if request.antithetic is not None else True
            ),
            "q": request.q or 0.0,
        }

        dividend_dates = None
        dividend_amounts = None

        if request.dividend_mode and request.dividend_mode != "none":
            if request.dividend_mode == "yield" and request.q:
                params["q"] = request.q

            elif request.dividend_mode == "discrete":
                # Handle new discrete dividend format
                if request.dividend_dates and request.dividend_amounts:
                    dividend_dates = request.dividend_dates
                    dividend_amounts = request.dividend_amounts
                    params["dividend_dates"] = dividend_dates
                    params["dividend_amounts"] = dividend_amounts
                    params["dividend_mode"] = "discrete"

                # Handle legacy discrete dividend format
                elif (
                    request.dividend_amt
                    and request.dividend_freq
                    and request.dividend_first_day is not None
                ):
                    # Convert legacy format to new format
                    dividend_dates = []
                    dividend_amounts = []

                    current_div_day = request.dividend_first_day
                    while current_div_day <= request.T * 365:
                        div_time = current_div_day / 365.0
                        if div_time <= request.T:
                            dividend_dates.append(div_time)
                            dividend_amounts.append(request.dividend_amt)
                        current_div_day += request.dividend_freq

                    if dividend_dates:
                        params["dividend_dates"] = dividend_dates
                        params["dividend_amounts"] = dividend_amounts
                        params["dividend_mode"] = "discrete"
                else:
                    # Fallback: approximate with continuous yield if no proper discrete data
                    if request.dividend_amt and request.dividend_freq:
                        annual_dividend = request.dividend_amt * (
                            365 / request.dividend_freq
                        )
                        params["q"] = annual_dividend / request.S0

        print(f"🚀 Starting Monte Carlo simulation...")

        # Calculate Monte Carlo price with full analysis
        result = calculate_monte_carlo_full(**params)

        print(f"✅ Monte Carlo calculation complete!")
        print(f"💰 Option Price: ${result['price']:.4f}")
        print(f"📈 Convergence points: {len(result['convergence'])}")
        print(
            f"🛤️ Sample paths: {len(set(p['path_id'] for p in result['path_sample']))}"
        )

        # Convert to response models
        convergence_points = [
            MonteCarloConvergencePoint(**point) for point in result["convergence"]
        ]

        path_points = [MonteCarloPathPoint(**point) for point in result["path_sample"]]

        confidence_interval = MonteCarloConfidenceInterval(
            **result["confidence_interval"]
        )
        stats = MonteCarloStats(**result["stats"])

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
                "antithetic_variates": params["antithetic"],
                "random_seed": params["random_seed"],
                "precision_level": request.precision,
                "option_style": request.style,
                "dividend_mode": request.dividend_mode or "none",
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
            "American and Asian options",
            "Statistical confidence intervals",
            "Convergence analysis",
            "Sample path visualization",
            "Antithetic variance reduction",
            "Flexible simulation parameters",
            "Path-dependent option support",
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
        ],
        "parameters": {
            "simulations": "Number of Monte Carlo simulations (1K - 10M)",
            "time_steps": "Time discretization steps (default: 252)",
            "antithetic": "Use antithetic variance reduction (default: true)",
            "random_seed": "Seed for reproducible results (optional)",
        },
    }
