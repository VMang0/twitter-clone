import { setTheme } from '@redux/slices/themeSlice/index';
import { ThemeType } from '@redux/slices/themeSlice/types';
import { AppDispatch, AppThunk } from '@redux/store';

export const changeTheme =
  (newTheme: ThemeType): AppThunk =>
  (dispatch: AppDispatch) => {
    localStorage.setItem('theme', JSON.stringify(newTheme));
    dispatch(setTheme(newTheme));
  };
