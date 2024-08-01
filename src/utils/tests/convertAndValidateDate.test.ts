import { convertAndValidateDate } from '@utils/convertAndValidateDate';

describe('convertAndValidateDate', () => {
  test('should return a valid Date object for a correct date', () => {
    const year = 2024;
    const month = 7;
    const day = 31;
    const result = convertAndValidateDate(year, month, day);
    expect(result).toBeInstanceOf(Date);
    expect(result?.getFullYear()).toBe(year);
    expect(result?.getMonth()).toBe(month - 1);
    expect(result?.getDate()).toBe(day);
  });

  test('should return null for an invalid date (e.g., February 30)', () => {
    const year = 2024;
    const month = 2;
    const day = 30;
    const result = convertAndValidateDate(year, month, day);
    expect(result).toBeNull();
  });

  test('should return null for an invalid date (e.g., April 31)', () => {
    const year = 2024;
    const month = 4;
    const day = 31;
    const result = convertAndValidateDate(year, month, day);
    expect(result).toBeNull();
  });

  test('should return a valid Date object for a leap year date (e.g., February 29, 2024)', () => {
    const year = 2024;
    const month = 2;
    const day = 29;
    const result = convertAndValidateDate(year, month, day);
    expect(result).toBeInstanceOf(Date);
    expect(result?.getFullYear()).toBe(year);
    expect(result?.getMonth()).toBe(month - 1);
    expect(result?.getDate()).toBe(day);
  });

  test('should return null for a non-leap year date (e.g., February 29, 2023)', () => {
    const year = 2023;
    const month = 2;
    const day = 29;
    const result = convertAndValidateDate(year, month, day);
    expect(result).toBeNull();
  });

  test('should return a valid Date object for the last day of the year', () => {
    const year = 2024;
    const month = 12;
    const day = 31;
    const result = convertAndValidateDate(year, month, day);
    expect(result).toBeInstanceOf(Date);
    expect(result?.getFullYear()).toBe(year);
    expect(result?.getMonth()).toBe(month - 1);
    expect(result?.getDate()).toBe(day);
  });

  test('should return null for a month out of range (e.g., 0)', () => {
    const year = 2024;
    const month = 0;
    const day = 10;
    const result = convertAndValidateDate(year, month, day);
    expect(result).toBeNull();
  });

  test('should return null for a month out of range (e.g., 13)', () => {
    const year = 2024;
    const month = 13;
    const day = 10;
    const result = convertAndValidateDate(year, month, day);
    expect(result).toBeNull();
  });

  test('should return null for a day out of range (e.g., 0)', () => {
    const year = 2024;
    const month = 7;
    const day = 0;
    const result = convertAndValidateDate(year, month, day);
    expect(result).toBeNull();
  });

  test('should return null for a day out of range (e.g., 32)', () => {
    const year = 2024;
    const month = 7;
    const day = 32;
    const result = convertAndValidateDate(year, month, day);
    expect(result).toBeNull();
  });
});
