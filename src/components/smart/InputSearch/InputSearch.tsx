import React, { Component } from 'react';
import './InputSearch.scss';

import SearchForm from '../../dumb/SearchForm/SearchForm';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props {
  history: any;
}

class InputSearch extends Component<Props & RouteComponentProps> {
  public onSubmit = (formData: any) => {
    const { query } = formData;
    this.props.history.push({ pathname: '/search', state: { query } });
  };

  render() {
    return (
      <section id="input-search">
        <SearchForm onSubmit={this.onSubmit} />
      </section>
    );
  }
}

export default withRouter(InputSearch);
