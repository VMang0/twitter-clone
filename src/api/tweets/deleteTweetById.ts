import { deleteDoc, collection, doc } from 'firebase/firestore';

import { handleError } from '@utils/handleError';

import { db } from '../../firebase';

export const deleteTweetById = async (tweetId: string) => {
  try {
    const tweetsCollectionRef = doc(collection(db, 'tweets'), tweetId);
    await deleteDoc(tweetsCollectionRef);
  } catch (error: unknown) {
    throw handleError(error);
  }
};
