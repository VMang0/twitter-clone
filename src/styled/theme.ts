import { DefaultTheme } from 'styled-components';

import { ThemeType } from '@styled/types';

export const theme: ThemeType = {
  colors: {
    blue: {
      DEFAULT: '#1e97e1',
      100: '#ddeeff',
      200: '#1da1f2',
      300: '#1879b5',
      400: '#00BC4F4D',
    },
    gray: {
      DEFAULT: '#fcfcfc',
      200: '#f1f1f1',
      300: '#e0e0e5',
      400: '#d9d9dd',
      500: '#898989',
      600: '#737373',
      700: '#4f4f4f',
      800: '#474747',
    },
    white: {
      DEFAULT: '#fff',
    },
    black: {
      DEFAULT: '#000',
      50: '#a7b2c3',
      100: '#6c7a89',
      200: '#383842',
      900: '#202025',
    },
  },
  gap: {
    xxs: '10px',
    xs: '20px',
    s: '24px',
    m: '40px',
    l: '50px',
    xl: '60px',
    xxl: '110px',
  },
  fontSize: {
    xxxs: '13px',
    xxs: '14px',
    xs: '20px',
    s: '16px',
    m: '18px',
    l: '35px',
    xl: '42px',
    xxl: '60px',
    xxxl: '84px',
    exl: '90px',
  },
  width: {
    max: '1440px',
  },
  fonts: {
    main: 'Roboto, sans-serif',
    secondary: 'Roboto Serif, sans-serif',
  },
  logo: {
    s: '45px',
    xl: '345px',
  },
  lineHeight: {
    xs: '100%',
    s: '120%',
    m: '143%',
    l: '187%',
  },
  fontWeight: {
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    800: 800,
    900: 900,
  },
  sizes: {
    full: '100%',
    xxs: '10px',
    xs: '16px',
    s: '17px',
    m: '20px',
    l: '150px',
    xl: '250px',
  },
  spaces: {
    xxxs: '10px',
    xxs: '15px',
    xs: '25px',
    s: '30px',
    m: '33px',
    l: '40px',
    xl: '45px',
    xxl: '50px',
    xxxl: '90px',
    exl: '100px',
  },
};

export const lightTheme: DefaultTheme = {
  ...theme,
  themeColors: {
    DEFAULT: theme.colors.gray.DEFAULT,
    100: theme.colors.gray[300],
    200: theme.colors.gray.DEFAULT,
    300: theme.colors.gray[400],
    400: theme.colors.gray[600],
    500: theme.colors.black[100],
    600: theme.colors.gray[700],
    700: theme.colors.black.DEFAULT,
    800: theme.colors.blue.DEFAULT,
  },
};

export const darkTheme: DefaultTheme = {
  ...theme,
  themeColors: {
    DEFAULT: '#030304',
    100: theme.colors.black[900],
    200: theme.colors.black[200],
    300: theme.colors.gray[800],
    400: theme.colors.gray[500],
    500: theme.colors.black[50],
    600: theme.colors.gray[400],
    700: theme.colors.white.DEFAULT,
    800: theme.colors.blue.DEFAULT,
  },
};
