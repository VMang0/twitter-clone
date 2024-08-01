import { Link } from '@styled/components/link/styled';
import { Text } from '@styled/components/typography/styled';

export const WelcomeText = () => (
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
);
