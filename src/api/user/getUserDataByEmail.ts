import { collection, getDocs, limit, query, QuerySnapshot, where } from 'firebase/firestore';

import { UserType } from '@type/user';

import { db } from '../../firebase';

export const getUserDataByEmail = async (email: string): Promise<UserType | null> => {
  const usersRef = query(collection(db, 'users'), where('email', '==', email), limit(1));
  const usersSnapshot: QuerySnapshot = await getDocs(usersRef);

  return usersSnapshot.docs[0]?.data() as UserType | null;
};
