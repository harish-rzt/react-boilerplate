import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { routes } from './../../routes/global.routes';
import styles from './App.css';
import RoutesGenerator from '../../components/RoutesGenerator/RoutesGenerator';
//import SayHello from './../../components/SayHello/SayHello';
import Counter from './../../components/Counter/Counter';
import { Button } from '@rzt/eva';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      themeName: 'dark',
    };
  }

  setTheme = (themeName, noTransition = false) => {
    if (!themeName) return;
    document.documentElement.setAttribute('data-theme', themeName);
    this.setState({ themeName });
    if (!noTransition) {
      document.documentElement.classList.add('color-theme-in-transition');
      window.setTimeout(() => {
        document.documentElement.classList.remove('color-theme-in-transition');
      }, 500);
    }
  };

  render() {
    const { themeName } = this.state;
    return (
      <div>
        <header>
          <Button onClick={() => this.setTheme(themeName === 'dark' ? 'light' : 'dark')}>Switch Theme</Button>
        </header>
        <nav className={styles.links}>
          <Link className={styles.button} to="/">hello-page</Link>
          <Link className={styles.button} to="/page2">World-page</Link>
        </nav>
        <RoutesGenerator routes={routes} />
      </div>
    )
  }
}

export default App;

App.propTypes = {};

App.defaultProps = {};