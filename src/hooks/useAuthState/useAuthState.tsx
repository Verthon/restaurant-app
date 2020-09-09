import { useContext } from 'react';
import { AuthStateContext } from '../../context/auth/AuthContext';

export const useAuthState = () => {
  const context = useContext(AuthStateContext);

  if (context === undefined) {
    throw new Error('useAuthState must be used within an AuthContextController');
  }

  return context;
};