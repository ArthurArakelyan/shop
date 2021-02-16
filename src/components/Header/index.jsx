import React from 'react';
import {Link} from 'react-router-dom';

import Nav from "./Nav";

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='wrapper'>
        <div className={styles.header__content}>
          <Link to='/'>
            <h1 className={styles.header__logo}>
              <i className="far fa-clock" />
              <span>Watch Shop</span>
            </h1>
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
