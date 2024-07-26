import { FC, memo } from 'react';

import LikeFill from '@assets/icons/like-fill-icon.svg';
import LikeOutline from '@assets/icons/like-outline-icon.svg';
import { LikeCount, LikesContainer } from '@components/TweetItem/components/Likes/styled';
import { LikesPropsType } from '@components/TweetItem/components/Likes/types';
import { Icon } from '@styled/components/image/styled';

export const Likes: FC<LikesPropsType> = memo(({ isLiked, likeCount, handleLike }) => {
  const likeIcon = isLiked ? LikeFill : LikeOutline;

  return (
    <LikesContainer onClick={handleLike}>
      <Icon src={likeIcon} alt="heart" />
      {likeCount > 0 && <LikeCount isLiked={isLiked}>{likeCount}</LikeCount>}
    </LikesContainer>
  );
});
