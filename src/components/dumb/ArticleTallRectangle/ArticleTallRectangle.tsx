import React, { FunctionComponent, Fragment } from "react";
import "./ArticleTallRectangle.scss";
import SvgFavorite from "../../Svg/SVGFavorite";
import { useCheckElementInViewport } from "../../../helpers/hooks";

interface Props {
  article: any;
  action: any;
}

const ArticleTallRectangle: FunctionComponent<Props> = props => {
  const { article, action } = props;
  const { idMeal, strMeal, strMealThumb, price, delivery }: any = article;
  // (pending) this data comes from backend
  const auxName = strMeal.length >= 9 ? `${strMeal.slice(0, 9)}...` : strMeal;
  const auxPrice = `U$D${Math.floor(Math.random() * 10 + 1)}`;
  const auxDelivery = `U$D${Math.floor(Math.random() * 3 + 1)}`;

  // hook to define if the component its visible
  const [show, $element] = useCheckElementInViewport();

  return (
    <div
      // set this <div> in $element
      ref={$element}
      id="article-tall-rectangle"
    >
      {show && (
        <Fragment>
          <SvgFavorite
            onClick={() => console.log("to favorites!")}
            className="article-tall-rectangle__favorite"
          />
          <div onClick={() => action(idMeal)}>
            <img
              className="article-tall-rectangle__image"
              src={strMealThumb}
              alt="article"
            />
            <div className="article-tall-rectangle__info">
              <p className="article-tall-rectangle__info__delivery">
                30m - {delivery ? delivery : auxDelivery}
              </p>
              <p className="article-tall-rectangle__info__title">{auxName}</p>
              <p className="article-tall-rectangle__info__price">
                {price ? price : auxPrice}
              </p>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ArticleTallRectangle;
