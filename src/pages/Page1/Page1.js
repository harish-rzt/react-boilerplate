import React from 'react';
import { Link } from 'react-router-dom';
import RoutesGenerator from './../../components/RoutesGenerator/RoutesGenerator';
import { routes } from './Page1.routes';

export default class Page1 extends React.Component {

  render() {

    return (
      <div>
        <nav>
          <Link to='/page1/section1'>hello-page</Link>
          <Link to='/page1/section2'>World-page</Link>
        </nav>
        <h1>Page 1</h1>
        <RoutesGenerator routes={routes}/>
      </div>
    );
  }
}