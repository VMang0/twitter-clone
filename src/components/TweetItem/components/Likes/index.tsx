import { FC, memo } from 'react';

import {
  LikeCount,
  LikeFillButton,
  LikeOutlineButton,
  LikesContainer,
} from '@components/TweetItem/components/Likes/styled';
import { LikesPropsType } from '@components/TweetItem/components/Likes/types';

export const Likes: FC<LikesPropsType> = memo(({ isLiked, likeCount, handleLike }) => {
  const LikeButton = !isLiked ? LikeOutlineButton : LikeFillButton;

  return (
    <LikesContainer onClick={handleLike}>
      <LikeButton isLiked={isLiked} />
      {likeCount > 0 && <LikeCount isLiked={isLiked}>{likeCount}</LikeCount>}
    </LikesContainer>
  );
});
