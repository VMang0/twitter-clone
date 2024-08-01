import { checkIsValidEmail } from '@utils/checkIsValidEmail';

describe('checkIsValidEmail', () => {
  test('should return true for a valid email', () => {
    const validEmail = 'test@example.com';
    expect(checkIsValidEmail(validEmail)).toBe(true);
  });

  test('should return false for an email without "@" symbol', () => {
    const invalidEmail = 'test.example.com';
    expect(checkIsValidEmail(invalidEmail)).toBe(false);
  });

  test('should return false for an email without domain', () => {
    const invalidEmail = 'test@';
    expect(checkIsValidEmail(invalidEmail)).toBe(false);
  });

  test('should return false for an email without local part', () => {
    const invalidEmail = '@example.com';
    expect(checkIsValidEmail(invalidEmail)).toBe(false);
  });

  test('should return false for an email with spaces', () => {
    const invalidEmail = 'test@ example .com';
    expect(checkIsValidEmail(invalidEmail)).toBe(false);
  });

  test('should return false for an email without top-level domain', () => {
    const invalidEmail = 'test@example';
    expect(checkIsValidEmail(invalidEmail)).toBe(false);
  });

  test('should return false for an email with multiple "@" symbols', () => {
    const invalidEmail = 'test@@example.com';
    expect(checkIsValidEmail(invalidEmail)).toBe(false);
  });

  test('should return true for an email with subdomains', () => {
    const validEmail = 'test@mail.example.com';
    expect(checkIsValidEmail(validEmail)).toBe(true);
  });

  test('should return true for an email with numeric domain', () => {
    const validEmail = 'test@123.com';
    expect(checkIsValidEmail(validEmail)).toBe(true);
  });

  test('should return false for an empty string', () => {
    const invalidEmail = '';
    expect(checkIsValidEmail(invalidEmail)).toBe(false);
  });
});
