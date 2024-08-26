import { useEffect } from 'react';

import { AddUsername } from '@components/Forms/AddUsername';
import { CreateTweet } from '@components/Forms/CreateTweet';
import { Modal } from '@components/Modal';
import { TweetsList } from '@components/TweetsList';
import { Modal as ModalConst } from '@constants/modal';
import { useAuthState } from '@hooks/useAuthState';
import { useModal } from '@hooks/useModal';
import { useTweetsByUser } from '@hooks/useTweetsByUser';
import { Divider } from '@styled/components/divider/styled';
import { PageContainer } from '@styled/components/layout/styled';

export const Feed = () => {
  const { userData, isAuthenticated } = useAuthState();
  const { isModalOpen, openModal } = useModal(ModalConst.ADD_USERNAME);

  const { tweets } = useTweetsByUser(null);

  useEffect(() => {
    if (userData && isAuthenticated && !userData?.username) {
      openModal(ModalConst.ADD_USERNAME);
    }
  }, []);

  return (
    <PageContainer>
      <Divider />
      <CreateTweet formId={ModalConst.CREATE_TWEET_FEED} />
      <Divider />
      <TweetsList tweets={tweets} />

      {isModalOpen && (
        <Modal isCloseable={false}>
          <AddUsername />
        </Modal>
      )}
    </PageContainer>
  );
};
