import { Dispatch } from '@reduxjs/toolkit';

import { showNotification } from '@redux/slices/modalSlice';

export const handleAsyncFunc = async (asyncFunc: () => Promise<void>, dispatch: Dispatch, finallyFunc?: () => void) => {
  try {
    await asyncFunc();
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch(showNotification(error.message));
    }
  } finally {
    if (finallyFunc) {
      finallyFunc();
    }
  }
};
