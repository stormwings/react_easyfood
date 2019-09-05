import React, { Component } from 'react';
import './DescriptionTable.scss';

class DescriptionTable extends Component {
  render() {
    return (
      <section id="section_fourteen">
        <div className="checkout__address">
          <div className="checkout__address__title">
            <p className="text">Address</p>
          </div>
          <div className="checkout__address__direction">
            <p className="text">Aguero 777</p>
          </div>
        </div>
        <hr className="hr-4" />
        <div className="checkout__delivery">
          <div className="checkout__delivery__title">
            <p className="text">Delivery Time</p>
          </div>
          <div className="checkout__delivery__time">
            <p className="text">Aprox 22 minutes</p>
          </div>
        </div>
      </section>
    );
  }
}

export default DescriptionTable;
