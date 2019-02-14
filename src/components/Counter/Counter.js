import React, { Component } from 'react';
import styles from './Counter.css';

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      count: 0
    }
  }

  changeCount = (type = 'increment') => {
    const { count } = this.state;
    this.setState({ count: type === 'increment' ? count + 1 : count -1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className={styles.wrapper}>
        <button
          onClick={() => this.changeCount('decrement')}
          className={styles.actionButton}>-</button>
        <span className={styles.count}>{count}</span>
        <button
          onClick={() => this.changeCount('increment')}
          className={styles.actionButton}>+</button>
      </div>
    )
  }
}