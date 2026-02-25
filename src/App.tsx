import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/HomePage';

//TODO: add workspace page. Add page and logic of addition
//TODO: add logic of workspace addition
//TODO: add project page. Add page and logic of addition
//TODO: add logic of project addition
//TODO: start dashboard page

//BUGS:
//navigation button: on side between my site and others

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
