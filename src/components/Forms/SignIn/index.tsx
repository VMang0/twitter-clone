import { useForm } from 'react-hook-form';

import { Divider, LoginForm, LoginLogo } from '@components/Forms/SignIn/styled';
import { SignInFormType } from '@components/Forms/SignIn/types';
import { Paths } from '@constants/paths';
import { useSignIn } from '@hooks/useSignIn';
import { OutlineButton, PrimaryButton } from '@styled/components/button/styled';
import { Input } from '@styled/components/input/styled';
import { Link } from '@styled/components/link/styled';
import { Loader } from '@styled/components/loader/styled';
import { GoogleLogo, TwitterLogo } from '@styled/components/logo/styled';

export const SignIn = () => {
  const { onSubmit, onGoogleClick } = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormType>({
    mode: 'onBlur',
  });

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <TwitterLogo margin="xxxs" />
      <LoginLogo>Log in to Twitter</LoginLogo>
      <OutlineButton type="button" fontWeight={500} fontSize="m" onClick={onGoogleClick}>
        <GoogleLogo />
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
      <PrimaryButton type="submit" fontWeight={700} height="w60">
        {isSubmitting ? <Loader /> : 'Log in'}
      </PrimaryButton>
      <Link to={Paths.SIGNUP} align="end" fontSize="s" color={800}>
        Sign up to Twitter
      </Link>
    </LoginForm>
  );
};
