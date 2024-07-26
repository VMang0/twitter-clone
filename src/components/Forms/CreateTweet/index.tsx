import { FC } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { saveNewTweet } from '@api/tweets/saveNewTweet';
import { uploadImage } from '@api/tweets/uploadImage';
import UploadIcon from '@assets/icons/upload-icon.svg';
import NoImage from '@assets/images/no-image.png';
import { UploadedImage } from '@components/Forms/CreateTweet/components/UploadedImage';
import {
  ControlPanel,
  CreateTweetContainer,
  CreateTweetContent,
  FileInput,
  Label,
  TweetTextArea,
  UploadPictureIcon,
} from '@components/Forms/CreateTweet/styled';
import { CreateTweetFormType } from '@components/Forms/CreateTweet/types';
import { Modal } from '@constants/modal';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { userDataSelector } from '@redux/slices/userSlice/selectors';
import { PrimaryButton } from '@styled/components/button/styled';
import { ProfileImage } from '@styled/components/image/styled';
import { Loader } from '@styled/components/loader/styled';
import { UserType } from '@type/user';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

const ACCEPTED_FILES = 'image/png,image/jpeg,image/svg+xml,image/webp';

export const CreateTweet: FC<{ formId: Modal }> = ({ formId }) => {
  const dispatch = useAppDispatch();
  const userData = useSelector(userDataSelector);
  const { name, image, id } = userData as UserType;
  const {
    register,
    handleSubmit,
    reset,
    control,
    resetField,
    formState: { isSubmitting },
  } = useForm<CreateTweetFormType>({
    mode: 'onBlur',
  });

  const tweetText = useWatch({ control, name: 'tweetText' });
  const tweetImage = useWatch({ control, name: 'tweetImage' }) as FileList;

  const isSubmitDisabled = !tweetText && (!tweetImage || tweetImage.length === 0);

  const onSubmit: SubmitHandler<CreateTweetFormType> = async ({ tweetImage, tweetText }) => {
    let uploadedImageName = '';

    if (tweetImage && tweetImage.length !== 0) {
      uploadedImageName = await uploadImage(tweetImage[0]);
    }

    await handleAsyncFunc(
      async () => {
        await saveNewTweet({ userId: id, tweetText, tweetImage: uploadedImageName });
      },
      dispatch,
      () => reset(),
    );
  };

  const resetSelectedFile = () => resetField('tweetImage');

  return (
    <CreateTweetContainer onSubmit={handleSubmit(onSubmit)}>
      <ProfileImage src={image || NoImage} alt={`face ${name}`} size="60px" />
      <CreateTweetContent>
        <TweetTextArea {...register('tweetText')} placeholder="What's happening..." maxLength={272} />
        {tweetImage && tweetImage.length !== 0 && (
          <UploadedImage resetSelectedFile={resetSelectedFile} tweetImage={tweetImage[0]} />
        )}
        <ControlPanel>
          <Label htmlFor={`upload-image-${formId}`}>
            <UploadPictureIcon src={UploadIcon} alt="upload" />
            <FileInput id={`upload-image-${formId}`} {...register('tweetImage')} type="file" accept={ACCEPTED_FILES} />
          </Label>
          <PrimaryButton width="116px" height="50px" type="submit" disabled={isSubmitDisabled}>
            {isSubmitting ? <Loader /> : 'Tweet'}
          </PrimaryButton>
        </ControlPanel>
      </CreateTweetContent>
    </CreateTweetContainer>
  );
};
