import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from '../components/views/Search/Search';
import Article from '../components/views/Article/Article';
import Checkout from '../components/views/Checkout/Checkout';
import Dashboard from '../components/views/Dashboard/Dashboard';
import Category from '../components/views/Category/Category';

import { NoMatch } from '../components/views/404';

const Router: FunctionComponent<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/article/:id" component={Article} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/trendings" component={Search} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/category/:category" component={Category} />

        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
