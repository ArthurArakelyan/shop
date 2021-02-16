import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Back.module.scss';

const Back = ({to, top}) => {
  return (
    <Link className={styles.button} to={to} style={{top: top}}>
      <i className="fas fa-long-arrow-alt-left" />
    </Link>
  );
}

export default Back;
