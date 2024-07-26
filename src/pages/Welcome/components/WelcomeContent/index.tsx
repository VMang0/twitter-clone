import { useNavigate } from 'react-router-dom';

import { signUpWithGoogle } from '@api/auth/sign-up';
import GoogleLogoPath from '@assets/icons/google-icon.svg';
import TwitterIcon from '@assets/icons/twitter-logo-icon.svg';
import { Paths } from '@constants/paths';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { WelcomeContentContainer } from '@pages/Welcome/components/WelcomeContent/styled';
import { OutlineButton } from '@styled/components/button/styled';
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
      <TwitterLogo src={TwitterIcon} alt="blue bird" />
      <Text fontWeight={900} fontSize="xxxl">
        Happening now
      </Text>
      <Text fontWeight={900} fontSize="xl">
        Join Twitter today
      </Text>
      <OutlineButton width="55%" fontWeight={500} fontSize="xs" onClick={onGoogleClick}>
        <GoogleLogo src={GoogleLogoPath} alt="google" />
        Sign up with Google
      </OutlineButton>
      <OutlineButton width="55%" fontWeight={500} fontSize="xs" onClick={navigateToSignUp}>
        Sign up with email
      </OutlineButton>
      <Text>
        By singing up you agree to the{' '}
        <Link to="/" color={800}>
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link to="/" color={800}>
          {' '}
          Privacy Policy
        </Link>
        ,
        <br /> including{' '}
        <Link to="/" color={800}>
          Cookie Use
        </Link>{' '}
        .
      </Text>
      <Text fontSize="s">
        Already have an account?{' '}
        <Link to={Paths.SIGNIN} color={800} fontSize="s">
          Log in
        </Link>
      </Text>
    </WelcomeContentContainer>
  );
};
