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
    300: '#eff3f4';
    400: '#c4c4c4';
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
    300: 'rgba(0, 0, 0, 0.2)';
    900: '#202025';
  };
};

type GapsType = {
  xxs: '3px';
  xs: '5px';
  s: '10px';
  m: '15px';
  l: '20px';
  xl: '25px';
  xxl: '30px';
};

type FontSizesType = {
  xxxs: '13px';
  xxs: '14px';
  xs: '16px';
  s: '18px';
  m: '20px';
  l: '24px';
  xl: '30px';
  xxl: '42px';
  xxxl: '60px';
  exl: '84px';
};

type WidthType = {
  w20: '20px';
  w25: '25px';
  w40: '40px';
  w50: '50px';
  w60: '60px';
  w98: '98px';
  w116: '116px';
  w120: '120px';
  w280: '280px';
  w300: '300px';
  w350: '350px';
  w400: '400px';
  w450: '450px';
  w600: '600px';
  w750: '750px';
  w1580: '1580px';
};
type HeightType = {
  w20: '20px';
  w25: '25px';
  w28: '28px';
  w38: '38px';
  w44: '44px';
  w50: '50px';
  w55: '55px';
  w60: '60px';
  w70: '70px';
  w120: '120px';
  w150: '150px';
  w280: '280px';
  w300: '300px';
};

type FontType = {
  main: 'Roboto, sans-serif';
  secondary: 'Roboto Serif, sans-serif';
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

type BorderRadiusType = {
  xs: '20px';
  s: '30px';
  m: '50px';
  l: '100px';
  xl: '50%';
};

type SpacesType = {
  '0': '0';
  exs: '4px';
  xxxs: '10px';
  xxs: '15px';
  xs: '18px';
  s: '20px';
  m: '25px';
  l: '30px';
  xl: '40px';
  xxl: '50px';
  xxxl: '100px';
  exl: '150px';
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
  gap: GapsType;
  width: WidthType;
  lineHeight: LineHeightType;
  spaces: SpacesType;
  fontWeight: FontWeightType;
  borderRadius: BorderRadiusType;
  height: HeightType;
};

export type MainThemeType = ThemeType & ThemeColorsType;
