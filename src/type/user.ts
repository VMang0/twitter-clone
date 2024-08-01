export type UserType = {
  id: string;
  email: string;
  password?: string;
  birthDate?: Date | string | null;
  phoneNumber?: string;
  name: string;
  image?: string | null;
  username?: string;
  description?: string;
};

export type UserWithFollowingType = UserType & {
  isFollow: boolean;
};
