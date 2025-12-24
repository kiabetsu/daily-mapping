import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, Link, RouterProvider, Outlet } from 'react-router-dom';

// import logo from './logo.svg';
import styles from './App.module.scss';
import { HomePage } from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      { path: 'dashboard', element: <div>dashboard page</div> },
      { path: 'categories', element: <div>categories page</div> },
      { path: 'settings', element: <div>settings page</div> },
      { path: 'workspace/:workspaceId', element: <div>workspace</div> },
      { path: 'task/:taskId', element: <div>task page</div> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
