import React, { Component } from 'react';
import './ConfirmPanel.scss';

class ConfirmPanel extends Component {
  render() {
    return (
      <section id="section_eightteen">
        <button className="button__confirm" type="button">
          <span className="button__confirm__text">Confirm Order</span>
        </button>
      </section>
    );
  }
}

export default ConfirmPanel;
