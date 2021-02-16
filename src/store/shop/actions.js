import {ITEM_LOAD, AMOUNT_INCREMENT, AMOUNT_DECREMENT} from "./actionTypes";

export function itemLoadAction(item) {
  return {
    type: ITEM_LOAD,
    payload: {
      item
    }
  }
}

export function itemAmountIncrementAction() {
  return {
    type: AMOUNT_INCREMENT
  }
}

export function itemAmountDecrementAction() {
  return {
    type: AMOUNT_DECREMENT
  }
}
