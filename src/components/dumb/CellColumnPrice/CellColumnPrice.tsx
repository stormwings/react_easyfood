import React, { FunctionComponent } from "react";
import "./CellColumnPrice.scss";
import Button from "../Button/Button";

interface Props {
  article: any;
  onAdd: any;
  onRest: any;
}

const CellColumnPrice: FunctionComponent<Props> = props => {
  const { article, onAdd, onRest } = props;
  const { price } = article;

  return (
    <div id="cell-price">
      <div className="cell-price__counter">
        <Button content={"+"} className={"button"} onClick={onAdd} />
        <div>1</div>
        <Button content={"-"} className={"button"} onClick={onRest} />
      </div>
      <div className="cell-price__total">${price}</div>
    </div>
  );
};

export default CellColumnPrice;
