import LogoutIcon from '@assets/icons/logout-icon.svg?react';
import styled from 'styled-components';

import { OutlineButton } from '@styled/components/button/styled';

export const ProfileSectionContainer = styled.article<{ isShouldNavigate: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: ${({ theme }) => theme.gap.m};
  cursor: ${({ isShouldNavigate }) => (isShouldNavigate ? 'pointer' : 'default')};
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: ${({ theme }) => theme.gap.xxs};
`;

export const SubscribeButton = styled(OutlineButton)`
  border-radius: ${({ theme }) => theme.borderRadius.m};
  padding: ${({ theme }) => `${theme.spaces.xxxs} ${theme.spaces.xs}`};
  width: ${({ theme }) => theme.width.w98};
  height: ${({ theme }) => theme.height.w38};
  background: #000;
  margin-left: auto;
  color: aliceblue;
`;

export const LogoutButton = styled(LogoutIcon)`
  margin-left: auto;
  cursor: pointer;
  width: ${({ theme }) => theme.width.w20};
  height: ${({ theme }) => theme.height.w20};
  transition: all 0.3s;
  path {
    fill: ${({ theme }) => theme.themeColors[700]};
  }
  &:hover {
    path {
      fill: ${({ theme }) => theme.themeColors[800]};
    }
  }
`;
