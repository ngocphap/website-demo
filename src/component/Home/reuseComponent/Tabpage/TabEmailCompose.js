import React from "react";
import TabContent from "../TabContent";
import ListCard from "../Cardcontent/ListCard"

const TabEmailCompose = props => {
  const nameTab = "Email Compose";
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
export default TabEmailCompose;
