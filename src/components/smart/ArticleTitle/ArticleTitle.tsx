import React, { Component } from 'react';
import './ArticleTitle.scss';
import SvgHeart from '../../dumb/Svg/SVGHeart';

class ArticleTitle extends Component {
  render() {
    return (
      <section id="section_nine">
        <div className="article__header">
          <div className="article__header__name">
            <h2 className="article__header__name__title">Food Time</h2>
            <p className="article__header__name__subtitle">What do you want to eat today</p>
          </div>
          <div className="article__header__review">
            <div className="article__header__review__stars">
              <SvgHeart className="comments__list__article__header__name__stars__star" />
              <SvgHeart className="comments__list__article__header__name__stars__star" />
              <SvgHeart className="comments__list__article__header__name__stars__star" />
              <SvgHeart className="comments__list__article__header__name__stars__star" />
            </div>
            <p className="article__header__review__number">4.9</p>
          </div>
        </div>
      </section>
    );
  }
}

export default ArticleTitle;
