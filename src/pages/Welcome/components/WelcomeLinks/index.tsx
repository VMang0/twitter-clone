import { welcomeLinks } from '@constants/welcomeLinks';
import { WelcomeLinksWrapper } from '@pages/Welcome/components/WelcomeLinks/styled';
import { Link } from '@styled/components/link/styled';

export const WelcomeLinks = () => (
  <WelcomeLinksWrapper>
    {welcomeLinks.map(({ name, link }) => (
      <Link key={name} to={link} fontSize="xxxs">
        {name}
      </Link>
    ))}
  </WelcomeLinksWrapper>
);
