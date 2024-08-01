import { FC, memo, useState } from 'react';

import { RemoveTweet } from '@components/Forms/RemoveTweet';
import { Loader } from '@components/Loader';
import { Modal } from '@components/Modal';
import { TweetItem } from '@components/TweetItem';
import { TweetsListContainer } from '@components/TweetsList/styled';
import { TweetListPropsType } from '@components/TweetsList/types';
import { Modal as ModalConst } from '@constants/modal';
import { useLoader } from '@hooks/useLoader';
import { useModal } from '@hooks/useModal';
import { EmptyListIcon } from '@styled/components/image/styled';

export const TweetsList: FC<TweetListPropsType> = memo(({ tweets, showImage = true, isSearchTweet = false }) => {
  const [selectedTweetId, setSelectedTweetId] = useState('');
  const { openModal, isModalOpen } = useModal(ModalConst.REMOVE_TWEET);
  const { isLoading } = useLoader();
  const isTweetsListEmpty = tweets.length === 0;

  const handleOpenRemoveModal = (id: string) => {
    setSelectedTweetId(id);
    openModal(ModalConst.REMOVE_TWEET);
  };

  return (
    <TweetsListContainer>
      {!isTweetsListEmpty &&
        tweets.map((item) => (
          <TweetItem
            key={item.id}
            tweet={item}
            showImage={showImage}
            isSearchTweet={isSearchTweet}
            onOpenRemoveModal={handleOpenRemoveModal}
          />
        ))}
      {isTweetsListEmpty && !isLoading && <EmptyListIcon />}
      {isLoading && <Loader />}

      {isModalOpen && (
        <Modal>
          <RemoveTweet tweetId={selectedTweetId} />
        </Modal>
      )}
    </TweetsListContainer>
  );
});
