import { useCallback, useEffect, useState } from 'react';

import { getQueryTweets } from '@api/tweets/getQueryTweets';
import { getSnapshotTweets } from '@api/tweets/getSnapshotTweets';
import { useLoader } from '@hooks/useLoader';
import { TweetWithCreatorType } from '@type/tweet';

export const useTweetsByUser = (userId: string | null) => {
  const [tweets, setTweets] = useState<TweetWithCreatorType[]>([]);
  const { showLoader, hideLoader } = useLoader();
  const tweetsCount = tweets.length;

  const fetchTweets = useCallback(() => {
    const query = getQueryTweets(userId);
    showLoader();

    return getSnapshotTweets(query, (newTweets: TweetWithCreatorType[]) => {
      setTweets(newTweets);
      hideLoader();
    });
  }, [userId]);

  useEffect(() => {
    const fetchData = fetchTweets();
    return () => fetchData && fetchData();
  }, [fetchTweets]);

  return { tweets, tweetsCount };
};
