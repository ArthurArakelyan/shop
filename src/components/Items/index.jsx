import React from "react";

import Item from "../Item";

import items from "../../constants/items";

import styles from './Items.module.scss';

const Items = ({filter}) => {
  return (
    <div className={styles.items}>
      <div className='wrapper'>
        <div className={styles.items__content}>
          {items.map(item => {
            if(filter) {
              return item.type === filter && <Item key={item.id} item={item} />;
            } else {
              return <Item key={item.id} item={item} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Items;
