import React, { FunctionComponent } from 'react';
import './ArticleResumeList.scss';

import TitlePanel from '../TitlePanel/TitlePanel';
import CellColumnItem from '../../dumb/CellColumnItem/CellColumnItem';
import CellColumnPrice from '../../dumb/CellColumnPrice/CellColumnPrice';

interface Props {
  articles: any;
}

const ArticleResumeList: FunctionComponent<Props> = ({ articles }) => {
  return (
    <section id="article-resume-list">
      <TitlePanel title={'Resume'} subtitle={'Items'} fontBold={true} fontSize={'size-s'} />
      {articles &&
        articles.map((article: any, index: number) => (
          <div className="article-resume-list__article" key={index}>
            <CellColumnItem article={article} />
            <CellColumnPrice article={article} />
          </div>
        ))}
    </section>
  );
};

export default ArticleResumeList;
