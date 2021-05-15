import React from 'react';

import { routes } from '../../pages/routes';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      {routes
        .filter((route) => route.path !== '*')
        .map((route) => (
          <Link key={route.path} to={route.path}>
            {route.name}
          </Link>
        ))}
    </nav>
  );
};
