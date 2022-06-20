import React from "react";

import C3Chart from 'react-c3js';
import 'c3/c3.css';

const Datareport = props => {
  const data1 =
  {
    columns:
      [
        ['Download Sales', 50],
        ['In-Store Sales', 30],
        ['Mail-Order Sales', 20]
      ],
    type: 'donut',
  };
  const donut1 = {

    width: 30,
    title:"In-Store Sales 30",
    label: {
      show: false
    }
  }
  const color = {
    pattern: ['rgb(122, 111, 190)', 'rgb(40, 187, 227)', 'rgb(240, 241, 244)',]
  }
  return (
    <>
      <div className="text-danger">
        <C3Chart data={data1} donut={donut1} color={color} />
      </div>
    </>
  );

}
export default Datareport;
