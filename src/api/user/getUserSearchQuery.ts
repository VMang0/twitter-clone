import { collection, endAt, limit, orderBy, query, startAt, where } from 'firebase/firestore';

import { db } from '../../firebase';

export const getUserSearchQuery = (queryValue: string, userId: string) => {
  const nameQuery = query(
    collection(db, 'users'),
    where('id', '!=', userId),
    orderBy('name'),
    startAt(queryValue),
    endAt(`${queryValue}\uf8ff`),
    limit(10),
  );

  const usernameQuery = query(
    collection(db, 'users'),
    where('id', '!=', userId),
    orderBy('username'),
    startAt(queryValue),
    endAt(`${queryValue}\uf8ff`),
    limit(10),
  );
  return { nameQuery, usernameQuery };
};
