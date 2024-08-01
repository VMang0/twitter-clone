import UploadIcon from '@assets/icons/upload-icon.svg?react';
import { FC } from 'react';

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
import { ACCEPTED_FILES } from '@constants/image';
import { Modal } from '@constants/modal';
import { useCreateTweetForm } from '@hooks/useCreateTweetForm';
import { PrimaryButton } from '@styled/components/button/styled';
import { ProfileImage } from '@styled/components/image/styled';
import { Loader } from '@styled/components/loader/styled';
import { ErrorText } from '@styled/components/typography/styled';

export const CreateTweet: FC<{ formId: Modal }> = ({ formId }) => {
  const { register, handleSubmit, errors, isSubmitting, tweetImage, isSubmitDisabled, resetSelectedFile, image } =
    useCreateTweetForm();

  return (
    <CreateTweetContainer onSubmit={handleSubmit}>
      <ProfileImage profileUrl={image || NoImage} width="w60" height="w60" />
      <CreateTweetContent>
        <TweetTextArea {...register('tweetText')} placeholder="What's happening..." maxLength={272} />
        {tweetImage && tweetImage.length !== 0 && (
          <UploadedImage resetSelectedFile={resetSelectedFile} tweetImage={tweetImage[0]} />
        )}
        {errors.tweetImage && <ErrorText>{errors.tweetImage.message}</ErrorText>}
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
