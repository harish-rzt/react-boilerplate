import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RoutesGenerator from './../../components/RoutesGenerator/RoutesGenerator';
import { routes } from './Page1.routes';

class Page1 extends React.Component {

  render() {

    return (
      <div>
        <nav>
          <Link to="/home/section1">hello-page</Link>
          <Link to="/home/section2">World-page</Link>
        </nav>
        <h1>Page 1</h1>
        <RoutesGenerator routes={routes}/>
      </div>
    );
  }
}

export default withRouter(Page1);