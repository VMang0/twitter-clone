import { collection, orderBy, query, Query, where } from 'firebase/firestore';

import { db } from '../../firebase';

export const getQueryTweets = (userId: string | null): Query => {
  if (userId) {
    return query(collection(db, 'tweets'), where('userId', '==', userId), orderBy('createdAt', 'desc'));
  }
  return query(collection(db, 'tweets'), orderBy('createdAt', 'desc'));
};
