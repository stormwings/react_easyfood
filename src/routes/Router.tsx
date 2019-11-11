import React, { FunctionComponent } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  BrowserRouterProps
} from "react-router-dom";

import Search from "../components/views/Search/Search";
import Article from "../components/views/Article/Article";
import Checkout from "../components/views/Checkout/Checkout";
import Dashboard from "../components/views/Dashboard/Dashboard";
import Category from "../components/views/Category/Category";

import { NoMatch } from "../components/views/404";

const Router: FunctionComponent<BrowserRouterProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/article/:articleId" component={Article} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/trendings" component={Search} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/category/:categoryName" component={Category} />

        {/* <Switch>
          <Route path="/promo/:id" component={Dashboard} />
          <Route path="/order/new" component={Dashboard} />
          <Route path="/order/info" component={Dashboard} />
          <Route path="/user/:id/profile" render={props => <UserProfile userId={props.match.params.id} />} /> 
          <Route path="/user/:id/details" render={props => <UserDetails userId={props.match.params.id} />} />
          <Route path="/user/:id/orders" render={props => <UserDetails userId={props.match.params.id} />} /> 
        </Switch> */}

        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
