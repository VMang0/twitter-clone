import { Timestamp } from 'firebase/firestore';

export type TweetType = {
  userId: string;
  tweetText: string;
  tweetImage: string;
  liked?: string[];
  createdAt?: Timestamp;
};

export type TweetWithCreatorType = TweetType & {
  id: string;
  creatorName: string;
  creatorUsername: string;
  creatorImage: string;
};
