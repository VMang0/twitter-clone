import { doc, setDoc } from 'firebase/firestore';

import { UserType } from '@type/user';

import { db } from '../../firebase';

export const saveUserData = async ({
  email,
  birthDate = null,
  phoneNumber,
  name = '',
  id,
  image = null,
}: Partial<UserType>) => {
  if (!id) throw new Error('User id is required');

  await setDoc(doc(db, 'users', id), {
    id,
    name,
    email,
    phoneNumber,
    birthDate,
    image,
    username: null,
    description: null,
  });
};
