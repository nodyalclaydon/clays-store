import React from "react"
import {Route, Switch} from "react-router-dom"

import { HeaderContainer } from "./containers/Header"
import { FooterContainer} from "./containers/Footer"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Cart from "./pages/Cart"

function App() {
  return (
    <>
    <div className="site-content">
      <HeaderContainer />
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
    </div>
    <FooterContainer />
    </>
  );
}

export default App;
