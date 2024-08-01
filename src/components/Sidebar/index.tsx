import { useState } from 'react';

import { Navbar } from '@components/Sidebar/components/Navbar';
import { SidebarToggle } from '@components/Sidebar/components/SidebarToggle';
import { SidebarContainer } from '@components/Sidebar/styled';
import { useBodyOverflow } from '@hooks/useBodyOverflow';

export const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => setIsMenuOpen((prevState) => !prevState);

  useBodyOverflow(isMenuOpen);

  return (
    <SidebarContainer isMenuOpen={isMenuOpen}>
      <Navbar />
      <SidebarToggle isMenuOpen={isMenuOpen} toggleSidebar={toggleSidebar} />
    </SidebarContainer>
  );
};
