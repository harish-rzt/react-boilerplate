import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hello from '../components/SayHello/SayHello';
import Counter from '../components/Counter/Counter';

const GlobalRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Hello} />
            <Route path="/counter" component={Counter} />
        </Switch>
    );
}

export default GlobalRouter;