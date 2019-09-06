import React, { FunctionComponent } from 'react';
import './ArticleSquare.scss';

interface Props {
  article: any;
}

const ArticleSquare: FunctionComponent<Props> = props => {
  const {
    article: { name, image }
  } = props;

  return (
    <div id="article-square">
      <img className="article-square__image" src={image} />
      <a className="article-square__title" href="#">
        {name}
      </a>
    </div>
  );
};

export default ArticleSquare;
