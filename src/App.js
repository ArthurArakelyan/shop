import React from 'react';
import {Switch, Route} from "react-router-dom";

import categories from "./constants/categories";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Items from "./components/Items";
import ItemDetails from "./components/ItemDetails";
import Cart from "./components/Cart";

const App = () => {
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
