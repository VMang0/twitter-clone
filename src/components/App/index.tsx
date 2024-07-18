import isPropValid from '@emotion/is-prop-valid';
import { FC } from 'react';
import { StyleSheetManager } from 'styled-components';

export const App: FC = () => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
    </StyleSheetManager>
  );
};
