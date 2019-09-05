import React, { Component } from 'react';
import './Categories.scss';

class Categories extends Component {
  render() {
    return (
      <section id="section_tree">
        <div className="category__header">
          <h2 className="category__header__title">Food Time</h2>
          <p className="category__header__subtitle">What do you want to eat today</p>
        </div>
        <div className="category__list">
          <div className="category__list__article">
            <img className="category__list__article__image" src="https://image.flaticon.com/icons/svg/1365/1365540.svg" />
            <a className="category__list__article__title" href="#">
              Restaurant
            </a>
          </div>
          <div className="category__list__article">
            <img className="category__list__article__image" src="https://image.flaticon.com/icons/svg/817/817396.svg" />
            <a className="category__list__article__title" href="#">
              Desserts
            </a>
          </div>
          <div className="category__list__article">
            <img className="category__list__article__image" src="https://image.flaticon.com/icons/svg/706/706164.svg" />
            <a className="category__list__article__title" href="#">
              Kiosk
            </a>
          </div>
          <div className="category__list__article">
            <img className="category__list__article__image" src="https://image.flaticon.com/icons/svg/859/859270.svg" />
            <a className="category__list__article__title" href="#">
              Supermarket
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Categories;
