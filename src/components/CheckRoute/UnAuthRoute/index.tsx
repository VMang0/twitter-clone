import { Outlet, Navigate } from 'react-router-dom';

import { Paths } from '@constants/paths';
import { useAuthState } from '@hooks/useAuthState';

export const UnAuthRoute = () => {
  const { isAuthenticated } = useAuthState();

  return !isAuthenticated ? <Outlet /> : <Navigate to={Paths.FEED} replace />;
};
