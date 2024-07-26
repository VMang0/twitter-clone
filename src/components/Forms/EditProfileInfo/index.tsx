import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { updateUserInfo } from '@api/user/updateUserInfo';
import { EditProfileInfoForm } from '@components/Forms/EditProfileInfo/styled';
import { EditProfileInfoFormType } from '@components/Forms/EditProfileInfo/types';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { closeModal, showNotification } from '@redux/slices/modalSlice';
import { authorizeAndAddUserData } from '@redux/slices/userSlice/thunk';
import { PrimaryButton } from '@styled/components/button/styled';
import { Input, TextArea } from '@styled/components/input/styled';
import { Loader } from '@styled/components/loader/styled';
import { Text } from '@styled/components/typography/styled';
import { UserType } from '@type/user';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

export const EditProfileInfo: FC<{ userData: UserType }> = ({ userData }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EditProfileInfoFormType>({
    mode: 'onBlur',
    defaultValues: {
      phoneNumber: userData.phoneNumber || '',
      name: userData.name || '',
      description: userData.description || '',
      username: userData.username || '',
    },
  });

  const onSubmit: SubmitHandler<EditProfileInfoFormType> = async ({ phoneNumber, name, description, username }) => {
    await handleAsyncFunc(
      async () => {
        await updateUserInfo(userData.id, { username, description, phoneNumber, name });
        dispatch(
          authorizeAndAddUserData({
            ...userData,
            username,
            description,
            phoneNumber,
            name,
          }),
        );
        dispatch(showNotification('Profile info was updated!'));
        dispatch(closeModal());
      },
      dispatch,
      () => reset(),
    );
  };

  return (
    <EditProfileInfoForm onSubmit={handleSubmit(onSubmit)}>
      <Text fontWeight={700} fontSize="l">
        Update Profile
      </Text>
      <Input
        {...register('name', {
          required: true,
          pattern: {
            value: /^[A-Za-zА-Яа-я\s]+$/,
            message: 'Name can only contain Latin and Russian letters.',
          },
        })}
        placeholder="Name"
        isError={!!errors.name}
      />
      {errors.name && errors.name.type !== 'required' && <span>{errors.name.message}</span>}
      <Input
        {...register('username', {
          pattern: {
            value: /^[A-Za-zА-Яа-я\s]+$/,
            message: 'Username can only contain Latin and Russian letters.',
          },
        })}
        placeholder="Username"
        isError={!!errors.username}
      />
      {errors.username && errors.username.type !== 'required' && <span>{errors.username.message}</span>}
      <TextArea {...register('description')} placeholder="Description" />
      <Input
        {...register('phoneNumber', {
          required: true,
          pattern: {
            value: /^\+?\d{10,15}$/,
            message: 'Invalid phone number. Example: +375447339153',
          },
        })}
        placeholder="Phone number"
        isError={!!errors.phoneNumber}
      />
      {errors.phoneNumber && errors.phoneNumber.type !== 'required' && <span>{errors.phoneNumber.message}</span>}
      <PrimaryButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? <Loader /> : 'Update'}
      </PrimaryButton>
    </EditProfileInfoForm>
  );
};
