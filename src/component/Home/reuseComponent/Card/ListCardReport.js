import React from "react";
import CardItem from "./CardItem";
import { Card, CardBody } from "reactstrap";
import Datareport from "./Datareport";
import DatareportAreaChar from "./DatareprtAreaChart";
import DatareportColumns from "./DatareportColumns";
const ListCardReport = () => {
  const listCards = [
    {
      titleCard: "Monthly Earnings",
      reportCard: <Datareport />,
      children: [
        {
          number: "$56241",
          title: "Marketplace"
        },
        {
          number: "$23651",
          title: "Total Income"
        }
      ]
    },
    {
      titleCard: "Email Sent",
      reportCard:
        <DatareportAreaChar />,
      children: [
        {
          number: "$ 89425",
          title: "Marketplace"
        },
        {
          number: "$ 56210",
          title: "Total Income"
        },
        {
          number: "$ 8974",
          title: "Last Month"
        }
      ]
    },
    {
      titleCard: "Monthly Earnings",
      reportCard: <DatareportColumns />,
      children: [
        {
          number: "$ 2548",
          title: "Marketplace"
        },
        {
          number: "$ 6985",
          title: "Total Income"
        },

      ]
    }
  ];
  return (
    // <div className="row">
    //   <div className="col-12 col-md-12 col-lx-4">
        <CardItem listCards={listCards} />
    //   </div>
    // </div>
  );
}
export default ListCardReport;
