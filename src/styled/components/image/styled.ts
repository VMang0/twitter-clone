import EmptyList from '@assets/icons/no-data-icon.svg?react';
import styled from 'styled-components';

import { ProfileImageType } from '@styled/components/image/types';

export const ProfileImage = styled.div<ProfileImageType>`
  width: ${({ theme, width }) => (width ? theme.width[width] : '60px')};
  height: ${({ theme, height }) => (height ? theme.height[height] : '60px')};
  border-radius: 50%;
  background: url(${({ profileUrl }) => profileUrl}) no-repeat center/cover;
`;

export const EmptyListIcon = styled(EmptyList)`
  max-width: 100%;
`;
