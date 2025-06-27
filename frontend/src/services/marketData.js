// frontend/src/services/marketData.js
import axios from 'axios';

const API_BASE = 'http://localhost:8000/api';

export const marketDataService = {
  // Fetch market data for multiple symbols
  async getMarketData(symbols) {
    try {
      const symbolString = Array.isArray(symbols) ? symbols.join(',') : symbols;
      const response = await axios.get(`${API_BASE}/market-data?symbols=${symbolString}`);
      return { success: true, data: response.data.data };
    } catch (error) {
      console.error('Failed to fetch market data:', error);
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to fetch market data',
        // Return mock data as fallback
        data: symbols.map(symbol => ({
          symbol,
          price: 100.00,
          change: 0.00,
          changePercent: 0.00,
          lastUpdated: new Date().toISOString()
        }))
      };
    }
  },

  // Validate a stock symbol
  async validateSymbol(symbol) {
    try {
      const response = await axios.get(`${API_BASE}/market-data/validate?symbol=${symbol}`);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Failed to validate symbol:', error);
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Failed to validate symbol'
      };
    }
  }
};