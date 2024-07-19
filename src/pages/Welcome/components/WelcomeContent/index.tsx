import GoogleLogo from '@assets/icons/google-icon.svg?react';

import { Paths } from '@constants/paths';
import { WelcomeContentContainer } from '@pages/Welcome/components/WelcomeContent/styled';
import { OutlineButton } from '@styled/components/button/styled';
import { Link } from '@styled/components/link/styled';
import { TwitterLogo } from '@styled/components/logo/styled';
import { Text } from '@styled/components/typography/styled';

export const WelcomeContent = () => {
  return (
    <WelcomeContentContainer>
      <TwitterLogo />
      <Text fontWeight={900} fontSize="xxxl">
        Happening now
      </Text>
      <Text fontWeight={900} fontSize="xl">
        Join Twitter today
      </Text>
      <OutlineButton width="55%" fontWeight={500} fontSize="xs">
        <GoogleLogo />
        Sign up with Google
      </OutlineButton>
      <OutlineButton width="55%" fontWeight={500} fontSize="xs">
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
