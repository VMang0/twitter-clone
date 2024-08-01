import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { uploadImage } from '@api/tweets/uploadImage';
import { updateUserInfo } from '@api/user/updateUserInfo';
import AvatarUrl from '@assets/images/no-image.png';
import { editProfileInfoSchema } from '@components/Forms/EditProfileInfo/schema';
import { EditProfileInfoFormType } from '@components/Forms/EditProfileInfo/types';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useModal } from '@hooks/useModal';
import { showNotification } from '@redux/slices/modalSlice';
import { authorizeAndAddUserData } from '@redux/slices/userSlice/thunk';
import { UserType } from '@type/user';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

export const useEditProfileInfo = (userData: UserType) => {
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
    resolver: yupResolver(editProfileInfoSchema),
    defaultValues: {
      phoneNumber: userData.phoneNumber || '',
      name: userData.name || '',
      description: userData.description || '',
      username: userData.username || '',
    },
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string>(userData.image || AvatarUrl);

  const onSubmit: SubmitHandler<EditProfileInfoFormType> = async (data) => {
    await handleAsyncFunc(
      async () => {
        let uploadedImageName;

        if (selectedImage) {
          uploadedImageName = await uploadImage(selectedImage);
        } else {
          uploadedImageName = userData.image;
        }

        await updateUserInfo(userData.id, {
          ...data,
          image: uploadedImageName,
        });
        dispatch(
          authorizeAndAddUserData({
            ...userData,
            ...data,
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
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(file);
        setImageURL(URL.createObjectURL(file));
      };
      reader.readAsDataURL(file);
    }
  };

  const resetSelectedFile = () => {
    resetField('image');
    setSelectedImage(null);
    setImageURL(userData.image || AvatarUrl);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    imageURL,
    handleImageChange,
    resetSelectedFile,
  };
};
