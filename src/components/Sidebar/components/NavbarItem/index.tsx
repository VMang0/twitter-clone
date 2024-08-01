import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { NavbarItemContainer, NavbarItemLink, NavbarItemText } from '@components/Sidebar/components/NavbarItem/styled';
import { NavBarItemType } from '@constants/navbar';
import { Paths } from '@constants/paths';
import { useAuthState } from '@hooks/useAuthState';

export const NavbarItem: FC<{ item: NavBarItemType }> = ({ item }) => {
  const { label, link, Icon } = item;
  const { pathname } = useLocation();
  const { id } = useAuthState();

  const isActivateLink = pathname.includes(link);

  const linkToPage = link.includes(Paths.PROFILE) ? `${Paths.PROFILE}/${id}` : link;

  return (
    <NavbarItemContainer>
      <NavbarItemLink to={linkToPage} isActivateLink={isActivateLink}>
        <Icon />
        <NavbarItemText>{label}</NavbarItemText>
      </NavbarItemLink>
    </NavbarItemContainer>
  );
};
