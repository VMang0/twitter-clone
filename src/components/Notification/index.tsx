import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { NotificationContainer, NotificationWrapper } from '@components/Notification/styled';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { hideNotification } from '@redux/slices/modalSlice';
import { isNotificationShowSelector, notificationMessageSelector } from '@redux/slices/modalSlice/selectors';

export const Notification = () => {
  const dispatch = useAppDispatch();
  const isNotificationShow = useSelector(isNotificationShowSelector);
  const notificationMessage = useSelector(notificationMessageSelector);

  useEffect(() => {
    let timer: NodeJS.Timeout | number;
    if (isNotificationShow) {
      timer = setTimeout(() => dispatch(hideNotification()), 3000);
    }
    return () => clearTimeout(timer as NodeJS.Timeout);
  }, [isNotificationShow, dispatch]);

  if (!isNotificationShow) {
    return null;
  }

  return (
    <NotificationContainer>
      <NotificationWrapper>{notificationMessage}</NotificationWrapper>
    </NotificationContainer>
  );
};
