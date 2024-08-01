import { lightTheme, theme } from '@styled/theme';

export type InputType = {
  width?: keyof typeof theme.width;
  height?: keyof typeof theme.height;
  isError?: boolean;
  fontWeight?: keyof typeof theme.fontWeight;
  color?: keyof typeof lightTheme.themeColors;
  borderRadius?: keyof typeof theme.borderRadius;
  lineHeight?: keyof typeof theme.lineHeight;
  fontSize?: keyof typeof theme.fontSize;
};
