
import React, { useState } from "react";
import "./sidebar.css";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FiClipboard } from "react-icons/fi";
import { RiAccountPinBoxFill, RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { MdDashboard, MdEmail, MdAlbum } from "react-icons/md";
import { BsFillCalendarCheckFill, BsFillShareFill } from "react-icons/bs";
import { IoLogoBuffer } from "react-icons/io";
import { AiOutlineLineChart, AiOutlineUnorderedList } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { UncontrolledCollapse, Collapse, Button, Navbar, NavbarBrand, CardBody, Card, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, NavbarToggler } from 'reactstrap';
import ItemSidebarLeft from "./ItemSideBarLeft";
import ItemSidebarIcon from "./ItemSidebarIcon";
const SideBarCollapsedWidth = props => {

  const listMenuItem =
    [
      {
        nameMenu: "MAIN",
        children: [
          {
            isActive: true,
            bg_message: "bg-primary",
            numbermessage: 2,
            nameItemMenu: "Dashboard",
            iconItemMenu: <MdDashboard />,
            iconItemMenu2: <MdDashboard className="icon-font-size" />,
            tablink:"dashboard"
          },
          {
            isActive: false,
            nameItemMenu: "Calendar",
            iconItemMenu: <BsFillCalendarCheckFill />,
            iconItemMenu2: <BsFillCalendarCheckFill className="icon-font-size" />,
            tablink:"calendar"
          },
          {
            isActive: false,
            nameItemMenu: "Email",
            iconItemMenu: <MdEmail />,
            iconItemMenu2: <MdEmail className="icon-font-size" />,
            tablink:"",
            children: [
              {

                nameItemMenu: "Inbox",
                tablink:"inbox"

              },
              {

                nameItemMenu: "Email Read",
                tablink:"emailRead"
              },
              {

                nameItemMenu: "Email Compose",
                tablink:"emailCompose"

              }
            ]
          }
        ]
      },
      {
        nameMenu: "COMPONENTS",
        children:
          [
            {
              isActive: false,
              nameItemMenu: "UI ELements",
              iconItemMenu: <IoLogoBuffer />,
              iconItemMenu2: <IoLogoBuffer className="icon-font-size" />,
              children: [
                {

                  nameItemMenu: "Alerts",
                  tablink:"/alerts"
                },
                {

                  nameItemMenu: "Buttons",
                  tablink:"/buttons"
                },
                {

                  nameItemMenu: "Badge",
                  tablink:"/badge"
                },
                {

                  nameItemMenu: "Cards",
                  tablink:"/cards"
                },
                {

                  nameItemMenu: "Carousel",
                  tablink:"/carousel"
                },
                {

                  nameItemMenu: "Dropdowns",
                  tablink:"/dropdowns"
                },
                {

                  nameItemMenu: "Grid",
                  tablink:"/grid"
                },
                {

                  nameItemMenu: "Images",
                  tablink:"/images"
                },
                {

                  nameItemMenu: "Lightbox",
                  tablink:"/lightBox"
                },
                {

                  nameItemMenu: "Modals",
                  tablink:"/modals"
                },
                {

                  nameItemMenu: "Pagination",
                  tablink:"/pagination"
                },
                {

                  nameItemMenu: "Popover & Tooltips",
                  tablink:"/dashboard"
                },
                {

                  nameItemMenu: "Range Slider",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Session Timeout",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Progress Bars",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Sweet-Alert",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Tabs& Accordions",
                  tablink:"dashboard"

                },
                {

                  nameItemMenu: "Typography",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Video",
                  tablink:"dashboard"
                }

              ]
            },
            {

              nameItemMenu: "Forms",
              bg_message: "bg-success",
              numbermessage: 6,
              // message:<div className="badge rounded-circle bg-danger"><span >2</span></div>,
              iconItemMenu: <FiClipboard />,
              iconItemMenu2: <FiClipboard className="icon-font-size" />,
              tablink:"dashboard",
              children: [
                {

                  nameItemMenu: "Form Elements"
                },
                {

                  nameItemMenu: "Form Validation"
                },
                {

                  nameItemMenu: "Form Advanced"
                },
                {

                  nameItemMenu: "Form Editors"
                },
                {

                  nameItemMenu: "Form File Upload"
                },
                {

                  nameItemMenu: "Form Xeditable"
                }

              ]
            },
            {
              isActive: false,
              nameItemMenu: "Charts",
              iconItemMenu: <AiOutlineLineChart />,
              iconItemMenu2: <AiOutlineLineChart className="icon-font-size" />,
              tablink:"dashboard",
              children: [
                {

                  nameItemMenu: "Apex charts"
                },
                {

                  nameItemMenu: "Chartist Chart"
                },
                {

                  nameItemMenu: "Chartjs Chart"
                },
                {

                  nameItemMenu: "Sparkline Chart"
                },
                {

                  nameItemMenu: "C3 Chart"
                },
                {

                  nameItemMenu: "Jquery Knob Chart"
                }

              ]
            },
            {
              isActive: false,
              nameItemMenu: "Tables",
              iconItemMenu: <AiOutlineUnorderedList />,
              iconItemMenu2: <AiOutlineUnorderedList className="icon-font-size" />,
              tablink:"dashboard",
              children: [
                {

                  nameItemMenu: "Basic Tables",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Data Tables",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Responsive Table",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Editable Table",
                  tablink:"dashboard"
                }

              ]
            },
            {
              isActive: false,
              nameItemMenu: "Icons",
              iconItemMenu: <MdAlbum />,
              iconItemMenu2: <MdAlbum className="icon-font-size" />,
              tablink:"dashboard",
              children: [
                {

                  nameItemMenu: "Material Design",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Ion Icons",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Font Awesome",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Themify Icons",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Dripocons",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Typicpns Icons",
                  tablink:"dashboard"
                }

              ]
            },
            {
              isActive: false,
              nameItemMenu: "Maps",
              bg_message: "bg-danger",
              numbermessage: 2,
              // message: <div className="badge rounded-circle bg-danger"><span >2</span></div>,
              iconItemMenu: <FaMapMarkerAlt />,
              iconItemMenu2: <FaMapMarkerAlt className="icon-font-size" />,
              tablink:"dashboard",
              children: [
                {

                  nameItemMenu: "Google Map",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Vector Maps",
                  tablink:"dashboard"
                },
                {

                  nameItemMenu: "Leaflet Maps",
                  tablink:"dashboard"
                }
              ]
            },

          ]
      },
      {
        nameMenu: "EXTRAS",
        children: [
          {
            isActive: false,
            nameItemMenu: "Authentication",
            iconItemMenu: <RiAccountPinBoxFill />,
            iconItemMenu2: <RiAccountPinBoxFill className="icon-font-size" />,
            tablink:"dashboard",
            children: [
              {

                nameItemMenu: "Login",
                tablink:"/dashboard"
              },
              {

                nameItemMenu: "Register",
                tablink:"dashboard"
              },
              {

                nameItemMenu: "Recover Password",
                tablink:"dashboard"
              },
              {

                nameItemMenu: "Lock Screen",
                tablink:"dashboard"
              }
            ]
          },
          {
            isActive: false,
            nameItemMenu: "Extra Pages",
            iconItemMenu: <RiCheckboxMultipleBlankLine />,
            iconItemMenu2: <RiCheckboxMultipleBlankLine className="icon-font-size" />,
            tablink:"dashboard",
            children: [
              {

                nameItemMenu: "Timeline",
                tablink:"dashboard"
              },
              {

                nameItemMenu: "Invoice",
                tablink:"dashboard"
              },
              {

                nameItemMenu: "Directory",
                tablink:"dashboard"
              },
              {

                nameItemMenu: "Blank Page",
                tablink:"dashboard"
              },
              {

                nameItemMenu: "Error 404",
                tablink:"dashboard"
              },
              {

                nameItemMenu: "Error 500",
                tablink:"dashboard"
              }
            ]
          },
          {
            isActive: false,
            nameItemMenu: "Multi Level",
            iconItemMenu: <BsFillShareFill />,
            iconItemMenu2: <BsFillShareFill className="icon-font-size" />,
            tablink:"dashboard",
            children: [
              {
                nameItemMenu: "Level 1.1"
              },
              {
                nameItemMenu: "Level 1.2",
                children: [
                  {
                    nameItemMenu: "Level 2.1"
                  },
                  {
                    nameItemMenu: "Level 2.2"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  return (
    <>
      <div className="d-flex">
        <UncontrolledCollapse horizontal className="cha" toggler="#toggler" defaultOpen={!props.menuCollapse} >
          <div id="sidebar-left">
            <div className="content-sidebar">
              <div className="menu-content-sidebar">
                <ItemSidebarLeft listMenuItem={listMenuItem} ></ItemSidebarLeft>
              </div>
            </div>
          </div >
        </UncontrolledCollapse>
        <UncontrolledCollapse horizontal className="cha" toggler="#toggler" defaultOpen={props.menuCollapse} >
          <div id="iconsidebar-left">
            <div className="content-sidebar-icon">
              <div className="menu-content-sidebar">
                <ItemSidebarIcon listMenuItem={listMenuItem} ></ItemSidebarIcon>
              </div>
            </div>
          </div >
        </UncontrolledCollapse>

      </div>

    </>
  );
}

export default SideBarCollapsedWidth;
