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

    return (
      <Fragment>
        <Header user={user} />
        <InputSearch />
        <TitlePanel title={'Pizza'} />
        <ArticleList />
      </Fragment>
    );
  }
}

export default Search;
