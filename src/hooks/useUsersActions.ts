import { collection, limit, query, where } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';

import { getSnapshotUsers } from '@api/user/getSnapshotUsers';
import { useLoader } from '@hooks/useLoader';
import { UserWithFollowingType } from '@type/user';

import { db } from '../firebase';

export const useUsersActions = (userId: string) => {
  const { showLoader, hideLoader } = useLoader();
  const [recommendationUsers, setRecommendationUsers] = useState<UserWithFollowingType[]>([]);

  const getRecommendationUsers = useCallback(() => {
    const userQuery = query(collection(db, 'users'), where('id', '!=', userId), limit(4));
    showLoader();

    return getSnapshotUsers(userQuery, (users: UserWithFollowingType[]) => {
      setRecommendationUsers(users);
      hideLoader();
    });
  }, []);

  useEffect(() => {
    const fetchData = getRecommendationUsers();
    return () => fetchData();
  }, []);

  return { recommendationUsers };
};
