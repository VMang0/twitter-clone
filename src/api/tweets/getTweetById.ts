import { collection, doc, getDoc } from 'firebase/firestore';

import { getUserById } from '@api/user/getUserById';
import { TweetType, TweetWithCreatorType } from '@type/tweet';

import { db } from '../../firebase';

export const getTweetById = async (tweetId: string): Promise<TweetWithCreatorType> => {
  const tweetsCollectionRef = doc(collection(db, 'tweets'), tweetId);
  const tweetSnapshot = await getDoc(tweetsCollectionRef);
  const tweet = tweetSnapshot.data() as TweetType;
  const { username, name, image } = await getUserById(tweet.userId);

  return {
    ...tweet,
    id: tweetSnapshot.id,
    creatorName: name,
    creatorUsername: username,
    creatorImage: image,
    createdAt: tweetSnapshot.data()?.createdAt ?? new Date(),
  } as TweetWithCreatorType;
};
