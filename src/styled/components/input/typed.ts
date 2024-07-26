import { lightTheme, theme } from '@styled/theme';

export type InputType = {
  width?: string;
  height?: string;
  isError?: boolean;
  fontWeight?: keyof typeof theme.fontWeight;
  color?: keyof typeof lightTheme.themeColors;
  borderRadius?: string;
  lineHeight?: keyof typeof theme.lineHeight;
  fontSize?: keyof typeof theme.fontSize;
};
