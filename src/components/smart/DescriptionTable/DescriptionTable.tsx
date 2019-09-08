import React, { Component } from 'react';
import CellRowTable from '../../dumb/CellRowTable/CellRowTable';
import './DescriptionTable.scss';

class DescriptionTable extends Component {
  render() {
    const cells = [
      {
        info: 'Address',
        value: 'Aguero 777'
      },
      {
        info: 'Delivery Time',
        value: 'Aprox 22 minutes'
      }
    ];

    return (
      <section id="description-table">
        {cells &&
          cells.map((cell: any, index: any) => (
            <CellRowTable cell={cell} key={index} separator={true} totalCells={cells.length} numberCell={index} />
          ))}
      </section>
    );
  }
}

export default DescriptionTable;
