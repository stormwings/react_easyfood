import React, { Component, Fragment } from 'react';

import SvgFavorite from '../../dumb/Svg/SVGFavorite';
import SvgHeart from '../../dumb/Svg/SVGHeart';
import JpgPizzaExample from './pizza.jpeg';

import './Article.scss';

class Article extends Component {
  render() {
    return (
      <Fragment>
        <section id="section_nine">
          <div className="article__image">
            <img src={JpgPizzaExample} />
          </div>
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

        <section id="section_ten">
          <div className="article__action">
            <div className="article__action__feature">
              <span className="title-mini">
                <i>Offer!</i>
              </span>
            </div>
            <div className="article__action__delivery">Free Delivery</div>
            <div className="article__action__time">
              <span className="button-mini">
                <i>15m</i>
              </span>
            </div>
          </div>
        </section>

        <section id="section_eleven">
          <div className="comments__header">
            <h2 className="comments__header__title">Comment</h2>
          </div>
          <div className="comments__list">
            <div className="comments__list__article">
              <div className="comments__list__article__header">
                <img className="comments__list__article__header__image" src="https://avatars0.githubusercontent.com/u/34633323?s=460&v=4" />
                <div className="comments__list__article__header__name">
                  <div className="comments__list__article__header__name__title">Mariano</div>
                  <div className="comments__list__article__header__name__stars">
                    <SvgFavorite className="comments__list__article__header__name__stars__star" />
                    <SvgFavorite className="comments__list__article__header__name__stars__star" />
                    <SvgFavorite className="comments__list__article__header__name__stars__star" />
                    <SvgFavorite className="comments__list__article__header__name__stars__star" />
                    <SvgFavorite className="comments__list__article__header__name__stars__star" />
                  </div>
                </div>
                <div className="comments__list__article__header__date">July.12.2019</div>
              </div>
              <div className="comments__list__article__description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui impedit voluptatem minus ipsam, deserunt adipisci
                  mollitia architecto unde quam veritatis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="section_twelve">
          <div className="article__action">
            <div className="article__action__price">U$D 12.99</div>
            <div className="article__action__time">
              <span className="button-mini">
                <i>+ 1</i>
              </span>
            </div>
            <div className="article__action__button">
              <img src="http://ali.edu.uy/img/icons/icon-cart-white.svg" alt="" />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Article;
