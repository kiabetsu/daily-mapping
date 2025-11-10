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
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <RouterProvider router={router} />
  );
}

export default App;
