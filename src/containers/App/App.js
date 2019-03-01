import React, { Component } from 'react';
import { Link,withRouter} from 'react-router-dom';
import { routes } from './../../routes/global.routes';
import {connect} from 'react-redux';
import styles from './App.css';
import RoutesGenerator from '../../components/RoutesGenerator/RoutesGenerator';
import { Button } from '@rzt/eva';
import {addCounter} from '../../actions/global.actions'

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
    console.log("store received is ", localStorage.getItem('store'));
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
        <div>
          <h2>counter : {this.props.counter}</h2>
          <button onClick={()=>this.props.dispatch(addCounter())}>add</button>
        </div>
        <RoutesGenerator routes={routes} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return({
    counter:state.counter,
    name:state.name,
  })
}

export default withRouter(connect(mapStateToProps)(App));

// export default App;

App.propTypes = {};

App.defaultProps = {};