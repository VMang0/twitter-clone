import { checkIsArrayIncludeValue } from '@utils/checkIsArrayIncludeValue';

describe('checkIsArrayIncludeValue', () => {
  test('should return true if the array includes the value', () => {
    const array = [1, 2, 3, 4];
    const value = 3;
    expect(checkIsArrayIncludeValue(array, value)).toBe(true);
  });

  test('should return false if the array does not include the value', () => {
    const array = [1, 2, 3, 4];
    const value = 5;
    expect(checkIsArrayIncludeValue(array, value)).toBe(false);
  });

  test('should return false if the value is undefined', () => {
    const array = [1, 2, 3, 4];
    const value = undefined;
    expect(checkIsArrayIncludeValue(array, value)).toBe(false);
  });

  test('should return false if the array is empty and value is defined', () => {
    const array: number[] = [];
    const value = 1;
    expect(checkIsArrayIncludeValue(array, value)).toBe(false);
  });

  test('should return false if the array is empty and value is undefined', () => {
    const array: number[] = [];
    const value = undefined;
    expect(checkIsArrayIncludeValue(array, value)).toBe(false);
  });
});
