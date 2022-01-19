import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


import "./App.css";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import SignInAndSignUp from "./components/sign-in-and-sign-up/SignInAndSignUp";
import CheckoutPage from "./pages/checkout/Checkout";

import Header from "./components/header/Header";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";



const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())


  }, [dispatch])





  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
}




export default App;
