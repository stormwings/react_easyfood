import React, { Component } from 'react';
import './InputSearch.scss';

import SearchForm from '../../dumb/SearchForm/SearchForm';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props {
  history: any;
  searchAction: any;
}

class InputSearch extends Component<Props & RouteComponentProps> {
  public onSearchSubmit = (formData: any) => {
    const { query } = formData;
    this.props.searchAction({ query });
    this.props.history.push({ pathname: '/search', state: { query } });
  };

  render() {
    return (
      <section id="input-search">
        <SearchForm onSubmit={this.onSearchSubmit} />
      </section>
    );
  }
}

export default withRouter(InputSearch);
