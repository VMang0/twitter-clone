import { Timestamp } from 'firebase/firestore';

export const formateTimestampToDate = (timestamp: Timestamp): string => {
  return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000).toLocaleString();
};
