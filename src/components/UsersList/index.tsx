import { FC, memo } from 'react';

import { Loader } from '@components/Loader';
import { ProfileSection } from '@components/ProfileSection';
import { UsersListContainer } from '@components/UsersList/styled';
import { UsersListPropsType } from '@components/UsersList/types';
import { useLoader } from '@hooks/useLoader';
import { EmptyListIcon } from '@styled/components/image/styled';

export const UsersList: FC<UsersListPropsType> = memo(({ users, isSubscribe = false, isNavigateToProfile = false }) => {
  const { isLoading } = useLoader();

  const isUsersListEmpty = users.length === 0;

  return (
    <UsersListContainer>
      {users.map((item) => (
        <ProfileSection key={item.id} {...item} isSubscribe={isSubscribe} isNavigateToProfile={isNavigateToProfile} />
      ))}
      {isUsersListEmpty && !isLoading && <EmptyListIcon />}
      {isLoading && isUsersListEmpty && <Loader />}
    </UsersListContainer>
  );
});
