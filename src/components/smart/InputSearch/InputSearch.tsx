import React, { Component } from 'react';
import './InputSearch.scss';

import SearchForm from '../../dumb/SearchForm/SearchForm';

class InputSearch extends Component {
  render() {
    return (
      <section id="input-search">
        <SearchForm />
      </section>
    );
  }
}

export default InputSearch;
