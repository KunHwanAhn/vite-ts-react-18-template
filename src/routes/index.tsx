import React from 'react';
import {
  Navigate,
  RouteObject,
} from 'react-router-dom';

import { ROUTE } from '@/constants/index.js';

import App from '@/App.jsx';

const routes: RouteObject[] = [
  {
    path: ROUTE.ROOT,
    element: <App />,
    children: [],
  },
  {
    path: '*',
    element: <Navigate to={ROUTE.ROOT} replace />,
  },
];

export default routes;
