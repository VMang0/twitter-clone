import { FC } from 'react';
import { BrowserRouter, Routes as BrowserRoutes, Route, Navigate } from 'react-router-dom';

import { AuthRoute } from '@components/CheckRoute/AuthRoute';
import { UnAuthRoute } from '@components/CheckRoute/UnAuthRoute';
import { Content } from '@components/Content';
import { Paths } from '@constants/paths';
import { Feed } from '@pages/Feed';
import { Login } from '@pages/Login';
import { Profile } from '@pages/Profile';
import { Registration } from '@pages/Registration';
import { Welcome } from '@pages/Welcome';

export const Routes: FC = () => (
  <BrowserRouter>
    <BrowserRoutes>
      <Route element={<UnAuthRoute />}>
        <Route path={Paths.WELCOME} element={<Welcome />} />
        <Route path={Paths.SIGNIN} element={<Login />} />
        <Route path={Paths.SIGNUP} element={<Registration />} />
      </Route>

      <Route element={<AuthRoute />}>
        <Route element={<Content />}>
          <Route path={Paths.FEED} element={<Feed />} />
          <Route path={Paths.PROFILE} element={<Profile />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to={Paths.WELCOME} />} />
    </BrowserRoutes>
  </BrowserRouter>
);
