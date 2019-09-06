import React, { Component } from 'react';
import './CommentPanel.scss';
import SvgFavorite from '../../dumb/Svg/SVGFavorite';

class CommentPanel extends Component {
  render() {
    return (
      <section id="section_eleven">
        <div className="comments__header">
          <h2 className="comments__header__title">Comment</h2>
        </div>
        <div className="comments__list">
          <div className="comments__list__article">
            <div className="comments__list__article__header">
              <img
                className="comments__list__article__header__image"
                src="https://avatars0.githubusercontent.com/u/34633323?s=460&v=4"
                alt="profile_picture"
              />
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
    );
  }
}

export default CommentPanel;
