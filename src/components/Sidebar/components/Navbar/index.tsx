import { useSelector } from 'react-redux';

import TwitterIcon from '@assets/icons/twitter-logo-icon.svg';
import { CreateTweet } from '@components/Forms/CreateTweet';
import { Modal } from '@components/Modal';
import { ProfileSection } from '@components/ProfileSection';
import { NavbarContainer, NavbarContent, NavbarList } from '@components/Sidebar/components/Navbar/styled';
import { NavbarItem } from '@components/Sidebar/components/NavbarItem';
import { Modal as ModalConst } from '@constants/modal';
import { navbar } from '@constants/navbar';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { openModal } from '@redux/slices/modalSlice';
import { userDataSelector } from '@redux/slices/userSlice/selectors';
import { PrimaryButton } from '@styled/components/button/styled';
import { TwitterLogo } from '@styled/components/logo/styled';
import { UserType } from '@type/user';

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const userData = useSelector(userDataSelector);
  const { name, image, username } = userData as UserType;

  const onOpenCreateTweetModal = () => dispatch(openModal(ModalConst.CREATE_TWEET_MODAL));

  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <TwitterLogo src={TwitterIcon} alt="blue bird" width="40px" height="33px" margin="0" />
          <NavbarList>
            {navbar.map((item) => (
              <NavbarItem key={item.label} item={item} />
            ))}
          </NavbarList>
          <PrimaryButton height="55px" onClick={onOpenCreateTweetModal}>
            Tweet
          </PrimaryButton>
        </NavbarContent>
        <ProfileSection name={name} image={image as string} username={username as string} />
      </NavbarContainer>
      <Modal id={ModalConst.CREATE_TWEET_MODAL}>
        <CreateTweet formId={ModalConst.CREATE_TWEET_MODAL} />
      </Modal>
    </>
  );
};
