import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ContentContainer, MainContent } from '@components/Content/styled';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { Header } from '@components/Header';
import { RightSidebar } from '@components/RightSidebar';
import { Sidebar } from '@components/Sidebar';
import { Loader } from '@styled/components/loader/styled';

export const Content = () => (
  <ContentContainer>
    <Sidebar />
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <MainContent>
          <Header />
          <Outlet />
        </MainContent>
      </Suspense>
    </ErrorBoundary>
    <RightSidebar />
  </ContentContainer>
);
