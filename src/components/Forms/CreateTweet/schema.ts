import { mixed, object, string } from 'yup';

import { ACCEPTED_FILES, MAX_FILE_SIZE } from '@constants/image';

export const createTweetSchema = object({
  tweetText: string().max(272, 'Tweet text cannot exceed 272 characters'),
  tweetImage: mixed<FileList>()
    .nullable()
    .test('fileSize', 'File size should not exceed 5MB', (value) => {
      if (value instanceof FileList && value.length > 0) {
        const file = value[0];
        return file.size <= MAX_FILE_SIZE;
      }
      return true;
    })
    .test('fileFormat', 'Unsupported Format', (value) => {
      if (value instanceof FileList && value.length > 0) {
        const file = value[0];
        return ACCEPTED_FILES.includes(file.type);
      }
      return true;
    }),
});
