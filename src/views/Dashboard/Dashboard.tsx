import React, { Component, Fragment } from 'react';
import './Dashboard.scss';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <section id="section_one" className="header">
          <div className="header__greetings">
            <p className="header__greetings__text">
              Hello <b>Mariano</b>!
            </p>
          </div>
          <div className="header__user">
            <img className="header__user__image" src="https://avatars0.githubusercontent.com/u/34633323?s=460&v=4" />
          </div>
        </section>
        <section id="section_two">
          <form className="search__form">
            <input className="search__form__input" type="search" placeholder="Chocolate Cake" />
            <button className="search__form__button" type="submit">
              <svg className="search__form__button__icon">
                {/* <use xlink="http://www.w3.org/1999/xlink" href="#icon__search"></use> */}
              </svg>
            </button>
          </form>
          <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" display="none">
            <symbol id="icon__search" viewBox="0 0 32 32">
              <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z" />
            </symbol>
          </svg>
        </section>
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
        <section id="section_four">
          <div className="trending__header">
            <h2 className="trending__header__title">Trending</h2>
            <a className="trending__header__explore" href="#">
              View all >>
            </a>
          </div>
          <div className="trending__list">
            <div className="trending__list__article">
              <img className="trending__list__article__image" src="https://image.flaticon.com/icons/svg/1890/1890012.svg" />
              <div className="trending__list__article__info">
                <p className="trending__list__article__info__delivery">0.5U$D - 30m</p>
                <p className="trending__list__article__info__title">Meat menu</p>
                <p className="trending__list__article__info__price">8U$D</p>
              </div>
            </div>
            <div className="trending__list__article">
              <img className="trending__list__article__image" src="https://image.flaticon.com/icons/svg/1365/1365540.svg" />
              <div className="trending__list__article__info">
                <p className="trending__list__article__info__delivery">0.5U$D - 30m</p>
                <p className="trending__list__article__info__title">Burger XXL</p>
                <p className="trending__list__article__info__price">3U$D</p>
              </div>
            </div>
            <div className="trending__list__article">
              <img className="trending__list__article__image" src="https://image.flaticon.com/icons/svg/135/135646.svg" />
              <div className="trending__list__article__info">
                <p className="trending__list__article__info__delivery free">FREE - 30m</p>
                <p className="trending__list__article__info__title">Pizza M</p>
                <p className="trending__list__article__info__price">4U$D</p>
              </div>
            </div>
          </div>
        </section>
        <section id="section_five">
          <div className="banners__header">
            <h2 className="banners__header__title">Great Deals!</h2>
            <a className="banners__header__explore" href="#">
              View all >>
            </a>
          </div>
          <div className="banners__list">
            <article className="banners__list__article">
              <img src="./../assets/img/banner_one.png" />
            </article>
            <article className="banners__list__article">
              <img src="./../assets/img/banner_two.png" />
            </article>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Dashboard;
