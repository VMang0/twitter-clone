import { SubmitHandler, useForm } from 'react-hook-form';

import { updateUserInfo } from '@api/user/updateUserInfo';
import { AddUsernameFormType } from '@components/Forms/AddUsername/types';
import { RemoveTweetContainer } from '@components/Forms/RemoveTweet/styled';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAuthState } from '@hooks/useAuthState';
import { useModal } from '@hooks/useModal';
import { authorizeAndAddUserData } from '@redux/slices/userSlice/thunk';
import { PrimaryButton } from '@styled/components/button/styled';
import { Input } from '@styled/components/input/styled';
import { Loader } from '@styled/components/loader/styled';
import { Text } from '@styled/components/typography/styled';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

export const AddUsername = () => {
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
  });
  const dispatch = useAppDispatch();
  const { closeModal } = useModal();
  const { userData, id } = useAuthState();

  const onSubmit: SubmitHandler<AddUsernameFormType> = async ({ username }) => {
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
  };

  return (
    <RemoveTweetContainer onSubmit={handleSubmit(onSubmit)}>
      <Text fontSize="m" mediumSize="m" smallSize="s">
        Add the user name that you will use in the application
      </Text>
      <Input
        {...register('username', {
          required: true,
          pattern: {
            value: /^[A-Za-zА-Яа-я\s]+$/,
            message: 'Username can only contain Latin and Russian letters.',
          },
        })}
        placeholder="Username"
        isError={!!errors.username}
      />
      {errors.username && errors.username.type !== 'required' && <span>{errors.username.message}</span>}
      <PrimaryButton type="submit">{isSubmitting ? <Loader /> : 'Add'}</PrimaryButton>
    </RemoveTweetContainer>
  );
};
