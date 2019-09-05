import React, { Component, Fragment } from 'react';

import Header from '../../smart/Header/Header';
import InputSearch from '../../smart/InputSearch/InputSearch';
import TitleResult from '../../smart/TitleResult/TitleResult';
import ArticleList from '../../smart/ArticleList/ArticleList';

class Search extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <InputSearch />
        <TitleResult />
        <ArticleList />
      </Fragment>
    );
  }
}

export default Search;
