from pydantic import BaseModel
from typing import Optional, List, Dict, Any

class ConvergencePoint(BaseModel):
    """Single point in convergence analysis"""
    N: int
    price: float

class TimeSeriesPoint(BaseModel):
    """Single point in time series analysis"""
    t: float
    price: float

class BinomialResponse(BaseModel):
    """Response model for binomial option pricing"""
    price: float
    convergence: Optional[List[ConvergencePoint]] = None
    time_series: Optional[List[TimeSeriesPoint]] = None
    success: bool = True
    model_info: Optional[Dict[str, Any]] = None

class BlackScholesResponse(BaseModel):
    """Response model for Black-Scholes option pricing"""
    price: float
    d1: Optional[float] = None
    d2: Optional[float] = None
    success: bool = True

class ErrorResponse(BaseModel):
    """Standard error response model"""
    error: str
    detail: Optional[str] = None
    success: bool = False