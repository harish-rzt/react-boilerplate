import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hello from '../components/SayHello/SayHello';
import Counter from '../components/Counter/Counter';
import RoutesGenerator from '../RoutesGenerator/RoutesGenerator';

const route=[
    {path:"/", comp:Hello, exactPath:true},
    {path:"/counter", comp:Counter, exactPath:false}
]
const GlobalRouter = () => {
    return (
        <RoutesGenerator routes={route}/>
    );
}

export default GlobalRouter;