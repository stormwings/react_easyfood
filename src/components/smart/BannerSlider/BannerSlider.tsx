import React, { Component } from 'react';
import PngBannerExample from './banner_one.png';
import './BannerSlider.scss';

class BannerSlider extends Component {
  render() {
    return (
      <section id="section_five">
        <div className="banners__header">
          <h2 className="banners__header__title">Great Deals!</h2>
          <a className="banners__header__explore" href="#">
            View all >>
          </a>
        </div>
        <div className="banners__list">
          <article className="banners__list__article">
            <img src={PngBannerExample} />
          </article>
        </div>
      </section>
    );
  }
}

export default BannerSlider;
