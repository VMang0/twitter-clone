import { UserType } from '@type/user';

export type ProfileSectionType = Omit<UserType, 'email'> & {
  isSubscribe?: boolean;
  isNavigateToProfile?: boolean;
};
