import React, { Component, Fragment } from 'react';

import HeroImage from '../../smart/HeroImage/HeroImage';
import ArticleTitle from '../../smart/ArticleTitle/ArticleTitle';
import FeaturePanel from '../../smart/FeaturePanel/FeaturePanel';
import CommentPanel from '../../smart/CommentPanel/CommentPanel';
import ArticlePricePanel from '../../smart/ArticlePricePanel/ArticlePricePanel';

import JpgPizzaExample from './pizza.jpeg';

class Article extends Component {
  render() {
    const article: any = {
      _id: 1,
      title: 'Meat menu',
      shortInfo: 'Meat, salad and an egg',
      price: '8U$D',
      image: JpgPizzaExample,
      deliveryPrice: '0.5U$D',
      deliveryTime: '30m',
      score: 4
    };
    const comments: any = [
      {
        profilePicture: 'https://avatars0.githubusercontent.com/u/34633323?s=460&v=4',
        userFirstName: 'Mariano',
        score: 5,
        date: 'July.12.2019',
        commentary:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui impedit voluptatem minus ipsam, deserunt adipisci mollitia architecto unde quam veritatis.'
      },
      {
        profilePicture: 'https://avatars0.githubusercontent.com/u/34633323?s=460&v=4',
        userFirstName: 'Florencia',
        score: 5,
        date: 'October.18.2019',
        commentary:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui impedit voluptatem minus ipsam, deserunt adipisci mollitia architecto unde quam veritatis.'
      }
    ];

    const { title, price, image, deliveryPrice, deliveryTime, score, shortInfo } = article;

    return (
      <Fragment>
        <HeroImage image={image} title={title} />
        <ArticleTitle title={title} score={score} info={shortInfo} fontFamily={'times'} />
        <FeaturePanel featureName={'Delivery!'} featureFirstValue={deliveryPrice} featureSecondValue={deliveryTime} />
        <CommentPanel comments={comments} />
        <ArticlePricePanel price={price} />
      </Fragment>
    );
  }
}

export default Article;
