import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import * as actions from './../../../redux/actions/foodActions';

import ArticlePricePanel from '../../smart/ArticlePricePanel/ArticlePricePanel';
import ArticleTitle from '../../smart/ArticleTitle/ArticleTitle';
import FeaturePanel from '../../smart/FeaturePanel/FeaturePanel';
import CommentPanel from '../../smart/CommentPanel/CommentPanel';
import HeroImage from '../../smart/HeroImage/HeroImage';

interface Props {
  foodActions: any;
  foodState: any;
  match: any;
}

class Article extends Component<Props> {
  componentDidMount() {
    const { articleId } = this.props.match.params;
    this.props.foodActions.getFoodFetch({ articleId });
  }

  render() {
    const { selectedFood } = this.props.foodState;
    if (!selectedFood) return <div>Loading</div>;
    if (!selectedFood.idMeal) return <Redirect to={'/404'} />;

    // food data
    const { strMeal, strMealThumb, strIngredient1, strIngredient2, strIngredient3, userComments } = selectedFood;
    const shortInfo = `${strIngredient1}, ${strIngredient2}, ${strIngredient3}...`;
    const auxName = strMeal.length >= 13 ? `${strMeal.slice(0, 11)}...` : strMeal;

    // helpers
    const article: any = {
      price: '8U$D',
      deliveryPrice: '0.5U$D',
      deliveryTime: '30m',
      score: 4
    };
    const { price, deliveryPrice, deliveryTime, score } = article;

    return (
      selectedFood && (
        <Fragment>
          <HeroImage image={strMealThumb} title={strMeal} />
          <ArticleTitle title={auxName} score={score} info={shortInfo} fontFamily={'times'} />
          <FeaturePanel featureName={'Delivery!'} featureFirstValue={deliveryPrice} featureSecondValue={deliveryTime} />
          <CommentPanel comments={userComments} />
          <ArticlePricePanel price={price} />
        </Fragment>
      )
    );
  }
}

const mapStateToProps = (state: any) => ({ foodState: state.food });
const mapDispatchToProps = (dispatch: any) => ({ foodActions: bindActionCreators(actions, dispatch) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
