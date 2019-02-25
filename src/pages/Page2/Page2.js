import React from 'react';
import { routes } from './Page2.routes';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import RoutesGenerator from './../../components/RoutesGenerator/RoutesGenerator';

class Page2 extends React.Component {

  render() {

    return (
      <div>
        <nav>
          <Link to="/page2/section1">hello-page</Link>
          <Link to="/page2/section2">World-page</Link>
        </nav>
        <h1>Page 2</h1>
        <RoutesGenerator routes={routes}/>
      </div>
    );
  }
}

export default Page2;