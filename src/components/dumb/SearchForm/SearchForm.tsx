import React from 'react';
import './SearchForm.scss';

import SvgSearch from '../../dumb/Svg/SVGSearch';

const SearchForm = () => {
  return (
    <form id="search-form">
      <input className="search-form__input" type="search" placeholder="Chocolate Cake" />
      <button className="search-form__button" type="submit">
        <SvgSearch className="search-form__button__icon" />
      </button>
    </form>
  );
};

export default SearchForm;
