import { Outlet, Navigate } from 'react-router-dom';

import { Paths } from '@constants/paths';
import { useAuthState } from '@hooks/useAuthState';

export const AuthRoute = () => {
  const { isAuthenticated } = useAuthState();

  return isAuthenticated ? <Outlet /> : <Navigate to={Paths.SIGNIN} replace />;
};
