import React, { useState } from "react";
import Chart from "react-apexcharts";

const DatareportColumns = props => {
  const [state, setstate] = useState(
    {
      pattern: ['#546E7A', '#E91E63'],
      series: [
        {
          name: "data1",
          data: [45, 75, 100, 75, 100, 75, 50, 75, 50, 75, 100, 80],

        },
        {
          name: "data2",
          data: [180, 65, 90, 65, 90, 65, 40, 65, 40, 65, 90, 65],

        }
      ],
      options: {
        dataLabels: {

          enabled: false
        },
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10
          },
        },
        xaxis: {
          type: 'number',
          categories: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015
          ],
          labels: {
            style: {
              colors: '#fff',

            }
          },
        },
        yaxis:{
          labels: {
            style: {
              colors: '#fff',

            }
          },
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        },
        colors: ['rgb(40, 187, 227)', 'rgb(240, 241, 244)']
      }
    }
  )
  return (
    <Chart series={state.series} options={state.options} type="bar" height={350} data={state.data} />
  );
}
export default DatareportColumns;
