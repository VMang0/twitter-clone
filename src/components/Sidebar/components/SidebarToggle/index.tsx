import { FC } from 'react';

import SidebarIcon from '@assets/icons/sidebar-icon.svg';
import { SidebarToggleButton, ToggleIcon } from '@components/Sidebar/components/SidebarToggle/styled';
import { SidebarTogglePropsType } from '@components/Sidebar/components/SidebarToggle/types';

export const SidebarToggle: FC<SidebarTogglePropsType> = ({ isMenuOpen, toggleSidebar }) => (
  <SidebarToggleButton onClick={toggleSidebar}>
    <ToggleIcon src={SidebarIcon} alt="sidebar" isMenuOpen={isMenuOpen} />
  </SidebarToggleButton>
);
