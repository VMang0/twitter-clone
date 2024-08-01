import { useNavigate } from 'react-router-dom';

import { signUpWithGoogle } from '@api/auth/sign-up';
import { Paths } from '@constants/paths';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { WelcomeContentContainer, WelcomeSighUpButton } from '@pages/Welcome/components/WelcomeContent/styled';
import { WelcomeText } from '@pages/Welcome/components/WelcomeText';
import { Link } from '@styled/components/link/styled';
import { GoogleLogo, TwitterLogo } from '@styled/components/logo/styled';
import { Text } from '@styled/components/typography/styled';
import { handleAsyncFunc } from '@utils/handleAsyncFunc';

export const WelcomeContent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onGoogleClick = async () => {
    await handleAsyncFunc(async () => {
      await signUpWithGoogle();
      navigate(Paths.SIGNIN);
    }, dispatch);
  };

  const navigateToSignUp = () => navigate(Paths.SIGNUP);

  return (
    <WelcomeContentContainer>
      <TwitterLogo />
      <Text fontWeight={900} fontSize="exl" mediumSize="xxxl" smallSize="xxl">
        Happening now
      </Text>
      <Text fontWeight={900} fontSize="xxl" mediumSize="xl" smallSize="m">
        Join Twitter today
      </Text>
      <WelcomeSighUpButton onClick={onGoogleClick}>
        <GoogleLogo />
        Sign up with Google
      </WelcomeSighUpButton>
      <WelcomeSighUpButton onClick={navigateToSignUp}>Sign up with email</WelcomeSighUpButton>
      <WelcomeText />
      <Text fontSize="xs">
        Already have an account?{' '}
        <Link to={Paths.SIGNIN} color={800} fontSize="xs">
          Log in
        </Link>
      </Text>
    </WelcomeContentContainer>
  );
};
