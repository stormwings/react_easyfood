import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './../../../redux/actions/foodActions';

import Header from '../../smart/Header/Header';
import InputSearch from '../../smart/InputSearch/InputSearch';
import TitlePanel from '../../smart/TitlePanel/TitlePanel';
import ArticleList from '../../smart/ArticleList/ArticleList';

interface Props {
  foodActions: any;
  foodState: any;
  location: any;
}

class Search extends Component<Props> {
  // apply hooks and search parameters url (pending)
  componentDidMount() {
    const {
      location: { state },
      foodActions
    } = this.props;
    const checkPreviousData = state && state.query;
    const query = checkPreviousData ? state.query : '';

    foodActions.searchFoodsFetch({ query });
  }

  render() {
    const { foodState, foodActions, location } = this.props;
    const { searchFoodsFetch } = foodActions;
    const { foodList } = foodState;

    const user: any = {
      firstName: 'Mariano',
      profilePicture: 'https://avatars0.githubusercontent.com/u/34633323?s=460&v=4'
    };

    return (
      <Fragment>
        <Header user={user} />
        <InputSearch searchAction={searchFoodsFetch} />
        <TitlePanel title={location.state && location.state.query !== '' ? location.state.query : 'Latests'} />
        <ArticleList articles={foodList} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({ foodState: state.food });
const mapDispatchToProps = (dispatch: any) => ({ foodActions: bindActionCreators(actions, dispatch) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
