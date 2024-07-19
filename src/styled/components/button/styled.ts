import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '62px'};
  font-weight: ${({ theme, fontWeight }) => (fontWeight ? theme.fontWeight[fontWeight] : theme.fontWeight[400])};
  color: ${({ theme, color }) => (color ? theme.themeColors[color] : theme.themeColors[700])};
  border-radius: ${({ borderRadius }) => borderRadius || 0};
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ theme, fontSize }) => (fontSize ? theme.fontSize[fontSize] : theme.fontSize.m)};
  line-height: ${({ theme, lineHeight }) => (lineHeight ? theme.lineHeight[lineHeight] : theme.lineHeight.m)};
`;

export const PrimaryButton = styled(Button)`
  background-color: #1da1f2;
  color: #ffffff;
  border: none;
  border-radius: 42px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[300]};
  }
`;

export const OutlineButton = styled(Button)`
  border: 1px solid #e4eaed;
  border-radius: 42px;
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[100]};
  }
`;
