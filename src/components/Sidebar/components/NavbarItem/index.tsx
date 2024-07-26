import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { NavbarIcon, NavbarItemContainer, NavbarItemLink } from '@components/Sidebar/components/NavbarItem/styled';
import { NavBarItemType } from '@constants/navbar';
import { Text } from '@styled/components/typography/styled';

export const NavbarItem: FC<{ item: NavBarItemType }> = ({ item }) => {
  const { pathname } = useLocation();

  const isActivateLink = pathname === item.link;

  return (
    <NavbarItemContainer>
      <NavbarItemLink to={item.link} isActivateLink={isActivateLink}>
        <NavbarIcon src={item.icon} alt={item.label} />
        <Text fontWeight={600} fontSize="m">
          {item.label}
        </Text>
      </NavbarItemLink>
    </NavbarItemContainer>
  );
};
