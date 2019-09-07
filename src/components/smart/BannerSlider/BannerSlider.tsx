import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import './BannerSlider.scss';

import TitlePanel from '../TitlePanel/TitlePanel';
import BannerLong from '../../dumb/BannerLong/BannerLong';

interface Props {
  banners: any;
  history: any;
}

const BannerSlider: FunctionComponent<Props & RouteComponentProps> = ({ banners, history }) => {
  const redirect = (_id: string) => history.push(`/promo/${_id}`);

  return (
    <section id="banner-slider">
      <TitlePanel title={'Great Deals!'} fontBold={true} />
      <div className="banner-slider__list">
        {banners && banners.map((banner: any, index: number) => <BannerLong banner={banner} action={redirect} key={index} />)}
      </div>
    </section>
  );
};

export default withRouter(BannerSlider);
