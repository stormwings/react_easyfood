import React, { Component } from 'react';
import './ArticleTitle.scss';

import TitlePanel from '../TitlePanel/TitlePanel';
import Score from '../../dumb/Score/Score';

interface Props {
  title: any;
  score: any;
  info: any;
  fontFamily: any;
}

class ArticleTitle extends Component<Props> {
  render() {
    const { title, score, info, fontFamily } = this.props;

    return (
      <section id="article-title">
        <div className="article-title">
          <TitlePanel title={title} subtitle={info} fontFamily={fontFamily} />
          <div className="article-title__review">
            <Score numberScore={score} elementSize={25} />
          </div>
        </div>
      </section>
    );
  }
}

export default ArticleTitle;
