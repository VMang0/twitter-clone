import { lightTheme, theme } from '@styled/theme';

export type TextType = {
  fontWeight?: keyof typeof theme.fontWeight;
  color?: keyof typeof lightTheme.themeColors;
  align?: string;
  fontSize?: keyof typeof theme.fontSize;
  lineHeight?: keyof typeof theme.lineHeight;
  fontFamily?: keyof typeof theme.fonts;
  mediumSize?: keyof typeof theme.fontSize;
  smallSize?: keyof typeof theme.fontSize;
};
