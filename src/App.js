import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from "react-router-dom";

import {itemLoadAction} from './store/shop/actions';

import items from "./constants/items";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Items from "./components/Items";
import ItemDetails from "./components/ItemDetails";
import Cart from "./components/Cart";

const App = ({itemLoadAction, cartItems}) => {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <>
                <Categories />
                <Items />
              </>
            )
          }} />

          <Route path='/item/:id' render={({match: {params}}) => {
            const inCart = cartItems.find(item => item.id === params.id);
            if(inCart) {
              itemLoadAction(inCart);
            } else {
              itemLoadAction(items.find(item => item.id === params.id));
            }

            return <ItemDetails id={params.id} />;
          }} />

          <Route path='/cart' component={Cart} />
        </Switch>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    itemLoadAction: (item) => dispatch(itemLoadAction(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
