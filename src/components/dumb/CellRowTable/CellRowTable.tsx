import React, { Fragment, FunctionComponent } from 'react';
import './CellRowTable.scss';

interface Props {
  totalCells?: any;
  numberCell?: any;
}
interface CellRowTableProps {
  key: any;
  cell: any;
  separator: boolean;
  cellSizeY?: string;
}

// show all separators except the last one
const Separator: FunctionComponent<Props> = ({ totalCells, numberCell }: any) =>
  totalCells !== numberCell + 1 ? <hr className="hr-14" /> : <div />;

const CellRowTable: FunctionComponent<Props & CellRowTableProps> = ({ cell, totalCells, numberCell, separator, cellSizeY }: any) => {
  return (
    <Fragment>
      <div className={`cell-table ${cellSizeY ? cellSizeY : ''}`}>
        <div className="cell-table__title">
          <p className="text">{cell.info}</p>
        </div>
        <div className="cell-table__direction">
          <p className="text">{cell.value}</p>
        </div>
      </div>
      {separator && <Separator totalCells={totalCells} numberCell={numberCell} />}
    </Fragment>
  );
};

export default CellRowTable;
