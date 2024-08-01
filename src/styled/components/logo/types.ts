import { theme } from '@styled/theme';

export type TwitterLogoType = {
  width?: keyof typeof theme.width;
  height?: keyof typeof theme.height;
  margin?: keyof typeof theme.spaces;
  align?: string;
};
