import React, { FunctionComponent } from 'react';
import './ArticleTallRectangle.scss';
import SvgFavorite from '../Svg/SVGFavorite';

interface Props {
  article: any;
  action: any;
}

const ArticleTallRectangle: FunctionComponent<Props> = ({ article, action }) => {
  const { _id, title, price, image, delivery }: any = article;

  return (
    <div onClick={() => action(_id)} id="article-tall-rectangle">
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
