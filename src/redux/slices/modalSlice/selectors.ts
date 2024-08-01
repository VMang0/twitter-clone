import { RootState } from '@redux/store';

export const isNotificationShowSelector = (state: RootState) => state.modal.notification.isOpen;
export const notificationMessageSelector = (state: RootState) => state.modal.notification.message;
export const isModalOpenSelector = (state: RootState) => state.modal.modal.isOpen;
export const modalIdSelector = (state: RootState) => state.modal.modal.id;
