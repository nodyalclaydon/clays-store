import React from "react"
import {Route, Switch} from "react-router-dom"

import Home from "./pages/Home"
import Category from "./pages/Category"
import Cart from "./pages/Cart"

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/category">
        <Category />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
}

export default App;
