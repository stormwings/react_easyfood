import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import ArticleTallRectangle from '../../dumb/ArticleTallRectangle/ArticleTallRectangle';
import './ArticleList.scss';

interface Props {
  articles: any;
  history: any;
}

const ArticleList: FunctionComponent<Props & RouteComponentProps> = ({ articles, history }) => {
  const redirect: Function = (_id: string) => history.push(`/article/${_id}`);

  return (
    <section id="article_list">
      {articles && articles.map((article: any, index: number) => <ArticleTallRectangle key={index} article={article} action={redirect} />)}
    </section>
  );
};

export default withRouter(ArticleList);
