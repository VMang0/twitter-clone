import { Timestamp } from 'firebase/firestore';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import NoImage from '@assets/images/no-image.png';
import { Likes } from '@components/TweetItem/components/Likes';
import {
  CreatorInfo,
  TrashButton,
  TweetContent,
  TweetImage,
  TweetItemContainer,
  TweetText,
} from '@components/TweetItem/styled';
import { TweetItemPropsType } from '@components/TweetItem/types';
import { Paths } from '@constants/paths';
import { useAuthState } from '@hooks/useAuthState';
import { useTweetLikes } from '@hooks/useTweetLikes';
import { ProfileImage } from '@styled/components/image/styled';
import { Text } from '@styled/components/typography/styled';
import { TweetWithCreatorType } from '@type/tweet';
import { checkIsArrayIncludeValue } from '@utils/checkIsArrayIncludeValue';
import { formateTimestampToDate } from '@utils/formateTimestampToDate';

export const TweetItem: FC<TweetItemPropsType> = memo(
  ({ tweet, showImage = true, isSearchTweet = false, onOpenRemoveModal }) => {
    const { creatorUsername, creatorName, creatorImage, createdAt, tweetImage, tweetText, liked, id } =
      tweet as TweetWithCreatorType;
    const navigate = useNavigate();
    const { id: userId, isAuthorizedUser } = useAuthState();
    const { handleLike } = useTweetLikes({ likedArray: liked as string[], tweetId: id });

    const isLiked = checkIsArrayIncludeValue(liked as string[], userId);
    const date = formateTimestampToDate(createdAt as Timestamp);

    const handleOpenRemoveTweetModal = () => {
      if (onOpenRemoveModal) onOpenRemoveModal(id);
    };

    const navigateToTweet = () => isSearchTweet && navigate(`${Paths.TWEET}/${id}`);

    return (
      <TweetItemContainer isSearchTweet={isSearchTweet} onClick={navigateToTweet}>
        <ProfileImage profileUrl={creatorImage || NoImage} />
        <TweetContent>
          <CreatorInfo>
            <Text fontFamily="secondary" fontSize="s" fontWeight={700}>
              {creatorName}
            </Text>
            <Text fontSize="xs">@{creatorUsername || 'unknown'}</Text>
            {!isSearchTweet && <Text fontSize="xs">{date}</Text>}
            {isAuthorizedUser && !isSearchTweet && <TrashButton onClick={handleOpenRemoveTweetModal} />}
          </CreatorInfo>
          <TweetText>{tweetText}</TweetText>
          {tweetImage && showImage && <TweetImage src={tweetImage} alt={tweetText} loading="lazy" />}
          <Likes isLiked={isLiked} likeCount={liked?.length as number} handleLike={handleLike} />
        </TweetContent>
      </TweetItemContainer>
    );
  },
);
