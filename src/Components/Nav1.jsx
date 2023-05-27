import React from 'react';
import  {Link}  from "react-router-dom";
import styles from './nav1.module.css';

const Nav1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav1;
