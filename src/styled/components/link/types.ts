import { lightTheme, theme } from '@styled/theme';

export type LinkType = {
  fontWeight?: keyof typeof theme.fontWeight;
  color?: keyof typeof lightTheme.themeColors;
  align?: string;
  fontSize?: keyof typeof theme.fontSize;
  lineHeight?: keyof typeof theme.lineHeight;
  mediumSize?: keyof typeof theme.fontSize;
  smallSize?: keyof typeof theme.fontSize;
};
