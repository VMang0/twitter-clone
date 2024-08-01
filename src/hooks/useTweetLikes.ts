import { MouseEventHandler } from 'react';

import { updateTweetLikes } from '@api/tweets/updateTweetLikes';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAuthState } from '@hooks/useAuthState';
import { checkIsArrayIncludeValue } from '@utils/checkIsArrayIncludeValue';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

type UseTweetLikesParamsType = {
  likedArray: string[];
  tweetId: string;
};

export const useTweetLikes = ({ likedArray, tweetId }: UseTweetLikesParamsType) => {
  const dispatch = useAppDispatch();
  const { id } = useAuthState();
  const isLiked = checkIsArrayIncludeValue(likedArray, id);

  const handleLike: MouseEventHandler<HTMLDivElement> = async (e) => {
    e.stopPropagation();
    await handleAsyncFunc(async () => {
      await updateTweetLikes(isLiked, tweetId, id);
    }, dispatch);
  };

  return { handleLike };
};
