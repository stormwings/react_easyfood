import React, { Component } from 'react';
import SvgFavorite from '../../dumb/Svg/SVGFavorite';
import './Trendings.scss';

class Trendings extends Component {
  render() {
    return (
      <section id="section_four">
        <div className="trending__header">
          <h2 className="trending__header__title">Trending</h2>
          <a className="trending__header__explore" href="#">
            View all >>
          </a>
        </div>
        <div className="trending__list">
          <div className="trending__list__article">
            <SvgFavorite className="trending__list__article__favorite" />
            <img className="trending__list__article__image" src="https://image.flaticon.com/icons/svg/1890/1890012.svg" />
            <div className="trending__list__article__info">
              <p className="trending__list__article__info__delivery">0.5U$D - 30m</p>
              <p className="trending__list__article__info__title">Meat menu</p>
              <p className="trending__list__article__info__price">8U$D</p>
            </div>
          </div>
          <div className="trending__list__article">
            <SvgFavorite className="trending__list__article__favorite" />
            <img className="trending__list__article__image" src="https://image.flaticon.com/icons/svg/1365/1365540.svg" />
            <div className="trending__list__article__info">
              <p className="trending__list__article__info__delivery">0.5U$D - 30m</p>
              <p className="trending__list__article__info__title">Burger XXL</p>
              <p className="trending__list__article__info__price">3U$D</p>
            </div>
          </div>
          <div className="trending__list__article">
            <SvgFavorite className="trending__list__article__favorite" />
            <img className="trending__list__article__image" src="https://image.flaticon.com/icons/svg/135/135646.svg" />
            <div className="trending__list__article__info">
              <p className="trending__list__article__info__delivery free">FREE - 30m</p>
              <p className="trending__list__article__info__title">Pizza M</p>
              <p className="trending__list__article__info__price">4U$D</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Trendings;
