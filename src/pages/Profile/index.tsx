import { useParams } from 'react-router-dom';

import { CreateTweet } from '@components/Forms/CreateTweet';
import { EditProfileInfo } from '@components/Forms/EditProfileInfo';
import { Modal } from '@components/Modal';
import { ProfileDetails } from '@components/ProfileDetails';
import { TweetsList } from '@components/TweetsList';
import { Modal as ModalConst } from '@constants/modal';
import { useAuthState } from '@hooks/useAuthState';
import { useModal } from '@hooks/useModal';
import { useTweetsByUser } from '@hooks/useTweetsByUser';
import { ProfileContainer } from '@pages/Profile/styled';
import { Divider } from '@styled/components/divider/styled';

export const Profile = () => {
  const { isModalOpen } = useModal(ModalConst.EDIT_PROFILE);
  const { userData, id, isAuthorizedUser } = useAuthState();
  const { id: userId } = useParams();
  const { tweets } = useTweetsByUser(isAuthorizedUser ? (id as string) : (userId as string));

  return (
    <ProfileContainer>
      <ProfileDetails />
      <Divider />
      {isAuthorizedUser && (
        <>
          <CreateTweet formId={ModalConst.CREATE_TWEET_PROFILE} />
          <Divider />
        </>
      )}
      <TweetsList tweets={tweets} />

      {isModalOpen && isAuthorizedUser && (
        <Modal>
          <EditProfileInfo userData={userData} />
        </Modal>
      )}
    </ProfileContainer>
  );
};
