import React, { FunctionComponent } from 'react';
import './Trendings.scss';

import TitlePanel from '../TitlePanel/TitlePanel';
import ArticleTallRectangle from '../../dumb/ArticleTallRectangle/ArticleTallRectangle';

interface Props {
  trendings: any;
  redirection: any;
}

const Trendings: FunctionComponent<Props> = ({ trendings, redirection }) => {
  return (
    <section id="trendings">
      <TitlePanel title={'Trending'} redirection={redirection} fontBold={true} />
      <div className="trendings__list">
        {trendings && trendings.map((article: any, index: number) => <ArticleTallRectangle article={article} key={index} />)}
      </div>
    </section>
  );
};

export default Trendings;
