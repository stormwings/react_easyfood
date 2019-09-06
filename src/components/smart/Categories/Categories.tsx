import React, { FunctionComponent } from 'react';
import './Categories.scss';

import TitlePanel from '../TitlePanel/TitlePanel';
import ArticleSquare from '../../dumb/ArticleSquare/ArticleSquare';

interface Props {
  categories: any;
}

const Categories: FunctionComponent<Props> = ({ categories }) => {
  return (
    <section id="categories">
      <TitlePanel title={'Food Time'} subtitle={'What do you want to eat today'} fontFamily={'times'} />
      <div className="category__list">
        {categories && categories.map((category: any, index: number) => <ArticleSquare article={category} key={index} />)}
      </div>
    </section>
  );
};

export default Categories;
