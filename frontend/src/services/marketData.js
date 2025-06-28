// frontend/src/services/marketData.js
import axios from "axios";

const API_BASE = "http://localhost:8000/api";

export const marketDataService = {
  // Fetch market data for multiple symbols
  async getMarketData(symbols) {
    try {
      // Ensure symbols is an array and filter out any empty values
      const symbolsArray = Array.isArray(symbols) ? symbols : [symbols];
      const cleanSymbols = symbolsArray.filter((s) => s && s.trim());

      if (cleanSymbols.length === 0) {
        throw new Error("No valid symbols provided");
      }

      const symbolString = cleanSymbols.join(",");
      console.log("Requesting market data for:", symbolString); // Debug log

      const response = await axios.get(
        `${API_BASE}/market-data?symbols=${symbolString}`,
      );
      return { success: true, data: response.data.data };
    } catch (error) {
      console.error("Failed to fetch market data:", error);

      // Create fallback data for the requested symbols
      const fallbackSymbols = Array.isArray(symbols) ? symbols : [symbols];
      return {
        success: false,
        error: error.response?.data?.detail || "Failed to fetch market data",
        // Return mock data as fallback
        data: fallbackSymbols
          .filter((s) => s && s.trim())
          .map((symbol) => ({
            symbol: symbol.toUpperCase(),
            price: 100.0,
            change: 0.0,
            changePercent: 0.0,
            lastUpdated: new Date().toISOString(),
          })),
      };
    }
  },

  // Validate a stock symbol
  async validateSymbol(symbol) {
    try {
      const response = await axios.get(
        `${API_BASE}/market-data/validate?symbol=${symbol}`,
      );
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Failed to validate symbol:", error);
      return {
        success: false,
        error: error.response?.data?.detail || "Failed to validate symbol",
      };
    }
  },
};
