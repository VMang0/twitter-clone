import { TweetWithCreatorType } from '@type/tweet';
import { UserType } from '@type/user';

export const checkIsTweetsType = (data: TweetWithCreatorType[] | UserType[]): data is TweetWithCreatorType[] => {
  return data.length === 0 || 'tweetText' in data[0];
};
