import sys
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List, Tuple

sys.path.append(os.path.join(os.path.dirname(__file__), 'utils', 'options_pricing_calc'))
from Binomial import binomial_option_price
from BlackScholes import callOptionPrice, putOptionPrice

app = FastAPI()

# === CORS Middleware ===
origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class BlackScholesRequest(BaseModel):
    S0: float
    K: float
    T: float
    r: float
    sigma: float
    option_type: str
    q: Optional[float] = 0.0

class BinomialRequest(BaseModel):
    S0: float
    K: float
    T: float
    r: float
    sigma: float
    N: int
    option_type: str
    american: bool
    q: Optional[float] = None
    dividend_schedule: Optional[List[Tuple[int, float]]] = None
    dividend_freq: Optional[int] = None
    dividend_amt: Optional[float] = None
    dividend_first_day: Optional[int] = None

@app.post("/api/blackscholes")
def price_black_scholes(req: BlackScholesRequest):
    if req.option_type == 'call':
        price = callOptionPrice(req.S0, req.K, req.T, req.r, req.sigma, req.q)
    else:
        price = putOptionPrice(req.S0, req.K, req.T, req.r, req.sigma, req.q)
    return {"price": round(price, 4)}

@app.post("/api/binomial")
def price_binomial(req: BinomialRequest):
    price = binomial_option_price(
        S0=req.S0, K=req.K, T=req.T, r=req.r, sigma=req.sigma, N=req.N,
        option_type=req.option_type, american=req.american,
        q=req.q,
        dividend_schedule=req.dividend_schedule,
        dividend_freq=req.dividend_freq,
        dividend_amt=req.dividend_amt,
        dividend_first_day=req.dividend_first_day
    )
    return {"price": round(price, 4)}
