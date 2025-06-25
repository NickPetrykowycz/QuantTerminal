from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List

from Binomial import price_binomial

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

# === Helper for sampling steps ===
def sample_steps(max_steps: int,
                 mode: str = 'simple',
                 num_small: int = 10,
                 num_large: int = 10) -> List[int]:
    """
    Return a list of step counts N according to precision mode:
    - 'simple': powers of 2 up to max_steps
    - 'advanced': small linear then log-spaced large
    - 'precise': every step from 1 to max_steps
    """
    if mode == 'simple':
        Ns = []
        n = 1
        while n <= max_steps:
            Ns.append(n)
            n *= 2
        return Ns
    elif mode == 'advanced':
        small = list(range(1, min(num_small, max_steps) + 1))
        import numpy as np
        large = np.unique(
            np.logspace(
                np.log10(num_small + 1),
                np.log10(max_steps),
                num_large,
                dtype=int
            )
        ).tolist()
        return small + large
    elif mode == 'precise':
        return list(range(1, max_steps + 1))
    else:
        return sample_steps(max_steps, mode='advanced')

# === Request Model ===
class BinomialRequest(BaseModel):
    S0: float
    K: float
    T: float
    r: float
    sigma: float
    N: int
    option_type: str
    american: bool
    precision: Optional[str] = 'simple'  # 'simple'|'advanced'|'precise'
    q: Optional[float] = None
    dividend_freq: Optional[int] = None
    dividend_amt: Optional[float] = None
    dividend_first_day: Optional[int] = None
    conv_points: Optional[int] = 10  # used for advanced sampling

@app.post("/api/binomial")
def price_binomial_endpoint(req: BinomialRequest):
    """
    Return binomial price and convergence series based on requested precision.
    """
    # Determine sampling of steps
    steps = sample_steps(req.N, mode=req.precision, num_large=req.conv_points)
    convergence = []
    for n in steps:
        p = price_binomial(
            S0=req.S0, K=req.K, T=req.T, r=req.r, sigma=req.sigma,
            N=n,
            option_type=req.option_type,
            style='american' if req.american else 'european',
            dividend_mode='yield' if req.q else 'none',
            q=req.q or 0.0,
            div_freq=req.dividend_freq,
            div_amt=req.dividend_amt,
            div_first_day=req.dividend_first_day
        )
        convergence.append({"N": n, "price": round(p, 4)})

    # Compute final price at N
    final_price = price_binomial(
        S0=req.S0, K=req.K, T=req.T, r=req.r, sigma=req.sigma,
        N=req.N,
        option_type=req.option_type,
        style='american' if req.american else 'european',
        dividend_mode='yield' if req.q else 'none',
        q=req.q or 0.0,
        div_freq=req.dividend_freq,
        div_amt=req.dividend_amt,
        div_first_day=req.dividend_first_day
    )

    return {
        "price": round(final_price, 4),
        "convergence": convergence
    }
