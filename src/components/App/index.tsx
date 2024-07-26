import isPropValid from '@emotion/is-prop-valid';
import { FC } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import { Routes } from '@components/AppRouter';
import { Notification } from '@components/Notification';
import { useTheme } from '@hooks/useTheme';
import { GlobalStyles } from '@styled/global';

export const App: FC = () => {
  const { currentTheme } = useTheme();

  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <ThemeProvider theme={currentTheme}>
        <Notification />
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </StyleSheetManager>
  );
};
