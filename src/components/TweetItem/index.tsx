import { Timestamp } from 'firebase/firestore';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getImageURL } from '@api/tweets/getImageURL';
import NoImage from '@assets/images/no-image.png';
import { Likes } from '@components/TweetItem/components/Likes';
import { CreatorInfo, TweetContent, TweetImage, TweetItemContainer } from '@components/TweetItem/styled';
import { useTweetLikes } from '@hooks/useTweetLikes';
import { userDataSelector } from '@redux/slices/userSlice/selectors';
import { ProfileImage } from '@styled/components/image/styled';
import { Text } from '@styled/components/typography/styled';
import { TweetWithCreatorType } from '@type/tweet';
import { UserType } from '@type/user';
import { checkIsArrayIncludeValue } from '@utils/checkIsArrayIncludeValue';
import { formateTimestampToDate } from '@utils/formateTimestampToDate';

export const TweetItem: FC<{ tweet: TweetWithCreatorType }> = ({ tweet }) => {
  const { creatorUsername, creatorName, creatorImage, createdAt, tweetImage, tweetText, liked, id } =
    tweet as TweetWithCreatorType;
  const userData = useSelector(userDataSelector);
  const { id: userId } = userData as UserType;
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { handleLike } = useTweetLikes({ likedArray: liked as string[], tweetId: id });

  const isLiked = checkIsArrayIncludeValue(liked as string[], userId);
  const date = formateTimestampToDate(createdAt as Timestamp);

  const getImage = async () => {
    await getImageURL(tweetImage, setImageUrl);
  };

  useEffect(() => {
    if (tweetImage) {
      getImage();
    }
  }, [tweetImage]);

  return (
    <TweetItemContainer>
      <ProfileImage src={creatorImage || NoImage} alt={`face ${creatorName}`} />
      <TweetContent>
        <CreatorInfo>
          <Text fontFamily="secondary" fontSize="m" fontWeight={700}>
            {creatorName}
          </Text>
          <Text fontSize="s">@{creatorUsername || 'unknown'}</Text>
          <Text fontSize="s">{date}</Text>
        </CreatorInfo>
        <Text>{tweetText}</Text>
        {imageUrl && <TweetImage src={imageUrl} alt={tweetText} loading="lazy" />}
        <Likes isLiked={isLiked} likeCount={liked?.length as number} handleLike={handleLike} />
      </TweetContent>
    </TweetItemContainer>
  );
};
