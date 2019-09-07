import React, { FunctionComponent } from 'react';
import './ArticleSquare.scss';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props {
  article: any;
  history: any;
}

const ArticleSquare: FunctionComponent<Props & RouteComponentProps> = ({ article, history }) => {
  const { name, image }: any = article;
  const redirect = (url: string) => history.push(url);

  return (
    <div id="article-square" onClick={() => redirect(`/category/${name.toLowerCase()}`)}>
      <img className="article-square__image" src={image} alt="article" />
      <div className="article-square__title">{name}</div>
    </div>
  );
};

export default withRouter(ArticleSquare);
