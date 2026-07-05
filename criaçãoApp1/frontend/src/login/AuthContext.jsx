import { useContext } from 'react';
import { AuthContext } from './authContextUtils';

export function useAuth() {
  return useContext(AuthContext);
}

