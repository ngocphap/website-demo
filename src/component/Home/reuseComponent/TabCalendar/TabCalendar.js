import React from "react";
import TabContent from "../TabContent";
import ListCard from "../Cardcontent/ListCard"

const TabCalendar = props => {
  const nameTab = "Calendar"
  return (
    <>
      <div className="container">
        <TabContent nameTab={nameTab}></TabContent>
        <div className="flex-fill m-4 ">
          <div className="row ">
            <ListCard />
          </div>
        </div>
      </div>
    </>
  );
}
export default TabCalendar;
