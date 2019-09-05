import React, { Component } from 'react';
import './FeaturePanel.scss';

class FeaturePanel extends Component {
  render() {
    return (
      <section id="section_ten">
        <div className="article__action">
          <div className="article__action__feature">
            <span className="title-mini">
              <i>Offer!</i>
            </span>
          </div>
          <div className="article__action__delivery">Free Delivery</div>
          <div className="article__action__time">
            <span className="button-mini">
              <i>15m</i>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturePanel;
