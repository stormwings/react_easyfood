import React, { Component } from 'react';
import './TotalCostTable.scss';
import CellRowTable from '../../dumb/CellRowTable/CellRowTable';
import Separator from '../../dumb/Separator/Separator';

class TotalCostTable extends Component {
  render() {
    const cells = [
      {
        info: 'Product Cost',
        value: '$5,25'
      },
      {
        info: 'Delivery',
        value: '$0.50'
      },
      {
        info: 'Bill',
        value: '$0.10'
      },
      {
        info: 'Discount',
        value: '$-1,00'
      }
    ];
    return (
      <section id="total-cost-table">
        <div className="confirm__payment">
          {cells && cells.map((cell: any, index: any) => <CellRowTable cell={cell} key={index} separator={false} cellsizey={'small'} />)}
          <Separator marginTop={25} marginBottom={5} />
          <CellRowTable cell={{ info: 'Total', value: '4,85' }} key={1} separator={false} cellsizey={'small'} />
        </div>
      </section>
    );
  }
}

export default TotalCostTable;
