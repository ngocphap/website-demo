import React from "react";
import {UncontrolledCollapse} from "reactstrap";

const SidebarHeaderMenu=props=>{
  return (
    <div className="d-flex">
            <UncontrolledCollapse horizontal className="bg-dropdown-menu " toggler="#toggler" defaultOpen={!props.menuCollapse} >
              <div className="header-sidebar  "  >
                <div className="p-4 bg-dropdown-menu text-center justify-content-center align-content-center  ">
                  <div className="logo-sm">
                    <img src={ "/images/iconlogo.png"} height="20px;" alt="logo" />
                  </div>
                  <div className="logo-md">
                    <img src={ "/images/logo.png"} height="20px;" alt="logo" />
                  </div>
                </div>
              </div>
            </UncontrolledCollapse >
            <UncontrolledCollapse horizontal className="bg-dropdown-menu" toggler="#toggler" defaultOpen={props.menuCollapse} >
              <div className="header-sidebar-icon  "  >
                <div className="p-4 bg-dropdown-menu text-center justify-content-center align-content-center  ">
                  <div className="">
                    <img src={ "/images/iconlogo.png"} height="20px;" alt="logo" />
                  </div>
                </div>
              </div>
            </UncontrolledCollapse >
          </div>
  );
}
export default SidebarHeaderMenu;
