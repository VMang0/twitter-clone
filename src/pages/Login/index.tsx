import { Paths } from '@constants/paths';
import { LoginContainer, LoginForm } from '@pages/Login/styled';
import { PrimaryButton } from '@styled/components/button/styled';
import { Input } from '@styled/components/input/styled';
import { Link } from '@styled/components/link/styled';
import { TwitterLogo } from '@styled/components/logo/styled';
import { Text } from '@styled/components/typography/styled';

export const Login = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <TwitterLogo margin="11px" />
        <Text fontWeight={900} fontSize="xl">
          Log in to Twitter
        </Text>
        <Input placeholder="Phone number, email address" />
        <Input placeholder="Password" />
        <PrimaryButton fontWeight={700} height="60px">
          Log In
        </PrimaryButton>
        <Link to={Paths.SIGNUP} align="end" fontSize="m" color={800}>
          Sign up to Twitter
        </Link>
      </LoginForm>
    </LoginContainer>
  );
};
