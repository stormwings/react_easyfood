import React, { FunctionComponent } from 'react';
import './BannerLong.scss';

import PngBannerExample from './banner_one.png';

interface Props {
  banner: any;
}

const BannerLong: FunctionComponent<Props> = props => {
  return (
    <article className="article-banner">
      <img className="article-banner__image" src={PngBannerExample} alt="banner" />
    </article>
  );
};

export default BannerLong;
