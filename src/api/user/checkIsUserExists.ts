import { collection, getDocs, limit, query, where, QuerySnapshot } from 'firebase/firestore';

import { db } from '../../firebase';

const checkIsUserExists = async (key: string, value: string): Promise<boolean> => {
  const usersRef = query(collection(db, 'users'), where(key, '==', value), limit(1));
  const usersSnapshot: QuerySnapshot = await getDocs(usersRef);
  return !usersSnapshot.empty;
};

export const checkIsUserWithEmailExists = async (email: string): Promise<boolean> => {
  const isExists = await checkIsUserExists('email', email);
  return isExists;
};

export const checkIsUserWithPhoneExists = async (phoneNumber: string): Promise<boolean> => {
  const isExists = await checkIsUserExists('phoneNumber', phoneNumber);
  return isExists;
};
