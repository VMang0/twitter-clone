import { lightTheme, theme } from '@styled/theme';

export type ButtonType = {
  width?: string;
  height?: string;
  fontWeight?: keyof typeof theme.fontWeight;
  color?: keyof typeof lightTheme.themeColors;
  borderRadius?: string;
  align?: string;
  fontSize?: keyof typeof theme.fontSize;
  lineHeight?: keyof typeof theme.lineHeight;
};
