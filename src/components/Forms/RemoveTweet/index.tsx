import { memo, MouseEventHandler } from 'react';

import { RemoveTweetContainer } from '@components/Forms/RemoveTweet/styled';
import { useModal } from '@hooks/useModal';
import { useRemoveTweetForm } from '@hooks/useRemoveTweetForm';
import { OutlineButton, PrimaryButton } from '@styled/components/button/styled';
import { Loader } from '@styled/components/loader/styled';
import { Text } from '@styled/components/typography/styled';

export const RemoveTweet = memo(({ tweetId }: { tweetId: string }) => {
  const { closeModal } = useModal();
  const { handleSubmit, isSubmitting } = useRemoveTweetForm(tweetId);

  const handleCloseModal: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <RemoveTweetContainer onSubmit={handleSubmit}>
      <Text fontSize="m" mediumSize="m" smallSize="s">
        Are you sure you want to delete the selected tweet?
      </Text>
      <PrimaryButton type="submit">{isSubmitting ? <Loader /> : 'Remove'}</PrimaryButton>
      <OutlineButton onClick={handleCloseModal}>Discard</OutlineButton>
    </RemoveTweetContainer>
  );
});
