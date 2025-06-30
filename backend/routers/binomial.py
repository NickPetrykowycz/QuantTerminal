from typing import List

import numpy as np
from fastapi import APIRouter, HTTPException
from models.requests import BinomialRequest
from models.responses import BinomialResponse, ConvergencePoint, TimeSeriesPoint
from utils.options_pricing_calc.Binomial import price_binomial

router = APIRouter()


def generate_convergence_steps(N: int, precision: str, conv_points: int) -> List[int]:
    """
    Generate convergence steps for binomial tree analysis.
    Optimized to prevent excessive point generation.
    """
    if precision == "precise":
        # All steps from 10 to N, capped at reasonable intervals
        max_points = min(100, N)
        if N <= 100:
            step_size = max(1, N // 20)
            steps = list(range(10, N + 1, step_size))
            if N not in steps:
                steps.append(N)
            return steps
        else:
            # Logarithmic spacing for large N
            points = np.logspace(np.log10(10), np.log10(N), max_points).astype(int)
            return sorted(list(set(points)))

    elif precision == "advanced":
        # Linear for small N, then logarithmic
        steps = []

        # Linear portion: 10, 20, 30, 40, 50
        for i in range(10, min(51, N + 1), 10):
            steps.append(i)

        # Logarithmic portion: powers of 2 from 64 onwards
        power = 64
        while power <= N:
            if power > 50:
                steps.append(power)
            power *= 2

        # Add some intermediate points for smoother curve
        if N > 100:
            additional_points = [75, 100, 150, 200, 300, 400]
            for point in additional_points:
                if 50 < point < N and point not in steps:
                    steps.append(point)

        # Always include the target N
        if N not in steps and N > 10:
            steps.append(N)

        return sorted(list(set(steps)))

    else:  # 'simple'
        # Powers of 2: 8, 16, 32, 64, 128, 256, 512
        steps = []
        power = 8
        while power <= N:
            steps.append(power)
            power *= 2

        # Add a few linear points for better visualization
        linear_points = [10, 20, 30, 50]
        for point in linear_points:
            if point <= N and point not in steps:
                steps.append(point)

        # Always include target N if not already present
        if N not in steps and N >= 8:
            steps.append(N)

        return sorted(list(set(steps)))


def generate_time_series_points(T: float, steps: int = 50) -> List[float]:
    """
    Generate time points for time series analysis.
    Returns time points from small positive value to T.
    """
    # Start from a small positive value to avoid T=0 issues
    min_time = T / (steps * 10)  # Very small fraction of T
    return [float(round(t, 6)) for t in np.linspace(min_time, T, steps)]


@router.post("/binomial", response_model=BinomialResponse)
async def calculate_binomial_price(request: BinomialRequest):
    """
    Calculate binomial option price with convergence analysis and time series.
    """
    try:
        print(
            f"🌳 Binomial Request: S0={request.S0}, K={request.K}, T={request.T}, N={request.N}"
        )
        print(
            f"🎯 Option: {request.option_type} {request.style}, Precision: {request.precision}"
        )

        # Generate convergence steps
        steps = generate_convergence_steps(
            request.N, request.precision, request.conv_points
        )
        convergence = []

        # Limit steps for performance
        if len(steps) > 100:
            indices = np.linspace(0, len(steps) - 1, 50, dtype=int)
            steps = [steps[i] for i in indices]
            if request.N not in steps:
                steps.append(request.N)
                steps = sorted(steps)

        print(f"🔢 Calculating convergence for {len(steps)} steps")

        # Calculate prices for each convergence step
        for n in steps:
            try:
                price = price_binomial(
                    S0=request.S0,
                    K=request.K,
                    T=request.T,
                    r=request.r,
                    sigma=request.sigma,
                    N=n,
                    option_type=request.option_type,
                    style=request.style,
                    dividend_mode=request.dividend_mode,
                    q=request.q or 0.0,
                    div_freq=request.dividend_freq,
                    div_amt=request.dividend_amt,
                    div_first_day=request.dividend_first_day,
                )

                convergence.append(ConvergencePoint(N=n, price=round(price, 6)))

            except Exception as e:
                print(f"❌ Error calculating price for N={n}: {e}")
                continue

        if not convergence:
            raise HTTPException(
                status_code=500, detail="Failed to calculate any convergence points"
            )

        # Final price at requested N
        final_price = convergence[-1].price

        # Generate time series data (price vs time to expiry)
        print(f"📈 Calculating time series data...")
        time_series = []
        time_points = generate_time_series_points(request.T)

        # Use a moderate N for time series to balance accuracy and speed
        time_series_N = min(100, request.N)

        for t in time_points:
            try:
                price = price_binomial(
                    S0=request.S0,
                    K=request.K,
                    T=t,
                    r=request.r,
                    sigma=request.sigma,
                    N=time_series_N,
                    option_type=request.option_type,
                    style=request.style,
                    dividend_mode=request.dividend_mode,
                    q=request.q or 0.0,
                    div_freq=request.dividend_freq,
                    div_amt=request.dividend_amt,
                    div_first_day=request.dividend_first_day,
                )

                time_series.append(TimeSeriesPoint(t=t, price=round(max(0, price), 6)))

            except Exception as e:
                print(f"❌ Error calculating price for T={t}: {e}")
                continue

        print(f"✅ Final binomial price: {final_price} (N={request.N})")
        print(f"📊 Generated {len(time_series)} time series points")

        return BinomialResponse(
            price=final_price,
            convergence=convergence,
            time_series=time_series,
            success=True,
            model_info={
                "steps_calculated": len(convergence),
                "final_N": request.N,
                "precision": request.precision,
                "option_style": request.style,
                "dividend_mode": request.dividend_mode,
                "time_series_points": len(time_series),
            },
        )

    except ValueError as ve:
        print(f"🚫 Validation Error: {ve}")
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        print(f"💥 Binomial API Error: {e}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


@router.get("/binomial/info")
async def get_binomial_info():
    """Get information about the binomial pricing model."""
    return {
        "model": "Binomial Tree",
        "description": "Cox-Ross-Rubinstein binomial option pricing model",
        "features": [
            "American and European options",
            "Discrete and continuous dividends",
            "Convergence analysis",
            "Time series analysis",
            "Early exercise optimization",
        ],
    }
