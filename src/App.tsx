import * as React from 'react';
import { Outlet } from 'react-router-dom';

import '@/styles/index.scss';

export default function App() {
  return (
    <div>
      <h1>TODO with Vite + TypeScript + React</h1>
      <Outlet />
    </div>
  );
}
