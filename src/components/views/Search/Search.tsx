import React, { Component, Fragment } from 'react';

import Header from '../../smart/Header/Header';
import InputSearch from '../../smart/InputSearch/InputSearch';
import TitlePanel from '../../smart/TitlePanel/TitlePanel';
import ArticleList from '../../smart/ArticleList/ArticleList';

class Search extends Component {
  render() {
    const user: any = {
      firstName: 'Mariano',
      profilePicture: 'https://avatars0.githubusercontent.com/u/34633323?s=460&v=4'
    };

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
        _id: 3,
        title: 'Pizza M',
        price: '4U$D',
        image: 'https://image.flaticon.com/icons/svg/135/135646.svg',
        delivery: 'FREE - 30m'
      },
      {
        _id: 4,
        title: 'Meat menu',
        price: '8U$D',
        image: 'https://image.flaticon.com/icons/svg/1890/1890012.svg',
        delivery: '0.5U$D - 30m'
      },
      {
        _id: 5,
        title: 'Burger XXL',
        price: '3U$D',
        image: 'https://image.flaticon.com/icons/svg/1365/1365540.svg',
        delivery: '0.5U$D - 15m'
      },
      {
        _id: 6,
        title: 'Pizza M',
        price: '4U$D',
        image: 'https://image.flaticon.com/icons/svg/135/135646.svg',
        delivery: 'FREE - 30m'
      }
    ];

    return (
      <Fragment>
        <Header user={user} />
        <InputSearch />
        <TitlePanel title={'Pizza'} />
        <ArticleList articles={articles} />
      </Fragment>
    );
  }
}

export default Search;
