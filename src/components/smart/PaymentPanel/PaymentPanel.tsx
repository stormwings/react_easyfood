import React, { Component } from 'react';
import './PaymentPanel.scss';

class PaymentPanel extends Component {
  render() {
    return (
      <section id="payment-panel">
        <div className="payment">
          <div className="payment__title">Payment</div>
          <div className="payment__card">
            <img className="payment__card__image" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="" />
            <div className="payment__card__number">1648</div>
          </div>
          <div className="payment__option">
            <button className="payment__option__change">Change</button>
          </div>
        </div>
      </section>
    );
  }
}

export default PaymentPanel;
