import { EMAIL_REGEX } from '@constants/regexp';

export const checkIsValidEmail = (value: string): boolean => EMAIL_REGEX.test(value);
