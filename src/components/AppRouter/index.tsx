import { FC } from 'react';
import { BrowserRouter, Routes as BrowserRoutes, Route, Navigate } from 'react-router-dom';

import { Paths } from '@constants/paths';
import { Login } from '@pages/Login';
import { Welcome } from '@pages/Welcome';

export const Routes: FC = () => (
  <BrowserRouter>
    <BrowserRoutes>
      <Route path={Paths.WELCOME} element={<Welcome />} />
      <Route path={Paths.SIGNIN} element={<Login />} />

      <Route path="*" element={<Navigate to={Paths.WELCOME} />} />
    </BrowserRoutes>
  </BrowserRouter>
);
