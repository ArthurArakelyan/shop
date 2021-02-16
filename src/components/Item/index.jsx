import React from "react";
import {Link} from 'react-router-dom';

import styles from './Item.module.scss';

const Item = ({item}) => {
  const {id, name, image, cost} = item;

  return (
    <Link className={styles.item} to={`/item/${id}`}>
      <h3 className={styles.item__name}>{name}</h3>
      <div className={styles.item__image}>
        <img src={image} alt="Item"/>
      </div>
      <p className={styles.item__cost}>$<span>{cost}</span></p>
    </Link>
  );
}

export default Item;
