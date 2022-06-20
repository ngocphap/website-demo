import React from "react";
import TabContent from "../TabContent";
import ListCard from "../Cardcontent/ListCard"

const TabInbox = props => {
  const nameTab = "Inbox";
  const nameMenuSub="Email"
  return (
    <>
      <div className="container">
        <TabContent nameTab={nameTab} nameMenuSub={nameMenuSub}></TabContent>
        <div className="flex-fill m-4 ">
          <div className="row ">
            <ListCard />
          </div>
        </div>
      </div>
    </>
  );
}
export default TabInbox;
