import { theme } from '@styled/theme';

export type ProfileImageType = {
  width?: keyof typeof theme.width;
  height?: keyof typeof theme.height;
  profileUrl: string;
};
