from enum import Enum
from typing import Optional, List

from pydantic import BaseModel, Field, validator


class OptionType(str, Enum):
    CALL = "call"
    PUT = "put"


class OptionStyle(str, Enum):
    EUROPEAN = "european"
    AMERICAN = "american"


class DividendMode(str, Enum):
    NONE = "none"
    YIELD = "yield"
    DISCRETE = "discrete"


class PrecisionLevel(str, Enum):
    SIMPLE = "simple"
    ADVANCED = "advanced"
    PRECISE = "precise"


class BinomialRequest(BaseModel):
    """Request model for binomial option pricing"""

    S0: float = Field(..., gt=0, description="Current stock price")
    K: float = Field(..., gt=0, description="Strike price")
    T: float = Field(..., gt=0, description="Time to expiry in years")
    r: float = Field(..., ge=0, description="Risk-free rate")
    sigma: float = Field(..., gt=0, description="Volatility")
    N: int = Field(512, ge=1, le=2000, description="Number of binomial steps")

    option_type: str = Field(..., description="Call or put option")
    style: Optional[str] = Field("european", description="European or American")
    precision: Optional[str] = Field("simple", description="Convergence precision")

    # Dividend parameters
    dividend_mode: Optional[str] = Field("none", description="Dividend mode")
    q: Optional[float] = Field(None, ge=0, description="Continuous dividend yield")
    dividend_freq: Optional[int] = Field(
        None, gt=0, description="Dividend frequency in days"
    )
    dividend_amt: Optional[float] = Field(None, gt=0, description="Dividend amount")
    dividend_first_day: Optional[int] = Field(
        None, ge=0, description="First dividend day"
    )

    conv_points: Optional[int] = Field(
        10, ge=5, le=100, description="Convergence points for charting"
    )


class MonteCarloPrecision(str, Enum):
    FAST = "fast"
    STANDARD = "standard"
    HIGH = "high"


class MonteCarloRequest(BaseModel):
    """Request model for Monte Carlo option pricing"""

    S0: float = Field(..., gt=0, description="Current stock price")
    K: float = Field(..., gt=0, description="Strike price")
    T: float = Field(..., gt=0, description="Time to expiry in years")
    r: float = Field(..., ge=0, description="Risk-free rate")
    sigma: float = Field(..., gt=0, description="Volatility")

    option_type: str = Field(..., description="Call or put option")
    style: Optional[str] = Field("american", description="American or Asian")
    precision: Optional[str] = Field("standard", description="Simulation precision")

    # Monte Carlo specific parameters
    simulations: Optional[int] = Field(
        None, ge=1000, le=10000000, description="Number of simulations"
    )
    time_steps: Optional[int] = Field(
        252, ge=1, le=1000, description="Time steps per simulation"
    )
    random_seed: Optional[int] = Field(
        None, ge=0, description="Random seed for reproducibility"
    )
    antithetic: Optional[bool] = Field(
        True, description="Use antithetic variance reduction"
    )

    # Dividend parameters
    dividend_mode: Optional[str] = Field(
        "none", description="Dividend mode: none, yield, discrete"
    )
    q: Optional[float] = Field(None, ge=0, description="Continuous dividend yield")

    # Discrete dividend parameters
    dividend_dates: Optional[List[float]] = Field(
        None, description="Discrete dividend dates (in years)"
    )
    dividend_amounts: Optional[List[float]] = Field(
        None, description="Discrete dividend amounts"
    )

    # Legacy parameters for backward compatibility
    dividend_freq: Optional[int] = Field(
        None, gt=0, description="Dividend frequency in days"
    )
    dividend_amt: Optional[float] = Field(None, gt=0, description="Dividend amount")
    dividend_first_day: Optional[int] = Field(
        None, ge=0, description="First dividend day"
    )

    # Analysis parameters
    convergence_points: Optional[int] = Field(
        20, ge=10, le=100, description="Convergence analysis points"
    )
    sample_paths: Optional[int] = Field(
        10, ge=5, le=50, description="Sample paths to show"
    )

    @validator("style")
    def validate_style(cls, v):
        allowed_styles = ["american", "asian"]
        if v.lower() not in allowed_styles:
            raise ValueError(f"Style must be one of: {allowed_styles}")
        return v.lower()

    @validator("dividend_dates", "dividend_amounts")
    def validate_dividend_lists(cls, v, values):
        if v is not None:
            # Check if both dates and amounts are provided
            if "dividend_dates" in values and "dividend_amounts" in values:
                dates = values.get("dividend_dates")
                amounts = values.get("dividend_amounts")
                if dates is not None and amounts is not None:
                    if len(dates) != len(amounts):
                        raise ValueError(
                            "dividend_dates and dividend_amounts must have the same length"
                        )
        return v
