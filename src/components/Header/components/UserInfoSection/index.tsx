import { useSelector } from 'react-redux';

import { UserInfoSectionContainer } from '@components/Header/components/UserInfoSection/styled';
import { useTweetsByUser } from '@hooks/useTweetsByUser';
import { userDataSelector } from '@redux/slices/userSlice/selectors';
import { Text } from '@styled/components/typography/styled';
import { UserType } from '@type/user';

export const UserInfoSection = () => {
  const userData = useSelector(userDataSelector);
  const { id } = userData as UserType;
  const { tweetsCount } = useTweetsByUser(id);

  return (
    <UserInfoSectionContainer>
      <Text fontSize="m" fontWeight={700} fontFamily="secondary">
        {userData?.name}
      </Text>
      <Text fontSize="s">{tweetsCount} Tweets</Text>
    </UserInfoSectionContainer>
  );
};
