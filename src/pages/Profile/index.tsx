import { useSelector } from 'react-redux';

import { CreateTweet } from '@components/Forms/CreateTweet';
import { EditProfileInfo } from '@components/Forms/EditProfileInfo';
import { Modal } from '@components/Modal';
import { TweetsList } from '@components/TweetsList';
import { Modal as ModalConst } from '@constants/modal';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useTweetsByUser } from '@hooks/useTweetsByUser';
import { openModal } from '@redux/slices/modalSlice';
import { userDataSelector } from '@redux/slices/userSlice/selectors';
import { OutlineButton } from '@styled/components/button/styled';
import { PageContainer } from '@styled/components/layout/styled';
import { UserType } from '@type/user';

export const Profile = () => {
  const dispatch = useAppDispatch();
  const userData = useSelector(userDataSelector);
  const { id } = userData as UserType;
  const { tweets } = useTweetsByUser(id);

  const onOpenEditProfileModal = () => dispatch(openModal(ModalConst.EDIT_PROFILE));

  return (
    <PageContainer>
      <OutlineButton onClick={onOpenEditProfileModal} width="150px">
        Edit Profile
      </OutlineButton>
      <CreateTweet formId={ModalConst.CREATE_TWEET_PROFILE} />
      <TweetsList tweets={tweets} />
      <Modal id={ModalConst.EDIT_PROFILE}>
        <EditProfileInfo userData={userData as UserType} />
      </Modal>
    </PageContainer>
  );
};
