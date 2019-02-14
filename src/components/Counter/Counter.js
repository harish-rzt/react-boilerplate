import React, { Component } from 'react';
import {connect} from 'react-redux';
import styles from './Counter.css';
import {sagaAddCounter,sagaSubCounter} from '../../actions/global.actions';

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
        <button
          onClick={() => this.props.dispatch(sagaSubCounter())}
          className={styles.actionButton}>-</button>
        <span className={styles.count}>{this.props.counter}</span>
        <button
          onClick={() => this.props.dispatch(sagaAddCounter())}
          className={styles.actionButton}>+</button>
      </div>
    )
  }
}

function mapStateToProps(state,ownProps){
  return({
      counter:state.counter,
  })
}

export default connect (mapStateToProps)(Counter)