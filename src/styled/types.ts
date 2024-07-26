type ColorsType = {
  blue: {
    DEFAULT: '#1e97e1';
    100: '#ddeeff';
    200: '#1da1f2';
    300: '#1879b5';
    400: '#1da1f2';
  };
  gray: {
    DEFAULT: '#fcfcfc';
    200: '#f1f1f1';
    300: '#e0e0e5';
    400: '#d9d9dd';
    500: '#898989';
    600: '#737373';
    700: '#4f4f4f';
    800: '#474747';
  };
  white: {
    DEFAULT: '#fff';
  };
  black: {
    DEFAULT: '#000';
    50: '#a7b2c3';
    100: '#6c7a89';
    200: '#383842';
    900: '#202025';
  };
};

type GapsType = {
  xxs: '10px';
  xs: '20px';
  s: '24px';
  m: '40px';
  l: '50px';
  xl: '60px';
  xxl: '110px';
};

type FontSizesType = {
  xxxs: '13px';
  xxs: '14px';
  xs: '20px';
  s: '16px';
  m: '18px';
  l: '30px';
  xl: '42px';
  xxl: '60px';
  xxxl: '84px';
  exl: '24px';
};

type WidthType = {
  max: '1440px';
};

type FontType = {
  main: 'Roboto, sans-serif';
  secondary: 'Roboto Serif, sans-serif';
};

type LogoSize = {
  s: '45px';
  xl: '345px';
};

type LineHeightType = {
  xs: '100%';
  s: '120%';
  m: '150%';
  l: '187%';
};
type FontWeightType = {
  400: 400;
  500: 500;
  600: 600;
  700: 700;
  800: 800;
  900: 900;
};

type SpacesType = {
  xxxs: '10px';
  xxs: '15px';
  xs: '25px';
  s: '30px';
  m: '33px';
  l: '40px';
  xl: '45px';
  xxl: '50px';
  xxxl: '90px';
  exl: '100px';
};

type SizesType = {
  full: '100%';
  xxs: '10px';
  xs: '16px';
  s: '17px';
  m: '20px';
  l: '150px';
  xl: '250px';
};

export type ThemeColorsType = {
  themeColors: {
    DEFAULT: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
  };
};

export type ThemeType = {
  colors: ColorsType;
  fonts: FontType;
  fontSize: FontSizesType;
  logo: LogoSize;
  gap: GapsType;
  width: WidthType;
  lineHeight: LineHeightType;
  spaces: SpacesType;
  fontWeight: FontWeightType;
  sizes: SizesType;
};

export type MainThemeType = ThemeType & ThemeColorsType;
