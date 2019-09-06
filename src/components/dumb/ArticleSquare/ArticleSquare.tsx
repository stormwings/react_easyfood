import React, { FunctionComponent } from 'react';
import './ArticleSquare.scss';
import { Link } from 'react-router-dom';

interface Props {
  article: any;
}

const ArticleSquare: FunctionComponent<Props> = props => {
  const {
    article: { name, image }
  } = props;

  return (
    <div id="article-square">
      <img className="article-square__image" src={image} alt="article" />
      <Link to="/link">
        <div className="article-square__title">{name}</div>
      </Link>
    </div>
  );
};

export default ArticleSquare;
