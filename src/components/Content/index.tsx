import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ContentContainer, MainContent } from '@components/Content/styled';
import { Header } from '@components/Header';
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
  </ContentContainer>
);
