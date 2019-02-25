import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const RoutesGenerator = ({ routes }) => {
    return (
        <Switch>
            {routes.map(({ path, exact = false, component, type, from, to }, index) => {
                if (type === 'redirect') {
                  return  <Route exact path={path} render={()=>(
                   <Redirect to={to} />         
                  )} />
                } else {
                  return <Route exact={exact} path={path} component={component} key={index} />;
                }
            })}
        </Switch>
    );
};

export default RoutesGenerator;