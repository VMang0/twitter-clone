import { Theme } from '@constants/theme';

export type ThemeType = Theme.DARK | Theme.LIGHT;

export type ThemeSliceInitialStateType = {
  theme: ThemeType;
};
