import {ADD_TO_CART, REMOVE_FROM_CART, BUY_ITEMS, CLEAR_ITEMS} from "./actionTypes";

export function itemAddToCartAction(item) {
  return {
    type: ADD_TO_CART,
    payload: {
      item
    }
  }
}

export function removeFromCartAction(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id
    }
  }
}

export function buyItemsAction() {
  return {
    type: BUY_ITEMS
  }
}

export function clearItemsAction() {
  return {
    type: CLEAR_ITEMS
  }
}
