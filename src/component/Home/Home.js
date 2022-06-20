import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HeaderHome from "./reuseComponent/HeaderHome";
import ListCard from "./reuseComponent/Cardcontent/ListCard";
import TabContent from "./reuseComponent/TabContent";
import SideBarContent from "./reuseComponent/SideBar/SideBarContent";
import React, { useState } from "react";

// import ListCard from "./reuseComponent/Cardcontent/ListCard";
import TabDashBoard from "./reuseComponent/TabDashboard/TabDashboard";
import TabCalendar from "./reuseComponent/TabCalendar/TabCalendar";
import 'react-pro-sidebar/dist/css/styles.css';
import SideBarCollapsedWidth from "./reuseComponent/SidebarLeft/SidebarMenuComponent";
import TabInbox from "./reuseComponent/Tabpage/TabInbox";
import TabEmailCompose from "./reuseComponent/Tabpage/TabEmailCompose";
import TabEmailRead from "./reuseComponent/Tabpage/TabEmailRead";
const Home = props => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)
  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
      <div className="container-fluid " id="app-master">
        <div className=" d-flex">
          <div className="container-fluid p-0 ">
            <div className="row ">
              <div className="col-md-12 position-fixed " id="header-master">
                <HeaderHome menuIconClick={menuIconClick} ></HeaderHome>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-md-12  d-flex " id="page-master">
                <div id="page-top-bar" className="p-0 m-0  ">
                  <SideBarCollapsedWidth />
                  {/* <SideBarContent className="sidebar-content" menuCollapse={menuCollapse} /> */}
                </div>
                <div className="flex-fill m-4 " id="conten-maxter">
                  <div className="row ">
                    <Routes>
                      <Route path="dashboard" element={<TabDashBoard />}></Route>
                      <Route path="calendar" element={<TabCalendar />}></Route>
                      <Route path="inbox" element={<TabInbox />}></Route>
                      <Route path="emailCompose" element={<TabEmailCompose />}></Route>
                      <Route path="emailRead" element={<TabEmailRead />}></Route>
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
