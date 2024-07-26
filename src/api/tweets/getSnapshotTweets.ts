import { onSnapshot, Query } from 'firebase/firestore';

import { getUserById } from '@api/user/getUserById';
import { TweetWithCreatorType } from '@type/tweet';

export const getSnapshotTweets = (query: Query, setTweets: (tweets: TweetWithCreatorType[]) => void) => {
  return onSnapshot(query, async (snapshot) => {
    const tweetsData = (await Promise.all(
      snapshot.docs.map(async (doc) => {
        const { username, name, image } = await getUserById(doc.data().userId);

        return {
          ...doc.data(),
          id: doc.id,
          creatorName: name,
          creatorUsername: username,
          creatorImage: image,
          createdAt: doc.data().createdAt ?? new Date(),
        } as TweetWithCreatorType;
      }),
    )) as TweetWithCreatorType[];

    setTweets(
      tweetsData.sort((tweet, nextTweet) => {
        const tweetSeconds = tweet?.createdAt?.seconds ?? 0;
        const nextTweetSeconds = nextTweet?.createdAt?.seconds ?? 0;
        return nextTweetSeconds - tweetSeconds;
      }),
    );
  });
};
