import { Timestamp } from 'firebase/firestore';

import { formateTimestampToDate } from '@utils/formateTimestampToDate';

describe('formateTimestampToDate', () => {
  test('should format a Timestamp to a local date string', () => {
    const timestamp = new Timestamp(1657035600, 123456789);
    const result = formateTimestampToDate(timestamp);
    const expectedDate = new Date(1657035600 * 1000 + 123456789 / 1000000).toLocaleString();
    expect(result).toBe(expectedDate);
  });

  test('should format a Timestamp representing midnight correctly', () => {
    const timestamp = new Timestamp(1657046400, 0);
    const result = formateTimestampToDate(timestamp);
    const expectedDate = new Date(1657046400 * 1000).toLocaleString();
    expect(result).toBe(expectedDate);
  });

  test('should format a Timestamp with no nanoseconds correctly', () => {
    const timestamp = new Timestamp(1657035600, 0);
    const result = formateTimestampToDate(timestamp);
    const expectedDate = new Date(1657035600 * 1000).toLocaleString();
    expect(result).toBe(expectedDate);
  });

  test('should format a Timestamp with nanoseconds to the nearest millisecond', () => {
    const timestamp = new Timestamp(1657035600, 123456789);
    const result = formateTimestampToDate(timestamp);
    const expectedDate = new Date(1657035600 * 1000 + 123456789 / 1000000).toLocaleString();
    expect(result).toBe(expectedDate);
  });

  test('should handle Timestamp with negative seconds', () => {
    const timestamp = new Timestamp(-1657035600, 123456789);
    const result = formateTimestampToDate(timestamp);
    const expectedDate = new Date(-1657035600 * 1000 + 123456789 / 1000000).toLocaleString();
    expect(result).toBe(expectedDate);
  });
});
