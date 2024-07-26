import { useSelector } from 'react-redux';

import { updateTweetLikes } from '@api/tweets/updateTweetLikes';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { userDataSelector } from '@redux/slices/userSlice/selectors';
import { UserType } from '@type/user';
import { checkIsArrayIncludeValue } from '@utils/checkIsArrayIncludeValue';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

type UseTweetLikesParamsType = {
  likedArray: string[];
  tweetId: string;
};

export const useTweetLikes = ({ likedArray, tweetId }: UseTweetLikesParamsType) => {
  const dispatch = useAppDispatch();
  const userData = useSelector(userDataSelector);
  const { id } = userData as UserType;
  const isLiked = checkIsArrayIncludeValue(likedArray, id);

  const handleLike = async () => {
    await handleAsyncFunc(async () => {
      await updateTweetLikes(isLiked, tweetId, id);
    }, dispatch);
  };

  return { handleLike };
};
