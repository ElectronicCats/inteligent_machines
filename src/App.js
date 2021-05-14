import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { routes } from './pages/routes';

export const App = (props) => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
};
