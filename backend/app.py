from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import routers
from routers import binomial, monte_carlo

app = FastAPI(
    title="OptiPrice API",
    description="Professional Options Pricing API",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# Enable CORS for your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure for production: ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers with prefixes
app.include_router(binomial.router, prefix="/api", tags=["Binomial"])
app.include_router(monte_carlo.router, prefix="/api", tags=["Monte Carlo"])


@app.get("/")
def read_root():
    """Root endpoint with API information"""
    return {
        "service": "OptiPrice API",
        "version": "1.0.0",
        "status": "running",
        "docs": "/docs",
        "endpoints": {
            "binomial": "/api/binomial",
            "monte_carlo": "/api/monte-carlo",
            "health": "/health",
        },
    }


@app.get("/health")
def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "OptiPrice API", "version": "1.0.0"}


# Global exception handler
@app.exception_handler(Exception)
async def general_exception_handler(request, exc):
    """Global exception handler for unhandled exceptions"""
    print(f"Unhandled API Exception: {exc}")
    return {"error": "Internal server error", "detail": str(exc), "success": False}


# Request logging middleware
@app.middleware("http")
async def log_requests(request, call_next):
    """Log all API requests for debugging"""
    print(f"📊 {request.method} {request.url}")
    response = await call_next(request)
    print(f"✅ Response: {response.status_code}")
    return response


if __name__ == "__main__":
    import uvicorn

    print("🚀 Starting OptiPrice API server...")
    print("📊 Interactive docs: http://localhost:8000/docs")
    print("🏥 Health check: http://localhost:8000/health")

    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True, log_level="info")
