import React from "react";
import {Link} from 'react-router-dom';

import categories from "../../constants/categories";

import styles from './Categories.module.scss';

const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className="wrapper">
        <div className={styles.categories__content}>
          <ul className={styles.categories__list}>
            {categories.map(categorie => {
              return (
                <li className={styles.categorie} key={categorie.id}>
                  <Link to={categorie.link}>
                    {categorie.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
