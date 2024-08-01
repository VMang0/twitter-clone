import { collection, getDocs, query, where } from 'firebase/firestore';

import { UserType } from '@type/user';

import { db } from '../../firebase';

export const getUserById = async (userId: string): Promise<UserType> => {
  const userQuery = query(collection(db, 'users'), where('id', '==', userId));
  const userSnapshot = await getDocs(userQuery);

  return userSnapshot.docs[0]?.data() as UserType;
};
