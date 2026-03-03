import React from 'react';

import { Outlet } from 'react-router-dom';
import { Layout } from '../layouts/Layout';

export const HomePage = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
