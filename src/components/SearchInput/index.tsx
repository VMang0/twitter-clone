import { ChangeEventHandler, FC } from 'react';

import { Input, SearchIcon, SearchInputContainer } from '@components/SearchInput/styled';
import { SearchInputPropsType } from '@components/SearchInput/types';

export const SearchInput: FC<SearchInputPropsType> = ({ placeholder, searchQuery, setSearchValue }) => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <SearchInputContainer>
      <Input
        type="text"
        placeholder={placeholder || ''}
        maxLength={30}
        value={searchQuery}
        onChange={handleInputChange}
      />
      <SearchIcon />
    </SearchInputContainer>
  );
};
