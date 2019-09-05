import React, { Component } from 'react';
import './ArticlePricePanel.scss';

class ArticlePricePanel extends Component {
  render() {
    return (
      <section id="section_twelve">
        <div className="article__action">
          <div className="article__action__price">U$D 12.99</div>
          <div className="article__action__time">
            <span className="button-mini">
              <i>+ 1</i>
            </span>
          </div>
          <div className="article__action__button">
            <img src="http://ali.edu.uy/img/icons/icon-cart-white.svg" alt="" />
          </div>
        </div>
      </section>
    );
  }
}

export default ArticlePricePanel;
