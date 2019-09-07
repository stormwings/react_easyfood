import React, { FunctionComponent } from 'react';
import './BannerLong.scss';

import PngBannerExample from './banner_one.png';

interface Props {
  banner: any;
  action: any;
}

const BannerLong: FunctionComponent<Props> = ({ banner, action }) => {
  const { _id }: any = banner;

  return (
    <article className="article-banner" onClick={() => action(_id)}>
      <img className="article-banner__image" src={PngBannerExample} alt="banner" />
    </article>
  );
};

export default BannerLong;
