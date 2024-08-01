import { useSelector } from 'react-redux';

import { Modal } from '@constants/modal';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { closeModal, openModal } from '@redux/slices/modalSlice';
import { isModalOpenSelector, modalIdSelector } from '@redux/slices/modalSlice/selectors';

export const useModal = (modalId?: Modal) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useSelector(isModalOpenSelector);
  const idModal = useSelector(modalIdSelector);

  const isCurrentModalOpen = isModalOpen && idModal === modalId;

  const handleOpenModal = (modalId: Modal) => {
    dispatch(openModal(modalId));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return { isModalOpen: isCurrentModalOpen, openModal: handleOpenModal, closeModal: handleCloseModal };
};
