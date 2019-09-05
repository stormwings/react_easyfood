import React, { Component } from 'react';
import './PricesTable.scss';

class PricesTable extends Component {
  render() {
    return (
      <section id="section_seventeen">
        <div className="confirm__payment">
          <div className="confirm__payment__column">
            <div className="confirm__payment__column__title">Product Cost</div>
            <div className="confirm__payment__column__value">$5,25</div>
          </div>
          <div className="confirm__payment__column">
            <div className="confirm__payment__column__title">Delivery</div>
            <div className="confirm__payment__column__value">$0.50</div>
          </div>
          <div className="confirm__payment__column">
            <div className="confirm__payment__column__title">Bill</div>
            <div className="confirm__payment__column__value">$0.10</div>
          </div>
          <div className="confirm__payment__column">
            <div className="confirm__payment__column__title">Discount</div>
            <div className="confirm__payment__column__value discount">$-1,00</div>
          </div>
          <hr className="hr-14" />
          <div className="confirm__payment__column">
            <div className="confirm__payment__column__title">Total</div>
            <div className="confirm__payment__column__value">$4,85</div>
          </div>
        </div>
      </section>
    );
  }
}

export default PricesTable;
