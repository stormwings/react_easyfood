import React, { Component, Fragment } from 'react';

import Header from '../../smart/Header/Header';
import InputSearch from '../../smart/InputSearch/InputSearch';
import Categories from '../../smart/Categories/Categories';
import BannerSlider from '../../smart/BannerSlider/BannerSlider';
import Trendings from '../../smart/Trendings/Trendings';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <InputSearch />
        <Categories />
        <Trendings />
        <BannerSlider />
      </Fragment>
    );
  }
}

export default Dashboard;
