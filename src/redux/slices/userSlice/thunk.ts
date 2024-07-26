import { authorizeUser } from '@redux/slices/userSlice/index';
import { AppDispatch, AppThunk } from '@redux/store';
import { UserType } from '@type/user';

export const authorizeAndAddUserData =
  (newUserData: UserType): AppThunk =>
  (dispatch: AppDispatch) => {
    if (!newUserData.id) throw new Error('User id is required');

    localStorage.setItem('user', JSON.stringify(newUserData));
    dispatch(authorizeUser(newUserData));
  };
