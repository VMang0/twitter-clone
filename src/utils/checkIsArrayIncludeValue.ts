export const checkIsArrayIncludeValue = <T>(array: T[], value?: T): boolean => {
  if (!value) return false;
  return array?.some((item) => item === value);
};
