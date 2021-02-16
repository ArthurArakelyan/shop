import React from "react";

import Item from "../Item";

import items from "../../constants/items";

import styles from './Items.module.scss';

const Items = () => {
  return (
    <div className={styles.items}>
      <div className='wrapper'>
        <div className={styles.items__content}>
          {items.map(item => {
            return (
              <Item key={item.id} item={item} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Items;
