import React, { Component, Fragment } from 'react';
import HeroImage from '../../smart/HeroImage/HeroImage';
import ArticleTitle from '../../smart/ArticleTitle/ArticleTitle';
import FeaturePanel from '../../smart/FeaturePanel/FeaturePanel';
import CommentPanel from '../../smart/CommentPanel/CommentPanel';
import ArticlePricePanel from '../../smart/ArticlePricePanel/ArticlePricePanel';

class Article extends Component {
  render() {
    return (
      <Fragment>
        <HeroImage />
        <ArticleTitle />
        <FeaturePanel />
        <CommentPanel />
        <ArticlePricePanel />
      </Fragment>
    );
  }
}

export default Article;
