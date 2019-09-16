import React, { Component, Fragment } from 'react';

import Header from '../../smart/Header/Header';
import InputSearch from '../../smart/InputSearch/InputSearch';
import Categories from '../../smart/Categories/Categories';
import ArticleList from '../../smart/ArticleList/ArticleList';

class Category extends Component {
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
    const articles: any = [
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 1,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 2,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 3,
        title: 'Pizza M',
        price: '4U$D',
        image: 'https://image.flaticon.com/icons/svg/135/135646.svg',
        delivery: 'FREE - 30m'
      }
    ];

    return (
      <Fragment>
        <Header user={user} />
        <InputSearch searchAction={() => console.log('wut')} />
        <Categories categories={categories} />
        <ArticleList articles={articles} />
      </Fragment>
    );
  }
}

export default Category;
