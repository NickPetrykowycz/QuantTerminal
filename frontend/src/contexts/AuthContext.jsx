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
        const { data: { session }, error } = await authHelpers.getSession();

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

        // Make sure loading is set to false after auth state change
        setLoading(false);
    });

    return () => subscription.unsubscribe();
    }, []);

  const loadUserPreferences = async () => {
    try {
      const { data, error } = await Promise.race([
        dbHelpers.getPreferences(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Preferences timeout")), 2000),
        ),
      ]);

      if (error && error.code !== "PGRST116") {
        console.error("Error loading preferences:", error);
        // Set default preferences if loading fails
        setPreferences({ market_symbols: ["SPY", "AAPL", "MSFT", "XAU"] });
      } else {
        setPreferences(
          data || { market_symbols: ["SPY", "AAPL", "MSFT", "XAU"] },
        );
      }
    } catch (error) {
      console.error("Error loading preferences:", error);
      // Set default preferences on timeout
      setPreferences({ market_symbols: ["SPY", "AAPL", "MSFT", "XAU"] });
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const { data, error } = await authHelpers.signIn(email, password);

      if (error) throw error;

      return { success: true, user: data.user };
    } catch (error) {
      console.error("Login failed:", error);
      return {
        success: false,
        error: error.message,
      };
    } finally {
      setLoading(false);
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

  const saveCalculation = async (calculationData) => {
    if (!user) return { success: false, error: "Not authenticated" };

    try {
      const dataToSave = {
        user_id: user.id,
        name:
          calculationData.name || `${calculationData.model_type} calculation`,
        model_type: calculationData.model_type,
        parameters: calculationData.parameters,
        results: calculationData.results,
      };

      const { data, error } = await dbHelpers.saveCalculation(dataToSave);

      if (error) throw error;

      return { success: true, data: data[0] };
    } catch (error) {
      console.error("Save calculation failed:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  };

  const getMyCalculations = async () => {
    if (!user) return { success: false, error: "Not authenticated" };

    try {
      const { data, error } = await dbHelpers.getCalculations();

      if (error) throw error;

      return { success: true, data };
    } catch (error) {
      console.error("Get calculations failed:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  };

  const deleteCalculation = async (id) => {
    if (!user) return { success: false, error: "Not authenticated" };

    try {
      const { error } = await dbHelpers.deleteCalculation(id);

      if (error) throw error;

      return { success: true };
    } catch (error) {
      console.error("Delete calculation failed:", error);
      return {
        success: false,
        error: error.message,
      };
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
        // Always update local state first for immediate UI response
        setPreferences(prev => ({ ...prev, market_symbols: symbols }));

        if (!user) {
            // For guest users, just keep local state
            console.log('Guest user - saving preferences locally');
            return { success: true, data: { market_symbols: symbols } };
        }

        try {
            const preferencesUpdate = {
            user_id: user.id,
            market_symbols: symbols,
            updated_at: new Date().toISOString(),
            };

            const { data, error } = await dbHelpers.updatePreferences(preferencesUpdate);

            if (error) throw error;

            // Update with server response to ensure consistency
            setPreferences(data[0]);
            return { success: true, data: data[0] };
        } catch (error) {
            console.error("Update market preferences failed:", error);
            // Local state already updated above, so no need to change it
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
    saveCalculation,
    getMyCalculations,
    deleteCalculation,
    updatePreferences,
    isAuthenticated: !!user,
    updateMarketPreferences,
    marketSymbols: preferences?.market_symbols || [
      "SPY",
      "AAPL",
      "MSFT",
      "XAU",
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
