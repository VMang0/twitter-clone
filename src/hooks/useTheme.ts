import { useSelector } from 'react-redux';

import { Theme } from '@constants/theme';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { themeSelector } from '@redux/slices/themeSlice/selectors';
import { changeTheme } from '@redux/slices/themeSlice/thunk';
import { darkTheme, lightTheme } from '@styled/theme';

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useSelector(themeSelector);
  const isDarkTheme = theme === Theme.DARK;
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? Theme.LIGHT : Theme.DARK;
    dispatch(changeTheme(newTheme));
  };

  return { currentTheme, isDarkTheme, toggleTheme };
};
