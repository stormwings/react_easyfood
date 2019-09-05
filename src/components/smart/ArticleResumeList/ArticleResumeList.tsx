import React, { Component } from 'react';
import './ArticleResumeList.scss';

class ArticleResumeList extends Component {
  render() {
    return (
      <section id="section_sixteen">
        <div className="cart__header">
          <h5 className="cart__header__subtitle">Items</h5>
          <h4 className="cart__header__title">Resume</h4>
        </div>
        <div className="cart__article">
          <div className="cart__article__item">
            <img className="cart__article__item__image" src="https://image.flaticon.com/icons/svg/135/135646.svg" alt="" />
            <div className="cart__article__item__info">
              <div className="cart__article__item__info__title">Pizza XL</div>
              <div className="cart__article__item__info__subtitle">Pizza Hut</div>
              <div className="cart__article__item__info__action">
                - <span>Delete</span>
              </div>
            </div>
          </div>
          <div className="cart__article__price">
            <div className="cart__article__price__counter">
              <button>+</button>
              <div>1</div>
              <button>-</button>
            </div>
            <div className="cart__article__price__total">$5,25</div>
          </div>
        </div>
      </section>
    );
  }
}

export default ArticleResumeList;
