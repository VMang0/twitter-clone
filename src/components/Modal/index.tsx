import { FC, memo, MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';

import { CancelPictureButton } from '@components/Forms/CreateTweet/components/UploadedImage/styled';
import { BackgroundBlur, ModalContainer } from '@components/Modal/styled';
import { ModalPropsType } from '@components/Modal/types';
import { Portal } from '@components/Portal';
import { useBodyOverflow } from '@hooks/useBodyOverflow';
import { useModal } from '@hooks/useModal';
import { isModalOpenSelector } from '@redux/slices/modalSlice/selectors';

export const Modal: FC<ModalPropsType> = memo(({ children, isClosed = true }) => {
  const { closeModal } = useModal();
  const isModalOpen = useSelector(isModalOpenSelector);

  const handleCloseModal = () => {
    if (isClosed) closeModal();
  };

  const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation();

  useBodyOverflow(isModalOpen);

  return (
    <Portal>
      <BackgroundBlur onClick={handleCloseModal}>
        <ModalContainer onClick={stopPropagation}>
          {isClosed && <CancelPictureButton onClick={handleCloseModal} />}
          {children}
        </ModalContainer>
      </BackgroundBlur>
    </Portal>
  );
});
