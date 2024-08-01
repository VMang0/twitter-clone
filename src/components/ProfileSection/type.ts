import { UserType } from '@type/user';

export type ProfileSectionType = Omit<UserType, 'email'> & {
  isLogout?: boolean;
  isSubscribe?: boolean;
  isNavigateToProfile?: boolean;
};
