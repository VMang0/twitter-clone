export const checkIsValidPhone = (value: string): boolean => /^\+?\d{10,15}$/.test(value);
