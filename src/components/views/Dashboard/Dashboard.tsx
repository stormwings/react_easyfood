import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './../../../redux/actions/foodActions';

import BannerSlider from '../../smart/BannerSlider/BannerSlider';
import InputSearch from '../../smart/InputSearch/InputSearch';
import Categories from '../../smart/Categories/Categories';
import Trendings from '../../smart/Trendings/Trendings';
import Header from '../../smart/Header/Header';

interface Props {
  foodState: any;
  foodActions: any;
}

class Dashboard extends Component<Props> {
  componentDidMount() {
    this.props.foodActions.foodListFetch();
    this.props.foodActions.getFoodBannerList();
    this.props.foodActions.categoriesListFetch();
  }

  render() {
    const { foodList, categories, banners } = this.props.foodState;
    const { searchFoodsFetch } = this.props.foodActions;

    const user: any = {
      firstName: 'Mariano',
      profilePicture: 'https://avatars0.githubusercontent.com/u/34633323?s=460&v=4'
    };

    return (
      <Fragment>
        <Header user={user} />
        <InputSearch searchAction={searchFoodsFetch} />
        <Categories categories={categories.slice(0, 4)} />
        <Trendings trendings={foodList.slice(0, 3)} />
        <BannerSlider banners={banners} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({ foodState: state.food });
const mapDispatchToProps = (dispatch: any) => ({ foodActions: bindActionCreators(actions, dispatch) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
