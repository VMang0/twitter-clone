import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { TweetType } from '@type/tweet';

import { db } from '../../firebase';

export const saveNewTweet = async ({ userId, tweetText, tweetImage }: TweetType) => {
  const tweetsCollectionRef = collection(db, 'tweets');

  const newTweet = await addDoc(tweetsCollectionRef, {
    userId,
    tweetText,
    tweetImage,
    liked: [],
    createdAt: serverTimestamp(),
  });
  return newTweet;
};