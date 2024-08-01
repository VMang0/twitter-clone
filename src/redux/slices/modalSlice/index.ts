import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalSliceInitialStateType = {
  modal: {
    id: string;
    isOpen: boolean;
  };
  notification: {
    isOpen: boolean;
    message: string;
  };
};

const initialState: ModalSliceInitialStateType = {
  modal: {
    id: '',
    isOpen: false,
  },
  notification: {
    isOpen: false,
    message: '',
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.modal.isOpen = true;
      state.modal.id = action.payload;
    },
    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.id = '';
    },
    showNotification: (state, action: PayloadAction<string>) => {
      state.notification.message = action.payload;
      state.notification.isOpen = true;
    },
    hideNotification: (state) => {
      state.notification.message = '';
      state.notification.isOpen = false;
    },
  },
});

export const { openModal, closeModal, showNotification, hideNotification } = modalSlice.actions;
export default modalSlice.reducer;
