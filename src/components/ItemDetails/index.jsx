import React from 'react';
import {connect} from 'react-redux';

import {
  itemAmountIncrementAction,
  itemAmountDecrementAction
} from '../../store/shop/actions';

import {itemAddToCartAction, removeFromCartAction} from '../../store/cart/actions';

import styles from './ItemDetails.module.scss';
import {Link} from "react-router-dom";

const ItemDetails = (props) => {
  const {id} = props;
  const {item, cartItems} = props;

  const inCart = cartItems.find(i => i.id === id);

  const onIncrementClick = () => {
    props.itemAmountIncrementAction();
  }

  const onDecrementClick = () => {
    props.itemAmountDecrementAction();
  }

  const onAddToCartClick = () => {
    props.itemAddToCartAction(item);
  }

  const onRemoveFromCartClick = () => {
    props.removeFromCartAction(item.id);
  }

  return (
    <div className={styles.item__details}>
      <div className="wrapper">
        <div className={styles.item__details_content}>
          <Link className={styles.item__details_back} to='/'>
            <i className="fas fa-long-arrow-alt-left" />
          </Link>

          <div className={styles.item__details_image}>
            <img src={item.image} alt="Item"/>
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
              <button onClick={onIncrementClick}>
                <i className="fa fa-plus" />
              </button>

              <span>{item.amount}</span>

              <button onClick={onDecrementClick}>
                <i className="fa fa-minus" />
              </button>
            </div>

            {!inCart ?
              <button onClick={onAddToCartClick} className={styles.item__details_info_add}>
                Add To Cart
                <i className="fas fa-cart-plus" />
              </button>
              :
              <button onClick={onRemoveFromCartClick} className={styles.item__details_info_add}>
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

const mapStateToProps = (state) => {
  return {
    item: state.shopReducer,
    cartItems: state.cartReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    itemAmountIncrementAction: () => dispatch(itemAmountIncrementAction()),
    itemAmountDecrementAction: () => dispatch(itemAmountDecrementAction()),
    itemAddToCartAction: (item) => dispatch(itemAddToCartAction(item)),
    removeFromCartAction: (id) => dispatch(removeFromCartAction(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
