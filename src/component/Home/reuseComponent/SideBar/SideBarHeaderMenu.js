
import React, {  } from "react";
import {
  SidebarHeader
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
const SideBarHeaderMenu = props => {
  return (
          <SidebarHeader>
            <div className="p-4 bg-dropdown-menu text-center justify-content-center align-content-center  ">
              <div className=''>
                {
                  props.menuCollapse ?
                    (<img src={process.env.PUBLIC_URL + "images/iconlogo.png"} height="20px;" alt="" />)
                    :
                    (<img src={process.env.PUBLIC_URL + "images/logo.png"} height="20px;" alt="" />)
                }
              </div>
            </div>
          </SidebarHeader>
  );
};

export default SideBarHeaderMenu;
