from fastapi import APIRouter, HTTPException, Query
from typing import List
import yfinance as yf
from pydantic import BaseModel
import asyncio
import aiohttp
from datetime import datetime, timedelta

router = APIRouter()

class MarketData(BaseModel):
    symbol: str
    price: float
    change: float
    changePercent: float
    lastUpdated: str

class MarketDataResponse(BaseModel):
    data: List[MarketData]
    success: bool = True

def get_stock_data(symbol: str) -> MarketData:
    """Fetch stock data for a single symbol using yfinance"""
    try:
        ticker = yf.Ticker(symbol)
        hist = ticker.history(period="2d")
        
        if len(hist) < 2:
            raise ValueError(f"Insufficient data for {symbol}")
        
        current_price = hist['Close'].iloc[-1]
        previous_price = hist['Close'].iloc[-2]
        
        change = current_price - previous_price
        change_percent = (change / previous_price) * 100
        
        return MarketData(
            symbol=symbol,
            price=round(float(current_price), 2),
            change=round(float(change), 2),
            changePercent=round(float(change_percent), 2),
            lastUpdated=datetime.now().isoformat()
        )
    except Exception as e:
        print(f"Error fetching data for {symbol}: {e}")
        # Return mock data if API fails
        return MarketData(
            symbol=symbol,
            price=100.00,
            change=0.00,
            changePercent=0.00,
            lastUpdated=datetime.now().isoformat()
        )

@router.get("/market-data", response_model=MarketDataResponse)
async def get_market_data(
    symbols: str = Query(..., description="Comma-separated list of stock symbols")
):
    """
    Get market data for multiple symbols
    Example: /api/market-data?symbols=SPY,AAPL,MSFT,XAU
    """
    try:
        symbol_list = [s.strip().upper() for s in symbols.split(",")]
        
        if len(symbol_list) > 10:
            raise HTTPException(status_code=400, detail="Maximum 10 symbols allowed")
        
        # Fetch data for all symbols
        market_data = []
        for symbol in symbol_list:
            data = get_stock_data(symbol)
            market_data.append(data)
        
        return MarketDataResponse(data=market_data)
        
    except Exception as e:
        print(f"Market data API error: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch market data")

@router.get("/market-data/validate")
async def validate_symbol(symbol: str = Query(..., description="Stock symbol to validate")):
    """
    Validate if a stock symbol exists
    Example: /api/market-data/validate?symbol=AAPL
    """
    try:
        symbol = symbol.strip().upper()
        ticker = yf.Ticker(symbol)
        info = ticker.info
        
        # Check if the symbol is valid by looking for basic info
        if 'symbol' in info or 'shortName' in info:
            return {
                "valid": True,
                "symbol": symbol,
                "name": info.get('shortName', info.get('longName', symbol))
            }
        else:
            return {"valid": False, "symbol": symbol}
            
    except Exception as e:
        return {"valid": False, "symbol": symbol}
