import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ContentContainer, MainContent } from '@components/Content/styled';
import { Header } from '@components/Header';
import { RightSidebar } from '@components/RightSidebar';
import { Sidebar } from '@components/Sidebar';
import { Loader } from '@styled/components/loader/styled';

export const Content = () => (
  <ContentContainer>
    <Sidebar />
    <Suspense fallback={<Loader />}>
      <MainContent>
        <Header />
        <Outlet />
      </MainContent>
    </Suspense>
    <RightSidebar />
  </ContentContainer>
);
