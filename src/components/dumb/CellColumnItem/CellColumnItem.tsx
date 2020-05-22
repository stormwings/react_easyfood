import React, { FunctionComponent } from "react";
import "./CellColumnItem.scss";

interface Props {
  article: any;
  onDelete: any;
}

const CellColumnItem: FunctionComponent<Props> = props => {
  const { article, onDelete } = props;
  const { title, image } = article;

  return (
    <div id="cell-item">
      <img className="cell-item__image" src={image} alt="" />
      <div className="cell-item__info">
        <div className="cell-item__info__title">{title}</div>
        <div className="cell-item__info__subtitle">Pizza Hut</div>
        {
          onDelete &&
          <div className="cell-item__info__action" onClick={() => onDelete()}>
            - <span>Delete</span>
          </div>
        }
      </div>
    </div>
  );
};

export default CellColumnItem;
