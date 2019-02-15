import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SayHello from './../../components/SayHello/SayHello';
import Counter from './../../components/Counter/Counter';
import GlobalRouter from '../../routes/global.routes';
import styles from './App.css';

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
        <span className={styles.links}>
          <button><Link to='/'>hello page</Link></button>
          <button><Link to='/counter'>Counter</Link></button>
        </span>
        <GlobalRouter/>
        {/* <SayHello />
        <Counter /> */}
      </div>
    )
  }
}

App.propTypes = {};

App.defaultProps = {};