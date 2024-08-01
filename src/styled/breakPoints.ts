type Size = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

const size: Size = {
  xs: '480px',
  sm: '768px',
  md: '1024px',
  lg: '1200px',
};

export const device = {
  xs: `max-width: ${size.xs}`,
  sm: `max-width: ${size.sm}`,
  md: `max-width: ${size.md}`,
  lg: `max-width: ${size.lg}`,
};
