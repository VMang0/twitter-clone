import { TweetWithCreatorType } from '@type/tweet';

export type TweetItemPropsType = {
  tweet: TweetWithCreatorType;
  showImage: boolean;
  isSearchTweet: boolean;
  onOpenRemoveModal?: (id: string) => void;
};
