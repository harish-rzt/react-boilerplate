import React from 'react';
import { Switch, Route } from 'react-router-dom';


const RoutesGenerator = (props) => {
    return (
        <Switch>
            {props.routes.map((item, index) => {
                return <Route exact={item.exactPath} path={item.path} component={item.comp} key={index} />
            })}
        </Switch>
    );
}

export default RoutesGenerator;