import React, { FunctionComponent } from 'react';
import './BannerSlider.scss';

import TitlePanel from '../TitlePanel/TitlePanel';
import BannerLong from '../../dumb/BannerLong/BannerLong';

interface Props {
  banners: any;
}

const BannerSlider: FunctionComponent<Props> = ({ banners }) => {
  return (
    <section id="banner-slider">
      <TitlePanel title={'Great Deals!'} fontBold={true} />
      <div className="banner-slider__list">
        {banners && banners.map((banner: any, index: number) => <BannerLong banner={banner} key={index} />)}
      </div>
    </section>
  );
};

export default BannerSlider;
