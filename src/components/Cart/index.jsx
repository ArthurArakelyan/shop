import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {buyItemsAction} from '../../store/cart/actions';

import styles from './Cart.module.scss';

const Cart = (props) => {
  const {items} = props;
  const isCartLength = items.length;

  const onBuy = () => {
    if(isCartLength) {
      props.buyItemsAction();
      alert('Buyed');
    } else {
      alert('Your Cart Is Empty');
    }
  }

  const onClear = () => {
    props.buyItemsAction();
  }

  const content = (
    <>
      <div className={styles.cart__info}>
        <div className={styles.cart__info_buy}>
          <p>
            Cost: $<span>{items.reduce((accumlator, item) => (accumlator + item.cost * item.amount), 0)}</span>
          </p>
          <button onClick={onBuy}>
            Buy
            <i className="fas fa-cart-arrow-down" />
          </button>
          <button className={styles.cart__info_clear} onClick={onClear}>
            Clear All
          </button>
        </div>
      </div>

      <div className={styles.cart__items}>
        {items.map(item => {
          return (
            <Link key={item.id} to={`/item/${item.id}`} className={styles.cart__item}>
              <div className={styles.cart__item_image}>
                <img src={item.image} alt="Item"/>
              </div>

              <div className={styles.cart__item_info}>
                <h3 className={styles.cart__item_info_name}>{item.name}</h3>
                <p className={styles.cart__item_info_cost}>
                  Cost: $<span>{item.cost * item.amount}</span>
                </p>
                <p className={styles.cart__item_info_amount}>Amount: {item.amount}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  );

  const emptyContent = (
    <div className={styles.cart__empty}>
      <h3>Your Cart Is Empty</h3>
    </div>
  );

  return (
    <div className={styles.cart}>
      <div className="wrapper">
        <div className={styles.cart__content}>
          {isCartLength ? content : emptyContent}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyItemsAction: () => dispatch(buyItemsAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
