import { FC, MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';

import CancelIcon from '@assets/icons/close-icon.svg';
import { CancelPictureButton, CancelPictureIcon } from '@components/Forms/CreateTweet/components/UploadedImage/styled';
import { BackgroundBlur, ModalContainer } from '@components/Modal/styled';
import { ModalPropsType } from '@components/Modal/types';
import { Portal } from '@components/Portal';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useBodyOverflow } from '@hooks/useBodyOverflow';
import { closeModal } from '@redux/slices/modalSlice';
import { isModalOpenSelector, modalIdSelector } from '@redux/slices/modalSlice/selectors';

export const Modal: FC<ModalPropsType> = ({ children, id }) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useSelector(isModalOpenSelector);
  const idModal = useSelector(modalIdSelector);

  const handleCloseModal = () => dispatch(closeModal());
  const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation();

  useBodyOverflow(isModalOpen);

  return (
    <Portal>
      {isModalOpen && idModal === id && (
        <BackgroundBlur onClick={handleCloseModal}>
          <ModalContainer onClick={stopPropagation}>
            <CancelPictureButton onClick={handleCloseModal}>
              <CancelPictureIcon src={CancelIcon} alt="close modal" />
            </CancelPictureButton>
            {children}
          </ModalContainer>
        </BackgroundBlur>
      )}
    </Portal>
  );
};
