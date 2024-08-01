import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { deleteTweetById } from '@api/tweets/deleteTweetById';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useModal } from '@hooks/useModal';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

export const useRemoveTweetForm = (tweetId: string) => {
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onBlur',
  });
  const dispatch = useAppDispatch();
  const { closeModal } = useModal();

  const onSubmit: SubmitHandler<object> = useCallback(async () => {
    await handleAsyncFunc(
      async () => {
        await deleteTweetById(tweetId);
        closeModal();
      },
      dispatch,
      () => reset(),
    );
  }, [tweetId, dispatch, closeModal, reset]);

  return {
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting,
  };
};
