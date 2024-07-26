import { CreateTweet } from '@components/Forms/CreateTweet';
import { TweetsList } from '@components/TweetsList';
import { Modal } from '@constants/modal';
import { useTweetsByUser } from '@hooks/useTweetsByUser';
import { PageContainer } from '@styled/components/layout/styled';

export const Feed = () => {
  const { tweets } = useTweetsByUser(null);

  return (
    <PageContainer>
      <CreateTweet formId={Modal.CREATE_TWEET_FEED} />
      <TweetsList tweets={tweets} />
    </PageContainer>
  );
};
