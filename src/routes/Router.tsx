import React, { SFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from '../views/Search/Search';
import Dashboard from '../views/Dashboard/Dashboard';

import { NoMatch } from '../views/404';

const Router: SFC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/search" component={Search} />

        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
