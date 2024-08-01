import CancelIcon from '@assets/icons/close-icon.svg?react';
import { FC, memo } from 'react';

import {
  CancelPictureButton,
  UploadedImageContainer,
  UploadImage,
} from '@components/Forms/CreateTweet/components/UploadedImage/styled';
import { UploadedImagePropsType } from '@components/Forms/CreateTweet/components/UploadedImage/types';

export const UploadedImage: FC<UploadedImagePropsType> = memo(({ tweetImage, resetSelectedFile }) => (
  <UploadedImageContainer>
    <UploadImage src={URL.createObjectURL(tweetImage)} alt="uploaded" />
    <CancelPictureButton onClick={resetSelectedFile}>
      <CancelIcon />
    </CancelPictureButton>
  </UploadedImageContainer>
));
