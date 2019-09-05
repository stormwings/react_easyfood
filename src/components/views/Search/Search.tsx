import React, { Component, Fragment } from 'react';

import Header from '../../smart/Header/Header';
import InputSearch from '../../smart/InputSearch/InputSearch';
import TitlePanel from '../../smart/TitlePanel/TitlePanel';
import ArticleList from '../../smart/ArticleList/ArticleList';

class Search extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <InputSearch />
        <TitlePanel />
        <ArticleList />
      </Fragment>
    );
  }
}

export default Search;
