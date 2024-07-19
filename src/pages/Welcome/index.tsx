import WelcomeTwitter from '@assets/images/welcome-image.jpg';
import { WelcomeContent } from '@pages/Welcome/components/WelcomeContent';
import { WelcomeLinks } from '@pages/Welcome/components/WelcomeLinks';
import { WelcomeContainer, WelcomeContentContainer, WelcomeImage } from '@pages/Welcome/styled';

export const Welcome = () => {
  return (
    <WelcomeContainer>
      <WelcomeContentContainer>
        <WelcomeImage alt="twitter logo with blue background" src={WelcomeTwitter} />
        <WelcomeContent />
      </WelcomeContentContainer>
      <WelcomeLinks />
    </WelcomeContainer>
  );
};
