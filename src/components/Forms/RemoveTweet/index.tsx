import { memo, MouseEventHandler } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { deleteTweetById } from '@api/tweets/deleteTweetById';
import { RemoveTweetContainer } from '@components/Forms/RemoveTweet/styled';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useModal } from '@hooks/useModal';
import { OutlineButton, PrimaryButton } from '@styled/components/button/styled';
import { Loader } from '@styled/components/loader/styled';
import { Text } from '@styled/components/typography/styled';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

export const RemoveTweet = memo(({ tweetId }: { tweetId: string }) => {
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onBlur',
  });
  const dispatch = useAppDispatch();
  const { closeModal } = useModal();

  const onSubmit: SubmitHandler<object> = async () => {
    await handleAsyncFunc(
      async () => {
        await deleteTweetById(tweetId);
        closeModal();
      },
      dispatch,
      () => reset(),
    );
  };

  const handleCloseModal: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <RemoveTweetContainer onSubmit={handleSubmit(onSubmit)}>
      <Text fontSize="m" mediumSize="m" smallSize="s">
        Are you sure you want to delete the selected tweet?
      </Text>
      <PrimaryButton type="submit">{isSubmitting ? <Loader /> : 'Remove'}</PrimaryButton>
      <OutlineButton onClick={handleCloseModal}>Discard</OutlineButton>
    </RemoveTweetContainer>
  );
});
