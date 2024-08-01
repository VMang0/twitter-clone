import 'styled-components';
import { MainThemeType } from '@styled/types';

declare module 'styled-components' {
  export interface DefaultTheme extends MainThemeType {}
}
