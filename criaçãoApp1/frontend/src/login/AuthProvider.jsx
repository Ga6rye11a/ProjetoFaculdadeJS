import { useState, useEffect, useMemo } from 'react';
import { AuthContext } from './authContextUtils';

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  useEffect(() => {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
  }, [token]);

  const logout = () => setToken(null);

  const value = useMemo(
    () => ({
      token,
      setToken,
      logout,
      isAuthenticated: !!token,
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

