import { UserInfoSectionContainer } from '@components/Header/components/UserInfoSection/styled';
import { useAuthState } from '@hooks/useAuthState';
import { useTweetsByUser } from '@hooks/useTweetsByUser';
import { Text } from '@styled/components/typography/styled';

export const UserInfoSection = () => {
  const { userData, id } = useAuthState();
  const { tweetsCount } = useTweetsByUser(id as string);

  return (
    <UserInfoSectionContainer>
      <Text fontSize="s" fontWeight={700} fontFamily="secondary">
        {userData?.name}
      </Text>
      <Text fontSize="xs">{tweetsCount} Tweets</Text>
    </UserInfoSectionContainer>
  );
};
