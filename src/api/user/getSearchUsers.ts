import { getDocs } from 'firebase/firestore';

import { getUserSearchQuery } from '@api/user/getUserSearchQuery';
import { UserType } from '@type/user';
import { handleError } from '@utils/handleError';

export const getSearchUsers = async (queryValue: string, userId: string): Promise<UserType[]> => {
  try {
    const { nameQuery, usernameQuery } = getUserSearchQuery(queryValue, userId);
    const [nameSnapshot, surnameSnapshot] = await Promise.all([getDocs(nameQuery), getDocs(usernameQuery)]);

    const nameResults = nameSnapshot.docs.map((doc) => doc.data());
    const surnameResults = surnameSnapshot.docs.map((doc) => doc.data());

    const combinedResults = [...nameResults, ...surnameResults];
    const uniqueResults = Array.from(new Set(combinedResults.map((a) => a.id)))
      .map((id) => combinedResults.find((a) => a.id === id))
      .slice(0, 10);

    return uniqueResults as UserType[];
  } catch (error: unknown) {
    throw handleError(error);
  }
};
