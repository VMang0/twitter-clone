import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from 'firebase/auth';

import { checkIsUserWithEmailExists, checkIsUserWithPhoneExists } from '@api/user/checkIsUserExists';
import { saveUserData } from '@api/user/saveUserData';
import { UserType } from '@type/user';
import { handleError } from '@utils/handleError';

import { auth } from '../../firebase';

export const signUpUserWithEmail = async ({ email, password, birthDate, phoneNumber, name }: Partial<UserType>) => {
  try {
    const isPhoneExists = await checkIsUserWithPhoneExists(phoneNumber as string);
    if (isPhoneExists) throw new Error('User already exists with this phone number.');

    const { user } = await createUserWithEmailAndPassword(auth, email as string, password as string);
    const { uid } = user;

    await sendEmailVerification(user);

    await saveUserData({ email, birthDate, phoneNumber, name, id: uid });

    return user;
  } catch (error: unknown) {
    throw handleError(error);
  }
};

export const signUpWithGoogle = async () => {
  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const authResult = await signInWithPopup(auth, provider);

    const { user } = authResult;
    const { email, displayName, phoneNumber, photoURL, uid } = user;

    const isUserExists = await checkIsUserWithEmailExists(user.email as string);
    if (isUserExists) throw new Error('User already exists with this email.');

    await saveUserData({
      email: email ?? '',
      phoneNumber: phoneNumber ?? '',
      name: displayName ?? '',
      id: uid,
      image: photoURL ?? null,
    });

    return user;
  } catch (error: unknown) {
    throw handleError(error);
  }
};
