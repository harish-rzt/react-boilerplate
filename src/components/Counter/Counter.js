import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoutesGenerator from '../RoutesGenerator/RoutesGenerator';
import styles from './Counter.css';
import { sagaAddCounter, sagaSubCounter } from '../../actions/global.actions';
import HelloWorld from '../HelloWorld/HelloWorld';
import {Link} from 'react-router-dom';

const routes = [ {path:"/counter/helloworld", comp:HelloWorld, exactPath:false},]
class Counter extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      count: 0
    }
  }

  changeCount = (type = 'increment') => {
    // const { count } = this.state;
    // this.setState({ count: type === 'increment' ? count + 1 : count -1 });
    this.props.dispatch(sagaAddCounter());
  };

  render() {
    const { count } = this.state;
    return (
      <div className={styles.wrapper}>
        <RoutesGenerator routes={routes}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return ({
    counter: state.counter,
  })
}

export default connect(mapStateToProps)(Counter)