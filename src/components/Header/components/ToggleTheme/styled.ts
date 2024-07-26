import styled, { css } from 'styled-components';

import { ToggleLabelProps } from '@components/Header/components/ToggleTheme/types';

export const ToggleLabel = styled.label<ToggleLabelProps>`
  cursor: pointer;
  text-indent: -9999px;
  width: 55px;
  height: 30px;
  background: ${({ theme }) => theme.colors.gray[400]};
  display: block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.white.DEFAULT};
    border-radius: 90px;
    transition: 0.3s;
  }

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      background: ${({ theme }) => theme.colors.blue.DEFAULT};
      &:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
      }
    `}
`;

export const ToggleInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:active:after {
    width: 130px;
  }
`;
