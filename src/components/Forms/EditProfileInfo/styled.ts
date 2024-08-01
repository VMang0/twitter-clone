import styled from 'styled-components';

export const EditProfileInfoForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.width.w750};
  gap: ${({ theme }) => theme.gap.xl};
  box-sizing: border-box;
  transition: height 0.3s ease;
  padding: ${({ theme }) => theme.spaces.xxxs};
`;

export const ProfileEditAvatar = styled.div<{ profileUrl: string }>`
  margin-inline: auto;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  width: ${({ theme }) => theme.width.w120};
  height: ${({ theme }) => theme.height.w120};
  border: 1px solid #c4c4c4;
  background: url(${({ profileUrl }) => profileUrl}) no-repeat center/cover;
`;

export const ImageContainer = styled.div`
  position: relative;
`;
