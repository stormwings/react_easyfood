import React, { FunctionComponent, useState, useEffect } from 'react';
import './Categories.scss';

import TitlePanel from '../TitlePanel/TitlePanel';
import ArticleSquare from '../../dumb/ArticleSquare/ArticleSquare';

interface Props {
  categories: any;
}

const Categories: FunctionComponent<Props> = ({ categories }) => {
  const [categoryList, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  // handle render categories list
  useEffect(() => {
    // async service
    setCategories(categories);
  }, []); // to stop on the first execution

  // handle render categories list when scrolls down
  useEffect(() => {
    const onScroll = (e: any) => {
      // check if scroll position is '>180px', get boolean
      const newShowFixed = window.scrollY > 180;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    // add function to 'scroll' event
    document.addEventListener('scroll', onScroll);
    // return a function that remove the eventListener
    // this prevents 're-render overwritting' of same events
    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]); // to stop when showFixed changes

  const renderList = (fixed = false) => (
    <div className={`category__list ${fixed ? 'fixed' : ''}`}>
      {categoryList && categoryList.map((category: any, index: number) => <ArticleSquare article={category} key={index} />)}
    </div>
  );

  return (
    <section id="categories">
      <TitlePanel title={'Food Time'} subtitle={'What do you want to eat today'} fontFamily={'times'} />
      {renderList()}
      {showFixed && renderList(true)}
    </section>
  );
};

export default Categories;
