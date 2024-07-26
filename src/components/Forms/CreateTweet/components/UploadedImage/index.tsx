import { FC } from 'react';

import CancelIcon from '@assets/icons/close-icon.svg';
import {
  CancelPictureButton,
  CancelPictureIcon,
  UploadedImageContainer,
  UploadImage,
} from '@components/Forms/CreateTweet/components/UploadedImage/styled';
import { UploadedImagePropsType } from '@components/Forms/CreateTweet/components/UploadedImage/types';

export const UploadedImage: FC<UploadedImagePropsType> = ({ tweetImage, resetSelectedFile }) => (
  <UploadedImageContainer>
    <UploadImage src={URL.createObjectURL(tweetImage)} alt="uploaded" />
    <CancelPictureButton onClick={resetSelectedFile}>
      <CancelPictureIcon src={CancelIcon} alt="remove selected image" />
    </CancelPictureButton>
  </UploadedImageContainer>
);
