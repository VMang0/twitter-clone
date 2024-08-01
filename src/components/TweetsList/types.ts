import { TweetWithCreatorType } from '@type/tweet';

export type TweetListPropsType = {
  tweets: TweetWithCreatorType[];
  showImage?: boolean;
  isSearchTweet?: boolean;
};
