import UploadIcon from '@assets/icons/upload-icon.svg?react';
import { FC, useCallback } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';

import { saveNewTweet } from '@api/tweets/saveNewTweet';
import { uploadImage } from '@api/tweets/uploadImage';
import NoImage from '@assets/images/no-image.png';
import { UploadedImage } from '@components/Forms/CreateTweet/components/UploadedImage';
import {
  ControlPanel,
  CreateTweetContainer,
  CreateTweetContent,
  FileInput,
  Label,
  TweetTextArea,
} from '@components/Forms/CreateTweet/styled';
import { CreateTweetFormType } from '@components/Forms/CreateTweet/types';
import { ACCEPTED_FILES, MAX_FILE_SIZE } from '@constants/image';
import { Modal } from '@constants/modal';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAuthState } from '@hooks/useAuthState';
import { useModal } from '@hooks/useModal';
import { PrimaryButton } from '@styled/components/button/styled';
import { ProfileImage } from '@styled/components/image/styled';
import { Loader } from '@styled/components/loader/styled';
import { UserType } from '@type/user';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

export const CreateTweet: FC<{ formId: Modal }> = ({ formId }) => {
  const dispatch = useAppDispatch();
  const { userData, id } = useAuthState();
  const { closeModal } = useModal();
  const { image } = userData as UserType;
  const {
    register,
    handleSubmit,
    reset,
    control,
    resetField,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<CreateTweetFormType>({
    mode: 'onBlur',
  });

  const tweetText = useWatch({ control, name: 'tweetText' });
  const tweetImage = useWatch({ control, name: 'tweetImage' }) as FileList;

  const isSubmitDisabled = !tweetText && (!tweetImage || tweetImage.length === 0);

  const onSubmit: SubmitHandler<CreateTweetFormType> = async ({ tweetImage, tweetText }) => {
    let uploadedImageName = '';

    if (tweetImage && tweetImage[0]?.size > MAX_FILE_SIZE) {
      setError('tweetImage', { type: 'manual', message: 'File size should not exceed 5MB' });
      return;
    }

    if (tweetImage && tweetImage.length !== 0) {
      uploadedImageName = await uploadImage(tweetImage[0]);
    }

    await handleAsyncFunc(
      async () => {
        await saveNewTweet({ userId: id!, tweetText, tweetImage: uploadedImageName });
        closeModal();
      },
      dispatch,
      () => reset(),
    );
  };

  const resetSelectedFile = useCallback(() => resetField('tweetImage'), []);

  return (
    <CreateTweetContainer onSubmit={handleSubmit(onSubmit)}>
      <ProfileImage profileUrl={image || NoImage} width="w60" height="w60" />
      <CreateTweetContent>
        <TweetTextArea {...register('tweetText')} placeholder="What's happening..." maxLength={272} />
        {tweetImage && tweetImage.length !== 0 && (
          <UploadedImage resetSelectedFile={resetSelectedFile} tweetImage={tweetImage[0]} />
        )}
        {errors.tweetImage && <span>{errors.tweetImage.message}</span>}
        <ControlPanel>
          <Label htmlFor={`upload-image-${formId}`}>
            <UploadIcon />
            <FileInput id={`upload-image-${formId}`} {...register('tweetImage')} type="file" accept={ACCEPTED_FILES} />
          </Label>
          <PrimaryButton width="w116" height="w50" type="submit" disabled={isSubmitDisabled}>
            {isSubmitting ? <Loader /> : 'Tweet'}
          </PrimaryButton>
        </ControlPanel>
      </CreateTweetContent>
    </CreateTweetContainer>
  );
};
