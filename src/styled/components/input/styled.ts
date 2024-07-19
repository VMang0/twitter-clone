import styled from 'styled-components';

export const Input = styled.input`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '70px'};
  background-color: transparent;
  padding: 23px 20px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: ${({ theme, fontWeight }) => (fontWeight ? theme.fontWeight[fontWeight] : theme.fontWeight[400])};
  color: ${({ theme, color }) => (color ? theme.themeColors[color] : theme.themeColors[700])};
  border-radius: ${({ borderRadius }) => borderRadius || '6px'};
  font-size: ${({ theme, fontSize }) => (fontSize ? theme.fontSize[fontSize] : theme.fontSize.m)};
  line-height: ${({ theme, lineHeight }) => (lineHeight ? theme.lineHeight[lineHeight] : theme.lineHeight.m)};
  &:focus {
    outline-color: ${({ theme, color }) => (color ? theme.themeColors[color] : theme.themeColors[800])};
  }
`;
