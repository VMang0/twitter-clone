import { UserType } from '@type/user';

export type UsersListPropsType = {
  users: UserType[];
  isSubscribe: boolean;
  isNavigateToProfile: boolean;
};
