import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {
  itemAmountIncrementAction,
  itemAmountDecrementAction,
  itemLoadAction
} from '../../store/shop/actions';

import {itemAddToCartAction, removeFromCartAction} from '../../store/cart/actions';

import styles from './ItemDetails.module.scss';
import items from "../../constants/items";

const ItemDetails = ({match: {params: {id}}}) => {
  const {shopReducer: item, cartReducer: cartItems} = useSelector(state => state);
  const dispatch = useDispatch();

  const itemLoad = useCallback(
    (item) => dispatch(itemLoadAction(item)),
    [dispatch]
  );

  const inCart = cartItems.find(i => i.id === id);

  useEffect(() => {
    if(inCart) {
      itemLoad(inCart);
    } else {
      itemLoad(items.find(item => item.id === id));
    }
  }, []);


  const onIncrement = useCallback(
    () => dispatch(itemAmountIncrementAction()),
    [dispatch]
  );

  const onDecrement = useCallback(
    () => dispatch(itemAmountDecrementAction()),
    [dispatch]
  );

  const onAddToCart = useCallback(
    (item) => dispatch(itemAddToCartAction(item)),
    [dispatch]
  );

  const onRemoveFromCart = useCallback(
    (id) => dispatch(removeFromCartAction(id)),
    [dispatch]
  );

  return (
    <div className={styles.item__details}>
      <div className="wrapper">
        <div className={styles.item__details_content}>
          <div className={styles.item__details_image}>
            <img src={item.image} alt={item.name} />
          </div>
          <div className={styles.item__details_info}>
            <h3 className={styles.item__details_info_name}>{item.name}</h3>
            <p className={styles.item__details_info_description}>{item.description}</p>
            <p className={styles.item__details_info_cost}>
              $<span>
                {item.cost && item.amount ? item.cost * item.amount : 0}
              </span>
            </p>
            <div className={styles.item__details_info_amount}>
              <button onClick={onIncrement}>
                <i className="fa fa-plus" />
              </button>

              <span>{item.amount}</span>

              <button onClick={onDecrement}>
                <i className="fa fa-minus" />
              </button>
            </div>

            {!inCart ?
              <button onClick={() => onAddToCart(item)} className={styles.item__details_info_add}>
                Add To Cart
                <i className="fas fa-cart-plus" />
              </button>
              :
              <button onClick={() => onRemoveFromCart(item.id)} className={styles.item__details_info_add}>
                Remove From Cart
                <i className="fas fa-cart-arrow-down" />
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
