import {
  RecommendationsContainer,
  RecommendationsLogo,
} from '@components/RightSidebar/components/Recommendations/styled';
import { UsersList } from '@components/UsersList';
import { useAuthState } from '@hooks/useAuthState';
import { useUsersActions } from '@hooks/useUsersActions';

export const Recommendations = () => {
  const { id } = useAuthState();
  const { recommendationUsers } = useUsersActions(id as string);

  return (
    <RecommendationsContainer>
      <RecommendationsLogo>You might like</RecommendationsLogo>
      <UsersList users={recommendationUsers} isSubscribe isNavigateToProfile />
    </RecommendationsContainer>
  );
};
