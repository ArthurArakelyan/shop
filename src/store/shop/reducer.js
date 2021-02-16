import {ITEM_LOAD, AMOUNT_INCREMENT, AMOUNT_DECREMENT} from './actionTypes';

const initialState = {};

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case ITEM_LOAD: {
      return {
        ...action.payload.item,
        amount: action.payload.item.amount ? action.payload.item.amount : 1
      }
    }
    case AMOUNT_INCREMENT: {
      return  {
        ...state,
        amount: state.amount + 1
      }
    }
    case AMOUNT_DECREMENT: {
      return  {
        ...state,
        amount: state.amount <= 1 ? 1 : state.amount - 1
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
