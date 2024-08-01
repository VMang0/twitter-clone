import GoogleLogoPath from '@assets/icons/google-icon.svg?react';
import TwitterIcon from '@assets/icons/twitter-logo-icon.svg?react';
import styled from 'styled-components';

import { TwitterLogoType } from '@styled/components/logo/types';

export const TwitterLogo = styled(TwitterIcon)<TwitterLogoType>`
  width: ${({ theme, width }) => (width ? theme.width[width] : '50px')};
  height: ${({ theme, height }) => (height ? theme.height[height] : '41px')};
  margin-bottom: ${({ theme, margin }) => (margin ? theme.spaces[margin] : '36px')};
  margin-inline: ${({ align }) => align || 'initial'};
`;

export const GoogleLogo = styled(GoogleLogoPath)``;
