import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getSearchTweets } from '@api/tweets/getSearchTweets';
import { getSearchUsers } from '@api/user/getSearchUsers';
import { SearchResult } from '@components/RightSidebar/components/Searchbar/components/SearchResult';
import { SearchbarContainer } from '@components/RightSidebar/components/Searchbar/styled';
import { SearchInput } from '@components/SearchInput';
import { Paths } from '@constants/paths';
import { SearchType } from '@constants/searchType';
import { useAuthState } from '@hooks/useAuthState';
import { useDebounce } from '@hooks/useDebounce';
import { useLoader } from '@hooks/useLoader';
import { TweetWithCreatorType } from '@type/tweet';
import { UserType } from '@type/user';

export const Searchbar = () => {
  const { id } = useAuthState();
  const { pathname } = useLocation();
  const { showLoader, hideLoader } = useLoader();
  const [searchValue, setSearchValue] = useState('');
  const [searchedData, setSearchedData] = useState<TweetWithCreatorType[] | UserType[] | []>([]);

  const searchType = pathname === Paths.FEED ? SearchType.USERS : SearchType.TWEETS;
  const isSearchUsers = searchType === SearchType.USERS;
  const inputPlaceHolder = isSearchUsers ? 'Search Users' : 'Search Twitter';

  const debouncedQuery = useDebounce(searchValue);

  const searchData = useCallback(async () => {
    showLoader();
    if (isSearchUsers) {
      const data = await getSearchUsers(debouncedQuery, id);
      setSearchedData(data);
    } else {
      await getSearchTweets(debouncedQuery, setSearchedData);
    }
    hideLoader();
  }, [debouncedQuery, searchType]);

  useEffect(() => {
    if (debouncedQuery && debouncedQuery.trim() !== '') {
      searchData();
    }
  }, [debouncedQuery]);

  useEffect(() => {
    setSearchedData([]);
    setSearchValue('');
  }, [pathname]);

  return (
    <SearchbarContainer>
      <SearchInput placeholder={inputPlaceHolder} searchQuery={searchValue} setSearchValue={setSearchValue} />
      {searchValue.length > 0 && <SearchResult data={searchedData} searchType={searchType} />}
    </SearchbarContainer>
  );
};
