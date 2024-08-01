import { CreateTweet } from '@components/Forms/CreateTweet';
import { Modal } from '@components/Modal';
import { ProfileSection } from '@components/ProfileSection';
import { NavbarContainer, NavbarContent, NavbarList } from '@components/Sidebar/components/Navbar/styled';
import { NavbarItem } from '@components/Sidebar/components/NavbarItem';
import { Modal as ModalConst } from '@constants/modal';
import { navbar } from '@constants/navbar';
import { useAuthState } from '@hooks/useAuthState';
import { useModal } from '@hooks/useModal';
import { PrimaryButton } from '@styled/components/button/styled';
import { TwitterLogo } from '@styled/components/logo/styled';

export const Navbar = () => {
  const { userData } = useAuthState();
  const { isModalOpen, openModal } = useModal(ModalConst.CREATE_TWEET_MODAL);

  const onOpenCreateTweetModal = () => openModal(ModalConst.CREATE_TWEET_MODAL);

  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <TwitterLogo width="w40" height="w38" margin="0" />
          <NavbarList>
            {navbar.map((item) => (
              <NavbarItem key={item.label} item={item} />
            ))}
          </NavbarList>
          <PrimaryButton height="w55" onClick={onOpenCreateTweetModal}>
            Tweet
          </PrimaryButton>
        </NavbarContent>
        <ProfileSection {...userData} isLogout />
      </NavbarContainer>

      {isModalOpen && (
        <Modal>
          <CreateTweet formId={ModalConst.CREATE_TWEET_MODAL} />
        </Modal>
      )}
    </>
  );
};
