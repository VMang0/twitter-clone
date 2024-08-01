import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { loginUserWithEmail, signInWithGoogle } from '@api/auth/sign-in';
import { SignInFormType } from '@components/Forms/SignIn/types';
import { Paths } from '@constants/paths';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { authorizeAndAddUserData } from '@redux/slices/userSlice/thunk';
import { UserType } from '@type/user';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

export const useSignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUserData = async (getUserData: () => Promise<unknown>) => {
    await handleAsyncFunc(async () => {
      const userData = (await getUserData()) as UserType;
      if (userData) {
        dispatch(
          authorizeAndAddUserData({
            ...userData,
            birthDate: userData?.birthDate?.toLocaleString() || null,
          }),
        );
        navigate(Paths.FEED);
      }
    }, dispatch);
  };

  const onSubmit: SubmitHandler<SignInFormType> = async ({ phoneOrEmail, password }) => {
    await handleUserData(() => loginUserWithEmail(phoneOrEmail, password));
  };

  const onGoogleClick = async () => {
    await handleUserData(signInWithGoogle);
  };

  return { onSubmit, onGoogleClick };
};
