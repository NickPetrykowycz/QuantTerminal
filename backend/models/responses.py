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

class ErrorResponse(BaseModel):
    """Standard error response model"""
    error: str
    detail: Optional[str] = None
    success: bool = False

class MonteCarloConvergencePoint(BaseModel):
    """Single point in Monte Carlo convergence analysis"""
    simulations: int
    price: float
    std_error: Optional[float] = None
    upper_ci: Optional[float] = None
    lower_ci: Optional[float] = None

class MonteCarloPathPoint(BaseModel):
    """Single point in a simulation path"""
    time: float
    price: float
    path_id: int

class MonteCarloStats(BaseModel):
    """Statistical information about the Monte Carlo simulation"""
    simulations: int
    std_error: float
    confidence_level: float = 0.95

class MonteCarloConfidenceInterval(BaseModel):
    """Confidence interval for Monte Carlo estimate"""
    lower: float
    upper: float
    confidence_level: float = 0.95

class MonteCarloResponse(BaseModel):
    """Response model for Monte Carlo option pricing"""
    price: float
    convergence: Optional[List[MonteCarloConvergencePoint]] = None
    path_sample: Optional[List[MonteCarloPathPoint]] = None
    confidence_interval: Optional[MonteCarloConfidenceInterval] = None
    stats: Optional[MonteCarloStats] = None
    success: bool = True
    model_info: Optional[Dict[str, Any]] = None