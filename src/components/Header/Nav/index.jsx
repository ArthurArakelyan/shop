import React from "react";
import {Link} from 'react-router-dom';

import navLinks from "../../../constants/navLinks";

import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {navLinks.map(link => {
          return (
            <li key={link.id} className={styles.nav__item}>
              <Link to={link.link}>
                {link.label}
              </Link>
            </li>
          )
        })}
        <li className={styles.nav__item}>
          <Link to='/cart'>
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
