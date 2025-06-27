// frontend/src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, authHelpers, dbHelpers } from '../lib/supabase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [preferences, setPreferences] = useState(null);

  useEffect(() => {
    // Get initial session
    authHelpers.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadUserPreferences();
      }
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      
      if (session?.user) {
        await loadUserPreferences();
      } else {
        setPreferences(null);
      }
      
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadUserPreferences = async () => {
    try {
      const { data, error } = await dbHelpers.getPreferences();
      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        console.error('Error loading preferences:', error);
      } else {
        setPreferences(data);
      }
    } catch (error) {
      console.error('Error loading preferences:', error);
    }
  };

  const login = async (email, password) => {
    try {
      const { data, error } = await authHelpers.signIn(email, password);

      if (error) throw error;

      return { success: true, user: data.user };
    } catch (error) {
      console.error('Login failed:', error);
      return { 
        success: false, 
        error: error.message 
      };
    }
  };

  const register = async (email, password, firstName, lastName) => {
    try {
      const { data, error } = await authHelpers.signUp(email, password, {
        first_name: firstName,
        last_name: lastName,
        full_name: `${firstName} ${lastName}`
      });

      if (error) throw error;

      return { success: true, user: data.user };
    } catch (error) {
      console.error('Registration failed:', error);
      return { 
        success: false, 
        error: error.message 
      };
    }
  };

  const logout = async () => {
    try {
      const { error } = await authHelpers.signOut();
      if (error) throw error;
      setPreferences(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const saveCalculation = async (calculationData) => {
    if (!user) return { success: false, error: 'Not authenticated' };

    try {
      const dataToSave = {
        user_id: user.id,
        name: calculationData.name || `${calculationData.model_type} calculation`,
        model_type: calculationData.model_type,
        parameters: calculationData.parameters,
        results: calculationData.results,
      };

      const { data, error } = await dbHelpers.saveCalculation(dataToSave);

      if (error) throw error;

      return { success: true, data: data[0] };
    } catch (error) {
      console.error('Save calculation failed:', error);
      return { 
        success: false, 
        error: error.message 
      };
    }
  };

  const getMyCalculations = async () => {
    if (!user) return { success: false, error: 'Not authenticated' };

    try {
      const { data, error } = await dbHelpers.getCalculations();

      if (error) throw error;

      return { success: true, data };
    } catch (error) {
      console.error('Get calculations failed:', error);
      return { 
        success: false, 
        error: error.message 
      };
    }
  };

  const deleteCalculation = async (id) => {
    if (!user) return { success: false, error: 'Not authenticated' };

    try {
      const { error } = await dbHelpers.deleteCalculation(id);

      if (error) throw error;

      return { success: true };
    } catch (error) {
      console.error('Delete calculation failed:', error);
      return { 
        success: false, 
        error: error.message 
      };
    }
  };

  const updatePreferences = async (newPreferences) => {
    if (!user) return { success: false, error: 'Not authenticated' };

    try {
      const dataToUpdate = {
        user_id: user.id,
        ...newPreferences
      };

      const { data, error } = await dbHelpers.updatePreferences(dataToUpdate);

      if (error) throw error;

      setPreferences(data[0]);
      return { success: true, data: data[0] };
    } catch (error) {
      console.error('Update preferences failed:', error);
      return { 
        success: false, 
        error: error.message 
      };
    }
  };

  const value = {
    user,
    loading,
    preferences,
    login,
    register,
    logout,
    saveCalculation,
    getMyCalculations,
    deleteCalculation,
    updatePreferences,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
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
    reload: loadCalculations
  };
};