import Search from '@assets/icons/search-icon.svg?react';
import styled from 'styled-components';

export const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  left: 20px;
  top: calc(50% - 13px);
  color: ${({ theme }) => theme.themeColors[700]};
`;

export const Input = styled.input`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  border: none;
  padding: 15px 20px 15px 50px;
  font-weight: ${({ theme }) => theme.fontWeight[600]};
  font-size: ${({ theme }) => theme.fontSize.s};
  position: relative;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.themeColors[100]};
  color: ${({ theme }) => theme.themeColors[700]};
`;
