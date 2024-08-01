import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTweetById } from '@api/tweets/getTweetById';
import { Loader } from '@components/Loader';
import { TweetItem } from '@components/TweetItem';
import { useLoader } from '@hooks/useLoader';
import { Divider } from '@styled/components/divider/styled';
import { PageContainer } from '@styled/components/layout/styled';
import { TweetWithCreatorType } from '@type/tweet';

export const Tweet = () => {
  const { showLoader, hideLoader, isLoading } = useLoader();
  const [tweet, setTweet] = useState<TweetWithCreatorType | null>(null);
  const { id } = useParams();

  const handleGetTweet = async () => {
    showLoader();
    const tweet = await getTweetById(id as string);
    setTweet(tweet);
    hideLoader();
  };

  useEffect(() => {
    handleGetTweet();
  }, []);

  return (
    <PageContainer>
      <Divider />
      {tweet && <TweetItem tweet={tweet} showImage isSearchTweet={false} />}
      {isLoading && !tweet && <Loader />}
    </PageContainer>
  );
};
