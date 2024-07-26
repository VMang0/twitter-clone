import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Theme } from '@constants/theme';
import { ThemeSliceInitialStateType, ThemeType } from '@redux/slices/themeSlice/types';

const storedTheme = localStorage.getItem('theme');
const themeData: ThemeType = storedTheme ? (JSON.parse(storedTheme) as ThemeType) : Theme.LIGHT;

const initialState: ThemeSliceInitialStateType = {
  theme: themeData,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
