import React, { FunctionComponent } from 'react';
import SvgFavorite from '../Svg/SVGFavorite';
import './ArticleTallRectangle.scss';

interface Props {
  article: any;
}

const ArticleTallRectangle: FunctionComponent<Props> = ({ article }) => {
  const { title, price, image, delivery } = article;

  return (
    <div id="article-tall-rectangle">
      <SvgFavorite className="article-tall-rectangle__favorite" />
      <img className="article-tall-rectangle__image" src={image} alt="article" />
      <div className="article-tall-rectangle__info">
        <p className="article-tall-rectangle__info__delivery">{delivery}</p>
        <p className="article-tall-rectangle__info__title">{title}</p>
        <p className="article-tall-rectangle__info__price">{price}</p>
      </div>
    </div>
  );
};

export default ArticleTallRectangle;
