import React, { FunctionComponent } from 'react';
import './ArticleSquare.scss';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props {
  article: any;
  history: any;
}

const ArticleSquare: FunctionComponent<Props & RouteComponentProps> = ({ article, history }) => {
  const { strCategory, strCategoryThumb }: any = article;
  const redirect = (url: string) => history.push(url);

  return (
    <div id="article-square" onClick={() => redirect(`/category/${strCategory.toLowerCase()}`)}>
      <img className="article-square__image" src={strCategoryThumb} alt="article" />
      <div className="article-square__title">{strCategory}</div>
    </div>
  );
};

export default withRouter(ArticleSquare);
