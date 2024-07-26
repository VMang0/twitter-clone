import { FC, memo } from 'react';

import { TweetItem } from '@components/TweetItem';
import { TweetsListContainer } from '@components/TweetsList/styled';
import { TweetWithCreatorType } from '@type/tweet';

export const TweetsList: FC<{ tweets: TweetWithCreatorType[] }> = memo(({ tweets }) => (
  <TweetsListContainer>
    {tweets.map((item) => (
      <TweetItem key={item.id} tweet={item} />
    ))}
  </TweetsListContainer>
));
