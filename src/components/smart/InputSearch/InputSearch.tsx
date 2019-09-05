import React, { Component } from 'react';
import SvgSearch from '../../dumb/Svg/SVGSearch';
import './InputSearch.scss';

class InputSearch extends Component {
  render() {
    return (
      <section id="section_two">
        <form className="search__form">
          <input className="search__form__input" type="search" placeholder="Chocolate Cake" />
          <button className="search__form__button" type="submit">
            <SvgSearch className="search__form__button__icon" />
          </button>
        </form>
      </section>
    );
  }
}

export default InputSearch;
