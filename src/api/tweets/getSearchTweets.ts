import { collection, endAt, limit, orderBy, query, startAt } from 'firebase/firestore';

import { getSnapshotTweets } from '@api/tweets/getSnapshotTweets';
import { TweetWithCreatorType } from '@type/tweet';
import { handleError } from '@utils/handleError';

import { db } from '../../firebase';

export const getSearchTweets = async (
  queryValue: string,
  setSearchedTweets: (searchedTweet: TweetWithCreatorType[]) => void,
): Promise<void> => {
  try {
    const textQuery = query(
      collection(db, 'tweets'),
      orderBy('tweetText'),
      startAt(queryValue),
      endAt(`${queryValue}\uf8ff`),
      limit(10),
    );

    getSnapshotTweets(textQuery, setSearchedTweets);
  } catch (error: unknown) {
    throw handleError(error);
  }
};
