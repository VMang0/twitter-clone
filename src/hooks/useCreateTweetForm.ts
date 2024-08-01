import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';

import { saveNewTweet } from '@api/tweets/saveNewTweet';
import { uploadImage } from '@api/tweets/uploadImage';
import { createTweetSchema } from '@components/Forms/CreateTweet/schema';
import { CreateTweetFormType } from '@components/Forms/CreateTweet/types';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAuthState } from '@hooks/useAuthState';
import { useModal } from '@hooks/useModal';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

export const useCreateTweetForm = () => {
  const dispatch = useAppDispatch();
  const { userData, id } = useAuthState();
  const { closeModal } = useModal();
  const { image } = userData;
  const {
    register,
    handleSubmit,
    reset,
    control,
    resetField,
    formState: { isSubmitting, errors },
  } = useForm<CreateTweetFormType>({
    resolver: yupResolver(createTweetSchema),
    mode: 'onBlur',
  });

  const tweetText = useWatch({ control, name: 'tweetText' });
  const tweetImage = useWatch({ control, name: 'tweetImage' }) as FileList | null;

  const isSubmitDisabled = !tweetText && (!tweetImage || tweetImage.length === 0);

  const onSubmit: SubmitHandler<CreateTweetFormType> = async ({ tweetImage, tweetText }) => {
    let uploadedImageName = '';

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

  const resetSelectedFile = useCallback(() => resetField('tweetImage'), [resetField]);

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    tweetText,
    tweetImage,
    isSubmitDisabled,
    resetSelectedFile,
    image,
  };
};
