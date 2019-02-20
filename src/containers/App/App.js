import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SayHello from './../../components/SayHello/SayHello';
import HelloWorld from '../../components/HelloWorld/HelloWorld';
import Counter from './../../components/Counter/Counter';
import GlobalRouter from '../../routes/global.routes';
import styles from './App.css';
import RoutesGenerator from '../../RoutesGenerator/RoutesGenerator';

const route = [
  { path: "/", comp: SayHello, exactPath: true },
  { path: "/world", comp: HelloWorld, exactPath: false }
]

export default class App extends Component {
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
          <button onClick={() => this.setTheme(themeName === 'dark' ? 'light' : 'dark')}>Switch Theme</button>
        </header>
        <div className={styles.links}>
          <Link className={styles.button} to='/'>hello-page</Link>
          <Link className={styles.button} to='/world'>World-page</Link>
        </div>
        <RoutesGenerator routes={route} />
      </div>
    )
  }
}

App.propTypes = {};

App.defaultProps = {};