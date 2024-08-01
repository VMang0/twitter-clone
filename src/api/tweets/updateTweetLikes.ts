import { collection, doc, arrayRemove, arrayUnion, updateDoc } from 'firebase/firestore';

import { handleError } from '@utils/handleError';

import { db } from '../../firebase';

export const updateTweetLikes = async (isLiked: boolean, tweetId: string, userId: string) => {
  try {
    const tweetsCollectionRef = doc(collection(db, 'tweets'), tweetId);

    if (isLiked) {
      await updateDoc(tweetsCollectionRef, {
        liked: arrayRemove(userId),
      });
    } else {
      await updateDoc(tweetsCollectionRef, {
        liked: arrayUnion(userId),
      });
    }
  } catch (error: unknown) {
    throw handleError(error);
  }
};
