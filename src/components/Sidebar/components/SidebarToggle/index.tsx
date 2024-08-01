import { FC } from 'react';

import { SidebarToggleButton, ToggleIcon } from '@components/Sidebar/components/SidebarToggle/styled';
import { SidebarTogglePropsType } from '@components/Sidebar/components/SidebarToggle/types';

export const SidebarToggle: FC<SidebarTogglePropsType> = ({ isMenuOpen, toggleSidebar }) => (
  <SidebarToggleButton onClick={toggleSidebar}>
    <ToggleIcon isMenuOpen={isMenuOpen} />
  </SidebarToggleButton>
);
