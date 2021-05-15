import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import { useTheme } from './contexts/theme-context';

import { routes } from './pages/routes';

export const App = (props) => {
  const { theme } = useTheme();
  return (
    <>
      <GlobalStyle theme={theme} />
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
    </>
  );
};
