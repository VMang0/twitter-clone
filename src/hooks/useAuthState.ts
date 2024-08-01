import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { isAuthenticatedUserSelector, userDataSelector } from '@redux/slices/userSlice/selectors';
import { UserType } from '@type/user';

export const useAuthState = () => {
  const isAuthenticated = useSelector(isAuthenticatedUserSelector);
  const userData = useSelector(userDataSelector) as UserType;
  const { id: userId } = useParams();

  const isAuthorizedUser = userData?.id === userId;

  return {
    id: userData?.id,
    isAuthenticated,
    userData,
    isAuthorizedUser,
  };
};
