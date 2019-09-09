import React, { Component } from 'react';
import './HeroImage.scss';

interface Props {
  image: any;
  title: any;
}

class HeroImage extends Component<Props> {
  render() {
    const { image, title } = this.props;

    return (
      <section id="hero-image">
        <div className="image__container">
          <img className="image__container__image" src={image} alt={title} />
        </div>
      </section>
    );
  }
}

export default HeroImage;
