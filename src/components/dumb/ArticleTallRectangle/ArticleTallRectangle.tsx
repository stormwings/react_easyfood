import React, { FunctionComponent, Fragment } from 'react';
import './ArticleTallRectangle.scss';
import SvgFavorite from '../Svg/SVGFavorite';
import { useCheckElementInViewport } from '../../../helpers/hooks';

interface Props {
  article: any;
  action: any;
}

const ArticleTallRectangle: FunctionComponent<Props> = ({ article, action }) => {
  const { _id, title, price, image, delivery }: any = article;

  // hook to define if the component its visible
  const [show, $element] = useCheckElementInViewport();

  return (
    <div
      // set this <div> in $element
      ref={$element}
      onClick={() => action(_id)}
      id="article-tall-rectangle"
    >
      {show && (
        <Fragment>
          <SvgFavorite className="article-tall-rectangle__favorite" />
          <img className="article-tall-rectangle__image" src={image} alt="article" />
          <div className="article-tall-rectangle__info">
            <p className="article-tall-rectangle__info__delivery">{delivery}</p>
            <p className="article-tall-rectangle__info__title">{title}</p>
            <p className="article-tall-rectangle__info__price">{price}</p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ArticleTallRectangle;
