import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
      { path: 'workspace/:workspaceId/task/:taskId', element: <div>task page</div> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
