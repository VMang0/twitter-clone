import { MouseEventHandler } from 'react';

export type LikesPropsType = {
  isLiked: boolean;
  likeCount: number;
  handleLike: MouseEventHandler<HTMLDivElement>;
};
