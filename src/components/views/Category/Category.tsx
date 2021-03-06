import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './../../../redux/actions/foodActions';

import Header from '../../smart/Header/Header';
import InputSearch from '../../smart/InputSearch/InputSearch';
import Categories from '../../smart/Categories/Categories';
import ArticleList from '../../smart/ArticleList/ArticleList';

interface Props {
  foodState: any;
  foodActions: any;
  match: any;
}
class Category extends Component<Props> {
  componentDidMount() {
    const { categoryName } = this.props.match.params;
    this.props.foodActions.getFoodByCategoryFetch({ categoryName });
    this.props.foodActions.categoriesListFetch();
  }

  render() {
    const { foodList, categories } = this.props.foodState;
    const { searchFoodsFetch, getFoodByCategoryFetch } = this.props.foodActions;

    const user: any = {
      firstName: 'Mariano',
      profilePicture: 'https://avatars0.githubusercontent.com/u/34633323?s=460&v=4'
    };

    return (
      <Fragment>
        <Header user={user} />
        <InputSearch searchAction={searchFoodsFetch} />
        <Categories categories={categories.slice(5, 9)} changeCategoryAction={getFoodByCategoryFetch} />
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
)(Category);
