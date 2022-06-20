import React from "react";
import ListCardReport from "../Card/ListCardReport";
import ListCard from "../Cardcontent/ListCard"
import TabContent from "../TabContent";
import DatareportAreaChar from "../Card/DatareprtAreaChart";
import DatareportColumns from "../Card/DatareportColumns";
import CardInboxmail from "../CardInboxEmail/CardInboxmail";
import ListcardInbox from "../CardInboxEmail/ListcardInbox";
import "./dashboard.css";
import ItemTransactions from "../CardLatest/ItemTransaction";
import ListCardLatest from "../CardLatest/ListCardLatest";
import ItemOrder from "../CardLatest/ItemOrder";
import CardOrder from "../CardLatest/CarOrder";


const TabDashBoard = props => {
  const nameTab = "Dashboard";

  return (
    <>
      <div id="dashboard-page" className="container ">
        <TabContent nameTab={nameTab} />
        <div className="flex-fill m-4 ">
          <div className="row ">
            <ListCard />
            <ListCardReport />
            {/* <DatareportAreaChar/> */}
            {/* <DatareportColumns/> */}
            <ListcardInbox />
            {/* <ItemTransactions/> */}
            <div className="row">

            </div>
            {/* <ItemOrder></ItemOrder> */}
            {/* <ListCardLatest /> */}
            <CardOrder />
          </div>
        </div>

      </div>
      <div id="footer" className="">
        <p className="text-light text-center">© 2022 Lexa - Crafted with  by Themesbrand.</p>
      </div>
    </>
  );
}
export default TabDashBoard;
