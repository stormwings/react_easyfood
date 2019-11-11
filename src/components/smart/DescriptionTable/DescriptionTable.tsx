import React, { Component } from "react";
import CellRowTable from "../../dumb/CellRowTable/CellRowTable";
import "./DescriptionTable.scss";

interface Props {
  cells: any;
}

class DescriptionTable extends Component<Props> {
  render() {
    const { cells } = this.props;

    return (
      <section id="description-table">
        {cells &&
          cells.map((cell: any, index: any) => (
            <CellRowTable
              cell={cell}
              key={index}
              separator={true}
              totalCells={cells.length}
              numberCell={index}
            />
          ))}
      </section>
    );
  }
}

export default DescriptionTable;
