import React, { Component } from 'react';
import './TitleResult.scss';

class TitleResult extends Component {
  render() {
    return (
      <section id="section_seven_eight">
        <div className="search__result__header">
          <h2 className="search__result__header__title">Pizza</h2>
          <p className="search__result__header__subtitle">5,521 results</p>
        </div>
      </section>
    );
  }
}

export default TitleResult;
