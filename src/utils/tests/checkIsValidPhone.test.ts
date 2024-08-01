import { checkIsValidPhone } from '@utils/checkIsValidPhone';

describe('checkIsValidPhone', () => {
  test('should return true for a valid phone number with 10 digits', () => {
    const validPhoneNumber = '1234567890';
    expect(checkIsValidPhone(validPhoneNumber)).toBe(true);
  });

  test('should return true for a valid phone number with 15 digits', () => {
    const validPhoneNumber = '123456789012345';
    expect(checkIsValidPhone(validPhoneNumber)).toBe(true);
  });

  test('should return true for a valid phone number with a plus sign and 10 digits', () => {
    const validPhoneNumber = '+1234567890';
    expect(checkIsValidPhone(validPhoneNumber)).toBe(true);
  });

  test('should return true for a valid phone number with a plus sign and 15 digits', () => {
    const validPhoneNumber = '+123456789012345';
    expect(checkIsValidPhone(validPhoneNumber)).toBe(true);
  });

  test('should return false for a phone number with less than 10 digits', () => {
    const invalidPhoneNumber = '123456789';
    expect(checkIsValidPhone(invalidPhoneNumber)).toBe(false);
  });

  test('should return false for a phone number with more than 15 digits', () => {
    const invalidPhoneNumber = '1234567890123456';
    expect(checkIsValidPhone(invalidPhoneNumber)).toBe(false);
  });

  test('should return false for a phone number with letters', () => {
    const invalidPhoneNumber = '12345abcde';
    expect(checkIsValidPhone(invalidPhoneNumber)).toBe(false);
  });

  test('should return false for a phone number with special characters', () => {
    const invalidPhoneNumber = '12345!@#$%';
    expect(checkIsValidPhone(invalidPhoneNumber)).toBe(false);
  });

  test('should return false for a phone number with spaces', () => {
    const invalidPhoneNumber = '12345 67890';
    expect(checkIsValidPhone(invalidPhoneNumber)).toBe(false);
  });

  test('should return false for an empty string', () => {
    const invalidPhoneNumber = '';
    expect(checkIsValidPhone(invalidPhoneNumber)).toBe(false);
  });

  test('should return false for a phone number with a plus sign and less than 10 digits', () => {
    const invalidPhoneNumber = '+123456789';
    expect(checkIsValidPhone(invalidPhoneNumber)).toBe(false);
  });

  test('should return false for a phone number with a plus sign and more than 15 digits', () => {
    const invalidPhoneNumber = '+1234567890123456';
    expect(checkIsValidPhone(invalidPhoneNumber)).toBe(false);
  });
});
