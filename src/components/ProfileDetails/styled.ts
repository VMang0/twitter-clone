import styled from 'styled-components';

import BasicProfileBackground from '@assets/images/background-profile-image.png';
import { OutlineButton } from '@styled/components/button/styled';
import { ProfileImage } from '@styled/components/image/styled';
import { Text } from '@styled/components/typography/styled';

export const ProfileContainer = styled.div`
  width: 100%;
`;

export const ProfileInfo = styled.div`
  padding: 0 ${({ theme }) => theme.spaces.m};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xs};
  margin-top: ${({ theme }) => theme.spaces.xxxl};
`;

export const HeaderImage = styled.div<{ backgroundImageUrl?: string }>`
  background: url(${({ backgroundImageUrl }) => backgroundImageUrl || BasicProfileBackground}) no-repeat center/cover;
  height: ${({ theme }) => theme.height.w280};
  position: relative;
`;

export const Avatar = styled(ProfileImage)`
  width: ${({ theme }) => theme.height.w150};
  height: ${({ theme }) => theme.height.w150};
  position: absolute;
  bottom: -90px;
  left: 10px;
`;

export const Name = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const Username = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const Bio = styled(Text)`
  min-height: ${({ theme }) => theme.height.w60};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const FollowInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.l};
`;

export const FollowItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const FollowNumber = styled(Text)`
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const EditButton = styled(OutlineButton)`
  position: absolute;
  bottom: -70px;
  right: 25px;
  background-color: ${({ theme }) => theme.themeColors[100]};
  border: 1px solid #ccc;
  border-radius: 50px;
  padding: 10px 15px;
  width: 120px;
  height: 44px;
  font-weight: 600;
  font-size: 17px;
  font-family: ${({ theme }) => theme.fonts.main};
`;
