import { onSnapshot, Query } from 'firebase/firestore';

import { UserWithFollowingType } from '@type/user';

export const getSnapshotUsers = (query: Query, setRecommendationUsers: (users: UserWithFollowingType[]) => void) => {
  return onSnapshot(query, async (snapshot) => {
    const usersData = (await Promise.all(
      snapshot.docs.map(async (doc) => {
        return {
          ...doc.data(),
          isFollow: false,
        } as UserWithFollowingType;
      }),
    )) as UserWithFollowingType[];

    setRecommendationUsers(usersData);
  });
};
