import React, { SFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from '../views/Search/Search';
import Article from '../views/Article/Article';
import Dashboard from '../views/Dashboard/Dashboard';

import { NoMatch } from '../views/404';

const Router: SFC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/article/:id" component={Article} />
        <Route exact path="/search" component={Search} />

        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
