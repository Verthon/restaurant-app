import { useContext } from 'react';
import { AuthDispatchContext } from '../../context/auth/AuthContext';

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);

  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within an AuthContextController');
  }

  return context;
};
