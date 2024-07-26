import { useLocation } from 'react-router-dom';

import { CurrentPageSection } from '@components/Header/components/CurrentPageSection';
import { ToggleTheme } from '@components/Header/components/ToggleTheme';
import { UserInfoSection } from '@components/Header/components/UserInfoSection';
import { HeaderContainer } from '@components/Header/styled';
import { Paths } from '@constants/paths';

export const Header = () => {
  const { pathname } = useLocation();

  const isProfilePage = pathname === Paths.PROFILE;

  return (
    <HeaderContainer>
      {isProfilePage && <UserInfoSection />}
      {!isProfilePage && <CurrentPageSection />}
      <ToggleTheme />
    </HeaderContainer>
  );
};
