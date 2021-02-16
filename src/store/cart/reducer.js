import {ADD_TO_CART, REMOVE_FROM_CART, BUY_ITEMS} from './actionTypes';

const initialState = [];

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD_TO_CART: {
      const exists = state.find(item => item.id === action.payload.item.id);
      if(exists) {
        return state.map(item => item.id === exists.id ? action.payload.item : item);
      }

      return [
        ...state,
        action.payload.item
      ];
    }
    case REMOVE_FROM_CART: {
      return state.filter(item => item.id !== action.payload.id);
    }
    case BUY_ITEMS: {
      return [];
    }
    default: {
      return state;
    }
  }
}

export default reducer;
