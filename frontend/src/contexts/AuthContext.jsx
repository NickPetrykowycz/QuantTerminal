// frontend/src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase, authHelpers, dbHelpers } from "../lib/supabase";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [preferences, setPreferences] = useState(null);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Set a shorter timeout and ensure we always finish loading
        const timeout = setTimeout(() => {
          console.warn("Auth initialization timeout - proceeding without auth");
          setUser(null);
          setLoading(false);
        }, 3000);

        // Get initial session with error handling
        const {
          data: { session },
          error,
        } = await authHelpers.getSession();

        clearTimeout(timeout);

        if (error) {
          console.error("Session error:", error);
          setAuthError(error.message);
          setUser(null);
        } else if (session?.user) {
          // Only set user if we have a valid session
          setUser(session.user);
          await loadUserPreferences().catch(console.error);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Auth initialization failed:", error);
        setAuthError(error.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth changes

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session?.user?.email);

      setUser(session?.user ?? null);

      if (session?.user) {
        await loadUserPreferences();
      } else {
        setPreferences(null);
      }

      // IMPORTANT: Always set loading to false after auth state change
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadUserPreferences = async () => {
    try {
      console.log("Loading user preferences...");

      // Add timeout to prevent hanging
      const prefsPromise = dbHelpers.getPreferences();
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Preferences timeout")), 3000),
      );

      const { data, error } = await Promise.race([
        prefsPromise,
        timeoutPromise,
      ]);

      if (error) {
        if (error.code === "PGRST116") {
          console.log("No preferences found, using defaults");
          setPreferences({ market_symbols: ["SPY", "AAPL", "MSFT", "TSLA"] });
        } else {
          console.error("Error loading preferences:", error);
          setPreferences({ market_symbols: ["SPY", "AAPL", "MSFT", "TSLA"] });
        }
      } else {
        console.log("Loaded preferences:", data);
        setPreferences(data);
      }
    } catch (error) {
      console.error("Error loading preferences:", error);
      setPreferences({ market_symbols: ["SPY", "AAPL", "MSFT", "TSLA"] });
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      setAuthError(null);

      // Add timeout protection
      const loginPromise = authHelpers.signIn(email, password);
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Login timeout")), 10000),
      );

      const { data, error } = await Promise.race([
        loginPromise,
        timeoutPromise,
      ]);

      if (error) throw error;

      return { success: true, user: data.user };
    } catch (error) {
      console.error("Login failed:", error);
      setLoading(false);
      return {
        success: false,
        error: error.message,
      };
    }
  };

  const register = async (email, password, firstName, lastName) => {
    try {
      setLoading(true);
      const { data, error } = await authHelpers.signUp(email, password, {
        first_name: firstName,
        last_name: lastName,
        full_name: `${firstName} ${lastName}`,
      });

      if (error) throw error;

      return { success: true, user: data.user };
    } catch (error) {
      console.error("Registration failed:", error);
      return {
        success: false,
        error: error.message,
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      const { error } = await authHelpers.signOut();
      if (error) throw error;
      setPreferences(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const updatePreferences = async (newPreferences) => {
    if (!user) return { success: false, error: "Not authenticated" };

    try {
      const dataToUpdate = {
        user_id: user.id,
        ...newPreferences,
      };

      const { data, error } = await dbHelpers.updatePreferences(dataToUpdate);

      if (error) throw error;

      setPreferences(data[0]);
      return { success: true, data: data[0] };
    } catch (error) {
      console.error("Update preferences failed:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  };

  const updateMarketPreferences = async (symbols) => {
    // Validate and clean symbols
    const cleanSymbols = symbols
      .filter((s) => s && s.trim())
      .map((s) => s.toUpperCase());

    console.log("Attempting to update symbols to:", cleanSymbols);

    // Always update local state first for immediate UI response
    setPreferences((prev) => ({ ...prev, market_symbols: cleanSymbols }));

    if (!user) {
      // For guest users, just keep local state
      console.log("Guest user - saving preferences locally");
      return { success: true, data: { market_symbols: cleanSymbols } };
    }

    try {
      // First, get current preferences to get the ID
      const { data: currentPrefs, error: getError } =
        await dbHelpers.getPreferences();

      if (getError && getError.code !== "PGRST116") {
        throw getError;
      }

      const preferencesUpdate = {
        user_id: user.id,
        market_symbols: cleanSymbols,
        updated_at: new Date().toISOString(),
      };

      // If preferences exist, add the ID for proper upsert
      if (currentPrefs?.id) {
        preferencesUpdate.id = currentPrefs.id;
      }

      console.log("Sending update to database:", preferencesUpdate);

      const { data, error } =
        await dbHelpers.updatePreferences(preferencesUpdate);

      if (error) {
        console.error("Database update error:", error);
        throw error;
      }

      console.log("Database update successful:", data);

      // Update with server response to ensure consistency
      setPreferences(data[0]);
      return { success: true, data: data[0] };
    } catch (error) {
      console.error("Update market preferences failed:", error);
      // Revert local state on error
      setPreferences((prev) => ({
        ...prev,
        market_symbols: ["SPY", "AAPL", "MSFT", "XAU"],
      }));
      return {
        success: false,
        error: error.message,
      };
    }
  };

  const value = {
    user,
    loading,
    preferences,
    authError,
    login,
    register,
    logout,
    updatePreferences,
    isAuthenticated: !!user,
    updateMarketPreferences,
    marketSymbols: preferences?.market_symbols || [
      "SPY",
      "AAPL",
      "MSFT",
      "TSLA",
    ],
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for calculations
export const useCalculations = () => {
  const [calculations, setCalculations] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getMyCalculations, isAuthenticated } = useAuth();

  const loadCalculations = async () => {
    if (!isAuthenticated) return;

    setLoading(true);
    const result = await getMyCalculations();
    if (result.success) {
      setCalculations(result.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCalculations();
  }, [isAuthenticated]);

  return {
    calculations,
    loading,
    reload: loadCalculations,
  };
};
