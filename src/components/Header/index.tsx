import { CurrentPageSection } from '@components/Header/components/CurrentPageSection';
import { ToggleTheme } from '@components/Header/components/ToggleTheme';
import { UserInfoSection } from '@components/Header/components/UserInfoSection';
import { HeaderContainer } from '@components/Header/styled';
import { useAuthState } from '@hooks/useAuthState';

export const Header = () => {
  const { isAuthorizedUser } = useAuthState();

  return (
    <HeaderContainer>
      {isAuthorizedUser && <UserInfoSection />}
      {!isAuthorizedUser && <CurrentPageSection />}
      <ToggleTheme />
    </HeaderContainer>
  );
};
