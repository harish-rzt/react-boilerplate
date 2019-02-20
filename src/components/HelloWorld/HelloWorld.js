import React from 'react';
import RoutesGenerator from '../../RoutesGenerator/RoutesGenerator';
import {Link} from 'react-router-dom';
import styles from './HelloWorld.css';

const section1=()=><div><h2>section1</h2></div>

const section2=()=><div><h2>section2</h2></div>

const route=[
  {path:"/world/section1", comp:section1, exactPath:false},
  {path:"/world/section2", comp:section2, exactPath:false}
]

const HelloWorld = () => {
  return (
    <div>
      <h1>World...</h1>
      <div className={styles.links}>
      <Link className={styles.button} to='/world/section1'>section1</Link>
      <Link className={styles.button} to='/world/section2'>section2</Link>
      </div>
      <RoutesGenerator routes={route}/>
    </div>
  );
}
export default HelloWorld;