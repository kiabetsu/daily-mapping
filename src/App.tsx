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
    children: [{ path: 'index', element: <div>first index page</div> }],
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
