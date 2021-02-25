import React, {useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Switch, Route} from "react-router-dom";

import {itemLoadAction} from './store/shop/actions';

import items from "./constants/items";
import categories from "./constants/categories";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Items from "./components/Items";
import ItemDetails from "./components/ItemDetails";
import Cart from "./components/Cart";

const App = () => {
  const cartItems = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();

  const itemLoad = useCallback(
    (item) => dispatch(itemLoadAction(item)),
    [dispatch]
  );

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          {categories.map(c => {
            return (
              <Route key={c.id} exact path={c.link} render={() => {
                return (
                  <>
                    <Categories />
                    <Items
                      filter={c.label === 'all' ? '' : c.label}
                    />
                  </>
                )
              }} />
            )
          })}

          <Route path='/item/:id' component={ItemDetails} />

          <Route path='/cart' component={Cart} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
