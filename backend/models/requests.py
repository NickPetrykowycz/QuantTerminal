from pydantic import BaseModel, Field, validator
from typing import Optional
from enum import Enum

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
    dividend_freq: Optional[int] = Field(None, gt=0, description="Dividend frequency in days")
    dividend_amt: Optional[float] = Field(None, gt=0, description="Dividend amount")
    dividend_first_day: Optional[int] = Field(None, ge=0, description="First dividend day")
    
    conv_points: Optional[int] = Field(10, ge=5, le=100, description="Convergence points for charting")

class BlackScholesRequest(BaseModel):
    """Request model for Black-Scholes option pricing"""
    S0: float = Field(..., gt=0, description="Current stock price")
    K: float = Field(..., gt=0, description="Strike price")
    T: float = Field(..., gt=0, description="Time to expiry in years")
    r: float = Field(..., ge=0, description="Risk-free rate")
    sigma: float = Field(..., gt=0, description="Volatility")
    
    option_type: str = Field(..., description="Call or put option")
    include_dividend: bool = Field(False, description="Include dividend yield")
    q: Optional[float] = Field(None, ge=0, description="Continuous dividend yield")