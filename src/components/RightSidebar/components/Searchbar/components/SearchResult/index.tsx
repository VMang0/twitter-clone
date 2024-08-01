import { FC, memo, useMemo } from 'react';

import { Loader } from '@components/Loader';
import {
  SearchLogo,
  SearchResultContainer,
} from '@components/RightSidebar/components/Searchbar/components/SearchResult/styled';
import { SearchResultPropsType } from '@components/RightSidebar/components/Searchbar/components/SearchResult/types';
import { checkIsTweetsType } from '@components/RightSidebar/components/Searchbar/components/SearchResult/utils/checkIsTweetsType';
import { TweetsList } from '@components/TweetsList';
import { UsersList } from '@components/UsersList';
import { SearchType } from '@constants/searchType';
import { useLoader } from '@hooks/useLoader';
import { EmptyListIcon } from '@styled/components/image/styled';
import { TweetWithCreatorType } from '@type/tweet';
import { UserType } from '@type/user';

export const SearchResult: FC<SearchResultPropsType> = memo(({ data, searchType }) => {
  const { isLoading } = useLoader();
  const isDataEmpty = data.length === 0;

  const isTweetsType = useMemo(() => {
    return checkIsTweetsType(data);
  }, [data]);

  return (
    <SearchResultContainer>
      <SearchLogo>Search results</SearchLogo>

      {searchType === SearchType.TWEETS && !isDataEmpty && isTweetsType && (
        <TweetsList tweets={data as TweetWithCreatorType[]} showImage={false} isSearchTweet />
      )}

      {searchType === SearchType.USERS && !isDataEmpty && !isTweetsType && (
        <UsersList users={data as UserType[]} isNavigateToProfile isSubscribe={false} />
      )}
      {isDataEmpty && !isLoading && <EmptyListIcon />}
      {isLoading && <Loader />}
    </SearchResultContainer>
  );
});
