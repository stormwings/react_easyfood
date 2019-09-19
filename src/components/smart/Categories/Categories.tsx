import React, { FunctionComponent, useState, useEffect } from 'react';
import './Categories.scss';

import TitlePanel from '../TitlePanel/TitlePanel';
import ArticleSquare from '../../dumb/ArticleSquare/ArticleSquare';

interface Props {
  categories: any;
  changeCategoryAction?: any;
}

export const useShowScrollCategories = () => {
  const [showFixed, setShowFixed] = useState(false);

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

  return { showFixed };
};

export const useRenderTypeOfCategories = (categories: any) => {
  const [categoryList, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // handle render categories list
  useEffect(() => {
    setLoading(true);
    // pending (put async service)
    setCategories(categories);
    setLoading(false);
  }, [categories]); // the 'effect' will be executed again, when the 'categories' props changes // If these parameters do not change, then you will not render the effect again

  return { categoryList, loading };
};

const Categories: FunctionComponent<Props> = props => {
  const { categories, changeCategoryAction } = props;

  // custom hooks
  const { showFixed } = useShowScrollCategories();
  const { categoryList, loading } = useRenderTypeOfCategories(categories);

  // render articles
  const renderList = (fixed = false) => (
    <div className={`category__list ${fixed ? 'fixed' : ''}`}>
      {categoryList &&
        categoryList.map((category: any, index: number) => (
          <ArticleSquare article={category} customAction={changeCategoryAction ? changeCategoryAction : null} key={index} />
        ))}
    </div>
  );

  if (loading) return <p>Loading...</p>;
  return (
    <section id="categories">
      <TitlePanel title={'Food Time'} subtitle={'What do you want to eat today'} fontFamily={'times'} />
      {renderList()}
      {showFixed && renderList(true)}
    </section>
  );
};

export default Categories;
