import { ChangeEvent, FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { uploadImage } from '@api/tweets/uploadImage';
import { updateUserInfo } from '@api/user/updateUserInfo';
import AvatarUrl from '@assets/images/no-image.png';
import { CancelPictureButton } from '@components/Forms/CreateTweet/components/UploadedImage/styled';
import { FileInput, Label } from '@components/Forms/CreateTweet/styled';
import { EditProfileInfoForm, ImageContainer, ProfileEditAvatar } from '@components/Forms/EditProfileInfo/styled';
import { EditProfileInfoFormType } from '@components/Forms/EditProfileInfo/types';
import { ACCEPTED_FILES } from '@constants/image';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useModal } from '@hooks/useModal';
import { showNotification } from '@redux/slices/modalSlice';
import { authorizeAndAddUserData } from '@redux/slices/userSlice/thunk';
import { PrimaryButton } from '@styled/components/button/styled';
import { Input, TextArea } from '@styled/components/input/styled';
import { Loader } from '@styled/components/loader/styled';
import { Text } from '@styled/components/typography/styled';
import { UserType } from '@type/user';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

export const EditProfileInfo: FC<{ userData: UserType }> = ({ userData }) => {
  const dispatch = useAppDispatch();
  const { closeModal } = useModal();
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<EditProfileInfoFormType>({
    mode: 'onBlur',
    defaultValues: {
      image: userData.image || AvatarUrl,
      phoneNumber: userData.phoneNumber || '',
      name: userData.name || '',
      description: userData.description || '',
      username: userData.username || '',
    },
  });

  const [image, setImage] = useState<string>(userData.image || AvatarUrl);

  const onSubmit: SubmitHandler<EditProfileInfoFormType> = async ({
    phoneNumber,
    name,
    description,
    username,
    image,
  }) => {
    await handleAsyncFunc(
      async () => {
        let uploadedImageName = '';

        if (image && image.length !== 0) {
          uploadedImageName = await uploadImage(image[0] as File);
        }

        await updateUserInfo(userData.id, { username, description, phoneNumber, name, image: uploadedImageName });
        dispatch(
          authorizeAndAddUserData({
            ...userData,
            username,
            description,
            phoneNumber,
            name,
            image: uploadedImageName,
          }),
        );
        dispatch(showNotification('Profile info was updated!'));
        closeModal();
      },
      dispatch,
      () => reset(),
    );
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetSelectedFile = () => {
    resetField('image');
    setImage('');
  };

  return (
    <EditProfileInfoForm onSubmit={handleSubmit(onSubmit)}>
      <Text fontWeight={700} fontSize="xl">
        Update Profile
      </Text>
      <ImageContainer>
        <Label htmlFor="upload-update-image">
          <ProfileEditAvatar profileUrl={image || AvatarUrl} />
          <FileInput
            id="upload-update-image"
            {...register('image')}
            type="file"
            accept={ACCEPTED_FILES}
            onChange={handleImageChange}
          />
        </Label>
        <CancelPictureButton onClick={resetSelectedFile} />
      </ImageContainer>
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
