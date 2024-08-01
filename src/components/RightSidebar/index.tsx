import { Recommendations } from '@components/RightSidebar/components/Recommendations';
import { Searchbar } from '@components/RightSidebar/components/Searchbar';
import { RightSidebarContainer } from '@components/RightSidebar/styled';

export const RightSidebar = () => (
  <RightSidebarContainer>
    <Searchbar />
    <Recommendations />
  </RightSidebarContainer>
);
