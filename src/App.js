import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import { FontStyles } from './styles/fonts/fontStyles';
import { useTheme } from './contexts/theme-context';

import { routes } from './pages/routes';

export const App = (props) => {
  const { theme } = useTheme();
  return (
    <>
      <FontStyles />
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
