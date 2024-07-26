import { useCallback, useEffect, useState } from 'react';

import { getQueryTweets } from '@api/tweets/getQueryTweets';
import { getSnapshotTweets } from '@api/tweets/getSnapshotTweets';
import { TweetWithCreatorType } from '@type/tweet';

export const useTweetsByUser = (userId: string | null) => {
  const [tweets, setTweets] = useState<TweetWithCreatorType[]>([]);

  const tweetsCount = tweets.length;

  const fetchTweets = useCallback(() => {
    const query = getQueryTweets(userId);

    return getSnapshotTweets(query, setTweets);
  }, [userId]);

  useEffect(() => {
    const fetchData = fetchTweets();
    return () => fetchData();
  }, [fetchTweets]);

  return { tweets, tweetsCount };
};
