import React, { Component, Fragment } from 'react';

import Header from '../../smart/Header/Header';
import InputSearch from '../../smart/InputSearch/InputSearch';
import Categories from '../../smart/Categories/Categories';
import BannerSlider from '../../smart/BannerSlider/BannerSlider';
import Trendings from '../../smart/Trendings/Trendings';

class Dashboard extends Component {
  render() {
    const user: any = {
      firstName: 'Mariano',
      profilePicture: 'https://avatars0.githubusercontent.com/u/34633323?s=460&v=4'
    };
    const categories: any = [
      {
        name: 'Restaurant',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg'
      },
      {
        name: 'Desserts',
        image: 'https://image.flaticon.com/icons/svg/817/817396.svg'
      },
      {
        name: 'Kiosk',
        image: 'https://image.flaticon.com/icons/svg/706/706164.svg'
      },
      {
        name: 'Supermarket',
        image: 'https://image.flaticon.com/icons/svg/859/859270.svg'
      }
    ];
    const trendings: any = [
      {
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        title: 'Pizza M',
        price: '4U$D',
        image: 'https://image.flaticon.com/icons/svg/135/135646.svg',
        delivery: 'FREE - 30m'
      }
    ];
    const banners: any = [
      {
        _id: 1
      }
    ];
    const redirectToAllTrends = {
      name: 'View All',
      link: '/trendings'
    };

    return (
      <Fragment>
        <Header user={user} />
        <InputSearch />
        <Categories categories={categories} />
        <Trendings trendings={trendings} redirection={redirectToAllTrends} />
        <BannerSlider banners={banners} />
      </Fragment>
    );
  }
}

export default Dashboard;
