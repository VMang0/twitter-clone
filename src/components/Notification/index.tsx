import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { NotificationContainer, NotificationWrapper } from '@components/Notification/styled';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { hideNotification } from '@redux/slices/modalSlice';
import { isNotificationShowSelector, notificationMessageSelector } from '@redux/slices/modalSlice/selectors';

import { DATA_TEST_ID } from '../../../cypress/e2e/data';

export const Notification = () => {
  const dispatch = useAppDispatch();
  const isNotificationShow = useSelector(isNotificationShowSelector);
  const notificationMessage = useSelector(notificationMessageSelector);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isNotificationShow) {
      timer = setTimeout(() => dispatch(hideNotification()), 3000);
    }
    return () => clearTimeout(timer);
  }, [isNotificationShow, dispatch]);

  if (!isNotificationShow) {
    return null;
  }

  return (
    <NotificationContainer data-test-id={DATA_TEST_ID.NOTIFICATION}>
      <NotificationWrapper>{notificationMessage}</NotificationWrapper>
    </NotificationContainer>
  );
};
