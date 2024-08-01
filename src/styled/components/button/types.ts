import { lightTheme, theme } from '@styled/theme';

export type ButtonType = {
  width?: keyof typeof theme.width;
  height?: keyof typeof theme.height;
  fontWeight?: keyof typeof theme.fontWeight;
  color?: keyof typeof lightTheme.themeColors;
  borderRadius?: keyof typeof theme.borderRadius;
  align?: string;
  fontSize?: keyof typeof theme.fontSize;
  lineHeight?: keyof typeof theme.lineHeight;
};
