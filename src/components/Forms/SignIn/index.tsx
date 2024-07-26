import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { loginUserWithEmail, signInWithGoogle } from '@api/auth/sign-in';
import GoogleLogoPath from '@assets/icons/google-icon.svg';
import TwitterIcon from '@assets/icons/twitter-logo-icon.svg';
import { Divider, LoginForm } from '@components/Forms/SignIn/styled';
import { SignInFormType } from '@components/Forms/SignIn/types';
import { Paths } from '@constants/paths';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { authorizeAndAddUserData } from '@redux/slices/userSlice/thunk';
import { OutlineButton, PrimaryButton } from '@styled/components/button/styled';
import { Input } from '@styled/components/input/styled';
import { Link } from '@styled/components/link/styled';
import { Loader } from '@styled/components/loader/styled';
import { GoogleLogo, TwitterLogo } from '@styled/components/logo/styled';
import { Text } from '@styled/components/typography/styled';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormType>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<SignInFormType> = async ({ phoneOrEmail, password }) => {
    await handleAsyncFunc(
      async () => {
        const userData = await loginUserWithEmail(phoneOrEmail, password);
        if (userData) {
          dispatch(
            authorizeAndAddUserData({
              ...userData,
              birthDate: userData?.birthDate?.toLocaleString() || null,
            }),
          );
          navigate(Paths.FEED);
        }
      },
      dispatch,
      () => reset(),
    );
  };

  const onGoogleClick = async () => {
    await handleAsyncFunc(async () => {
      const userData = await signInWithGoogle();
      if (userData) {
        dispatch(
          authorizeAndAddUserData({
            ...userData,
            birthDate: userData?.birthDate?.toLocaleString() || null,
          }),
        );
      }
      navigate(Paths.FEED);
    }, dispatch);
  };

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <TwitterLogo src={TwitterIcon} alt="blue bird" margin="11px" />
      <Text fontWeight={900} fontSize="xl">
        Log in to Twitter
      </Text>
      <OutlineButton type="button" fontWeight={500} fontSize="xs" onClick={onGoogleClick}>
        <GoogleLogo src={GoogleLogoPath} alt="google" />
        Sign in with Google
      </OutlineButton>
      <Divider>or</Divider>
      <Input
        {...register('phoneOrEmail', { required: true })}
        placeholder="Phone number, email address"
        isError={!!errors.phoneOrEmail}
      />
      <Input
        {...register('password', { required: true })}
        placeholder="Password"
        type="password"
        isError={!!errors.password}
      />
      <PrimaryButton type="submit" fontWeight={700} height="60px">
        {isSubmitting ? <Loader /> : 'Log in'}
      </PrimaryButton>
      <Link to={Paths.SIGNUP} align="end" fontSize="m" color={800}>
        Sign up to Twitter
      </Link>
    </LoginForm>
  );
};
