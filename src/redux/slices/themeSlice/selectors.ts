import { RootState } from '@redux/store';

export const themeSelector = (state: RootState) => state.theme.theme;
