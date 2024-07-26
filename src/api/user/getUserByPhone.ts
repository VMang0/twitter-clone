import { collection, getDocs, limit, query, QuerySnapshot, where } from 'firebase/firestore';

import { db } from '../../firebase';

export const getUserEmailByPhone = async (phoneNumber: string): Promise<string> => {
  const usersRef = query(collection(db, 'users'), where('phoneNumber', '==', phoneNumber), limit(1));
  const usersSnapshot: QuerySnapshot = await getDocs(usersRef);

  return usersSnapshot.docs[0]?.data().email as string;
};
