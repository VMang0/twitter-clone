import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-weight: 400;
    color: ${({ theme }) => theme.themeColors[700]};
    background: ${({ theme }) => theme.themeColors.DEFAULT};
    font-family: "Roboto", sans-serif;
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  #root {
    min-height: 100vh;
    height: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li,
  figure,
  blockquote,
  dl,
  dd {
    padding: 0;
    margin: 0;
  }
  ul,
  li,
  dl {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    display: inline-block;
    transition: color 0.2s ease-in;
    &:hover {
      color: ${({ theme }) => theme.colors.blue[300]};
      text-decoration: none;
    }
  }
  input, textarea {
    font-family: "Poppins", sans-serif;
    line-height: inherit;
    margin: 0;
  }
`;
