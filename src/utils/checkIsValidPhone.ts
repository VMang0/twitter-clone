import { PHONE_NUMBER_REGEX } from '@constants/regexp';

export const checkIsValidPhone = (value: string): boolean => PHONE_NUMBER_REGEX.test(value);
