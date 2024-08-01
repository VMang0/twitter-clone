import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUserById } from '@api/user/getUserById';
import AvatarUrl from '@assets/images/no-image.png';
import {
  Avatar,
  Bio,
  EditButton,
  FollowInfo,
  FollowItem,
  HeaderImage,
  ProfileContainer,
  ProfileInfo,
  Name,
  Username,
  FollowNumber,
} from '@components/ProfileDetails/styled';
import { Modal as ModalConst } from '@constants/modal';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAuthState } from '@hooks/useAuthState';
import { useModal } from '@hooks/useModal';
import { UserType } from '@type/user';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

import { DATA_TEST_ID } from '../../../cypress/e2e/data';

export const ProfileDetails = () => {
  const dispatch = useAppDispatch();
  const { openModal } = useModal();
  const { userData, isAuthorizedUser } = useAuthState();
  const [userInfo, setUserInfo] = useState<UserType>(userData);
  const { id: userId } = useParams();
  const { name, username, description, image } = userInfo;

  const onOpenEditProfileModal = () => openModal(ModalConst.EDIT_PROFILE);

  const handleGetUserById = async () => {
    await handleAsyncFunc(async () => {
      const user = await getUserById(userId as string);
      setUserInfo(user);
    }, dispatch);
  };

  useEffect(() => {
    if (!isAuthorizedUser) {
      handleGetUserById();
    }
  }, [isAuthorizedUser, userId]);

  useEffect(() => {
    if (isAuthorizedUser) {
      setUserInfo(userData);
    }
  }, [userData]);

  return (
    <ProfileContainer>
      <HeaderImage>
        <Avatar profileUrl={image || AvatarUrl} />
        {isAuthorizedUser && (
          <EditButton onClick={onOpenEditProfileModal} data-test-id={DATA_TEST_ID.UPDATE_PROFILE}>
            Edit Profile
          </EditButton>
        )}
      </HeaderImage>
      <ProfileInfo>
        <Name>{name}</Name>
        <Username>@{username || 'unknown'}</Username>
        <Bio>{description || ''}</Bio>
        <FollowInfo>
          <FollowItem>
            <FollowNumber>{67}</FollowNumber> Following
          </FollowItem>
          <FollowItem>
            <FollowNumber>{47}</FollowNumber> Followers
          </FollowItem>
        </FollowInfo>
      </ProfileInfo>
    </ProfileContainer>
  );
};
