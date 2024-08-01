import { FC } from 'react';

import { CancelPictureButton } from '@components/Forms/CreateTweet/components/UploadedImage/styled';
import { FileInput, Label } from '@components/Forms/CreateTweet/styled';
import { EditProfileInfoForm, ImageContainer, ProfileEditAvatar } from '@components/Forms/EditProfileInfo/styled';
import { ACCEPTED_FILES } from '@constants/image';
import { useEditProfileInfo } from '@hooks/useEditProfileInfo';
import { PrimaryButton } from '@styled/components/button/styled';
import { Input, TextArea } from '@styled/components/input/styled';
import { Loader } from '@styled/components/loader/styled';
import { ErrorText, Text } from '@styled/components/typography/styled';
import { UserType } from '@type/user';

import { DATA_TEST_ID } from '../../../../cypress/e2e/data';

export const EditProfileInfo: FC<{ userData: UserType }> = ({ userData }) => {
  const { register, handleSubmit, errors, isSubmitting, imageURL, handleImageChange, resetSelectedFile } =
    useEditProfileInfo(userData);

  return (
    <EditProfileInfoForm onSubmit={handleSubmit} data-test-id={DATA_TEST_ID.MODAL_UPDATE_PROFILE}>
      <Text fontWeight={700} fontSize="xl">
        Update Profile
      </Text>
      <ImageContainer>
        <Label htmlFor="upload-update-image">
          <ProfileEditAvatar profileUrl={imageURL} />
          <FileInput id="upload-update-image" type="file" accept={ACCEPTED_FILES} onChange={handleImageChange} />
        </Label>
        <CancelPictureButton onClick={resetSelectedFile} />
      </ImageContainer>
      <Input {...register('name')} placeholder="Name" isError={!!errors.name} />
      {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
      <Input {...register('username')} placeholder="Username" isError={!!errors.username} />
      {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
      <TextArea {...register('description')} placeholder="Description" />
      <Input {...register('phoneNumber')} placeholder="Phone number" isError={!!errors.phoneNumber} />
      {errors.phoneNumber && <ErrorText>{errors.phoneNumber.message}</ErrorText>}
      <PrimaryButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? <Loader /> : 'Update'}
      </PrimaryButton>
    </EditProfileInfoForm>
  );
};
