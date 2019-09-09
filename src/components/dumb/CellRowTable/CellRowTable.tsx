import React, { Fragment, FunctionComponent } from 'react';
import './CellRowTable.scss';

import Separator from '../Separator/Separator';

interface Props {
  totalCells?: any;
  numberCell?: any;
}
interface CellRowTableProps {
  key: any;
  cell: any;
  separator: boolean;
  cellsizey?: string;
}

// show all separators except the last one
const CellSeparator: FunctionComponent<Props> = ({ totalCells, numberCell }: any) =>
  totalCells !== numberCell + 1 ? <Separator marginTop={15} marginBottom={15} /> : <div />;

const CellRowTable: FunctionComponent<Props & CellRowTableProps> = ({ cell, totalCells, numberCell, separator, cellsizey }: any) => {
  return (
    <Fragment>
      <div className={`cell-table ${cellsizey ? cellsizey : ''}`}>
        <div className="cell-table__title">
          <p className="text">{cell.info}</p>
        </div>
        <div className="cell-table__direction">
          <p className="text">{cell.value}</p>
        </div>
      </div>
      {separator && <CellSeparator totalCells={totalCells} numberCell={numberCell} />}
    </Fragment>
  );
};

export default CellRowTable;
