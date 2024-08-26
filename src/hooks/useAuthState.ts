import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { isAuthenticatedUserSelector, userDataSelector } from '@redux/slices/userSlice/selectors';
import { signOut } from '@redux/slices/userSlice/thunk';
import { UserType } from '@type/user';

export const useAuthState = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useSelector(isAuthenticatedUserSelector);
  const userData = useSelector(userDataSelector) as UserType;
  const { id: userId } = useParams();

  const isAuthorizedUser = userData?.id === userId;

  const logout = async () => {
    dispatch(signOut());
  };

  return {
    id: userData?.id || '',
    isAuthenticated,
    userData,
    isAuthorizedUser,
    logout,
  };
};
