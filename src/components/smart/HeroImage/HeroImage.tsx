import React, { Component } from 'react';
import JpgPizzaExample from './pizza.jpeg';
import './HeroImage.scss';

class HeroImage extends Component {
  render() {
    return (
      <section id="section_eight_nine">
        <div className="article__image">
          <img src={JpgPizzaExample} />
        </div>
      </section>
    );
  }
}

export default HeroImage;
