import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const RoutesGenerator = ({ routes }) => {
  return (
    <Switch>
      {routes.map(({ path, exact = false, component, type, from, to }) => {
        if (type === 'redirect') {
          return <Route exact path={path} render={() => (<Redirect to={to} />)} />;
        } else {
          return <Route exact={exact} path={path} component={component} key={path} />;
        }
      })}
    </Switch>
  );
};

export default RoutesGenerator;