import React, { Component, FunctionComponent } from 'react';
import './BannerSlider.scss';

import TitlePanel from '../TitlePanel/TitlePanel';
import BannerLong from '../../dumb/BannerLong/BannerLong';

interface Props {
  banners: any;
}

const BannerSlider: FunctionComponent<Props> = ({ banners }) => {
  return (
    <section id="banner-slider">
      {/* <div className="banners__header">
          <h2 className="banners__header__title">Great Deals!</h2>
          <a className="banners__header__explore" href="#">
            View all >>
          </a>
        </div> */}
      <TitlePanel title={'Great Deals!'} fontBold={true} />
      <div className="banner-slider__list">{banners && banners.map((banner: any) => <BannerLong banner={banner} />)}</div>
    </section>
  );
};

export default BannerSlider;
