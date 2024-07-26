import styled from 'styled-components';

export const ProfileImage = styled.img<{ size?: string }>`
  width: ${({ size }) => size || '60px'};
  height: ${({ size }) => size || '60px'};
  border-radius: 50%;
`;

export const Icon = styled.img<{ size?: string }>`
  width: ${({ size }) => size || '22px'};
  height: ${({ size }) => size || '20px'};
`;
