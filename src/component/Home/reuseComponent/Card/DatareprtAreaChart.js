import React from "react";

import Chart from "react-apexcharts";
import { useState } from "react";


const DatareportAreaChar = props => {
  const [state, setstate] = useState(
    {

      series: [
        {
          name: 'series1',
          data: [0, 20, 190, 30, 42, 100, 10]
        },
        {
          name: 'series2',
          data: [0, 60, 170, 40, 34, 52, 10]
        },
        {
          name: 'series3',
          data: [0, 170, 70, 180, 34, 51, 10]
        }
      ],
      options: {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'number',
          categories: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],
          labels: {
            style: {
              colors: '#fff',

            }
          },

        },
        yaxis: {
          labels: {
            style: {
              colors: '#fff',
            }
          },

        },
        chart: {
          toolbar: {
            show: false
          }
        },
        colors:['rgb(40, 187, 227)','rgb(240, 241, 244)', 'rgb(122, 111, 190)', ]
      }
    }
  )
  return (
    <Chart series={state.series} options={state.options} type="area" height={350} data={state.data} />
  );
}
export default DatareportAreaChar;
