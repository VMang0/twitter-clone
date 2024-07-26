import { useSelector } from 'react-redux';

import { isAuthenticatedUserSelector, userDataSelector } from '@redux/slices/userSlice/selectors';

export const useAuthState = () => {
  const isAuthenticated = useSelector(isAuthenticatedUserSelector);
  const userData = useSelector(userDataSelector);

  return {
    isAuthenticated,
    userData,
  };
};
