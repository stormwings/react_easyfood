import React, { FunctionComponent } from 'react';
import './CellColumnPrice.scss';

interface Props {
  article: any;
}

const CellColumnPrice: FunctionComponent<Props> = ({ article }) => {
  const { price } = article;

  return (
    <div id="cell-price">
      <div className="cell-price__counter">
        <button>+</button>
        <div>1</div>
        <button>-</button>
      </div>
      <div className="cell-price__total">${price}</div>
    </div>
  );
};

export default CellColumnPrice;
