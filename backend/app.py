from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List

from utils.options_pricing_calc.Binomial import price_binomial

app = FastAPI()

# Enable CORS for your frontend port
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:5173"] for Vite
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class BinomialRequest(BaseModel):
    S0: float
    K: float
    T: float
    r: float
    sigma: float
    N: int
    option_type: str           # 'call' or 'put'
    style: Optional[str] = 'european'  # 'american' or 'european'
    precision: Optional[str] = 'simple'   # 'simple' | 'advanced' | 'precise'
    q: Optional[float] = None             # Continuous dividend yield
    dividend_mode: Optional[str] = 'none' # 'none' | 'yield' | 'discrete'
    dividend_freq: Optional[int] = None   # (days) Only for 'discrete'
    dividend_amt: Optional[float] = None  # Only for 'discrete'
    dividend_first_day: Optional[int] = None  # (days) Only for 'discrete'
    conv_points: Optional[int] = 10       # for charting convergence

class BinomialResponse(BaseModel):
    price: float
    convergence: Optional[List[dict]] = None

@app.post("/api/binomial", response_model=BinomialResponse)
def price_binomial_api(req: BinomialRequest):
    # For convergence chart: build a range of N values (log/linear based on precision)
    def gen_steps(N, precision, conv_points):
        if precision == 'precise':
            return list(range(1, N + 1))
        elif precision == 'advanced':
            # Linear for first 10, then log2 up to N, e.g. 1..10, 12, 16, 20, 24, ..., N
            steps = list(range(1, min(11, N + 1)))
            cur = steps[-1]
            while cur < N:
                cur = min(N, int(cur * 1.2) if cur < 16 else int(cur * 1.3))
                if cur not in steps and cur <= N:
                    steps.append(cur)
            if N not in steps:
                steps.append(N)
            return steps
        else:  # 'simple'
            steps = []
            n = 1
            while n < N:
                steps.append(n)
                n *= 2
            if N not in steps:
                steps.append(N)
            return steps

    steps = gen_steps(req.N, req.precision, req.conv_points)
    convergence = []

    for n in steps:
        p = price_binomial(
            S0=req.S0,
            K=req.K,
            T=req.T,
            r=req.r,
            sigma=req.sigma,
            N=n,
            option_type=req.option_type,
            style=req.style,
            dividend_mode=req.dividend_mode,
            q=req.q or 0.0,
            div_freq=req.dividend_freq,
            div_amt=req.dividend_amt,
            div_first_day=req.dividend_first_day,
        )
        convergence.append({"N": n, "price": p})

    # Final price at requested N
    final_price = convergence[-1]["price"] if convergence else None

    return BinomialResponse(price=final_price, convergence=convergence)

# Optional root endpoint for healthcheck
@app.get("/")
def read_root():
    return {"msg": "Binomial API running"}