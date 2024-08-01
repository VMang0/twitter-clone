import { SearchType } from '@constants/searchType';
import { TweetWithCreatorType } from '@type/tweet';
import { UserType } from '@type/user';

export type SearchResultPropsType = {
  data: UserType[] | TweetWithCreatorType[];
  searchType: SearchType;
};
