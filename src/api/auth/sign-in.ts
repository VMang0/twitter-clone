import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

import { checkIsUserWithEmailExists } from '@api/user/checkIsUserExists';
import { getUserEmailByPhone } from '@api/user/getUserByPhone';
import { getUserDataByEmail } from '@api/user/getUserDataByEmail';
import { checkIsValidEmail } from '@utils/checkIsValidEmail';
import { checkIsValidPhone } from '@utils/checkIsValidPhone';
import { handleError } from '@utils/handleError';

import { auth } from '../../firebase';

export const loginUserWithEmail = async (phoneOrEmail: string, password: string) => {
  try {
    let signInUser = null;
    if (checkIsValidEmail(phoneOrEmail)) {
      const { user } = await signInWithEmailAndPassword(auth, phoneOrEmail, password);
      signInUser = user;
    }

    if (checkIsValidPhone(phoneOrEmail)) {
      const email = await getUserEmailByPhone(phoneOrEmail);

      if (!email) throw new Error('User with current phone number was not founded');

      const { user } = await signInWithEmailAndPassword(auth, email, password);
      signInUser = user;
    }

    if (signInUser && signInUser.emailVerified) {
      const userData = await getUserDataByEmail(signInUser.email as string);
      return userData;
    }

    throw new Error('Check data or verify your account!');
  } catch (error) {
    throw handleError(error);
  }
};

export const signInWithGoogle = async () => {
  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const authResult = await signInWithPopup(auth, provider);
    const { user } = authResult;

    const isUserExists = await checkIsUserWithEmailExists(user.email as string);
    if (!isUserExists) throw new Error('Not found account with this email.');

    const userData = await getUserDataByEmail(user.email as string);

    return userData;
  } catch (error: unknown) {
    throw handleError(error);
  }
};
