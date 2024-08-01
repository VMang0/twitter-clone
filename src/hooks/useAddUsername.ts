import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { updateUserInfo } from '@api/user/updateUserInfo';
import { addUsernameSchema } from '@components/Forms/AddUsername/schema';
import { AddUsernameFormType } from '@components/Forms/AddUsername/types';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAuthState } from '@hooks/useAuthState';
import { useModal } from '@hooks/useModal';
import { authorizeAndAddUserData } from '@redux/slices/userSlice/thunk';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

export const useAddUsername = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { isSubmitting, errors },
  } = useForm<AddUsernameFormType>({
    mode: 'onBlur',
    defaultValues: {
      username: '',
    },
    resolver: yupResolver(addUsernameSchema),
  });

  const dispatch = useAppDispatch();
  const { closeModal } = useModal();
  const { userData, id } = useAuthState();

  const onSubmit: SubmitHandler<AddUsernameFormType> = useCallback(
    async ({ username }) => {
      const { phoneNumber, description, image, name } = userData;
      await handleAsyncFunc(
        async () => {
          await updateUserInfo(id as string, { username, phoneNumber, name, description, image });
          dispatch(
            authorizeAndAddUserData({
              ...userData,
              username,
            }),
          );
          closeModal();
        },
        dispatch,
        () => reset(),
      );
    },
    [dispatch, userData, id, closeModal, reset],
  );

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
