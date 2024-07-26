import { collection, doc, updateDoc } from 'firebase/firestore';

import { handleError } from '@utils/handleError';

import { db } from '../../firebase';

type UpdateUserInfoType = {
  phoneNumber: string;
  name: string;
  username?: string;
  description?: string;
};

export const updateUserInfo = async (id: string, data: UpdateUserInfoType) => {
  try {
    const usersCollectionRef = doc(collection(db, 'users'), id);

    await updateDoc(usersCollectionRef, {
      ...data,
      username: data?.username || null,
      description: data?.description || null,
    });
  } catch (error: unknown) {
    throw handleError(error);
  }
};
