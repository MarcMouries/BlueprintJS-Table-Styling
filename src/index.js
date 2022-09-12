import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
import { Cell, Column, Table } from "@blueprintjs/table";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.PureComponent {
  render() {
    const data = [
      { 0: "joe", 1: "smith" },
      { 0: "david", 1: "jones" },
      { 0: "suzy", 1: "jenkins" },
      { 0: "sally", 1: "miller" },
      { 0: "dan", 1: "brady" },
      { 0: "mel", 1: "harper" }
    ];
    const getCellStyle = rowIndex => {
      const cellStyle = {};
      const cellStyleBg = { backgroundColor: "lightgray" };
      if (rowIndex % 2 === 1) {
        return cellStyleBg;
      } else {
        return cellStyle;
      }
    };

    const getCellData = (rowIndex, columnIndex) => {
      return (
        <Cell style={getCellStyle(rowIndex)}>
          {data[rowIndex][columnIndex]}
        </Cell>
      );
    };

    const cell = (rowIndex, columnIndex) => getCellData(rowIndex, columnIndex);
    return (
      <div>
        <Table numRows={6}>
          <Column name="First name" cellRenderer={cell} />
          <Column name="Last name" cellRenderer={cell} />
        </Table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
