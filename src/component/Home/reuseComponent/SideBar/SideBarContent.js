//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
} from "react-pro-sidebar";

//import icons from react icons
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiClipboard } from "react-icons/fi";
import { RiAccountPinBoxFill, RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { MdDashboard, MdEmail, MdAlbum } from "react-icons/md";
import { BsFillCalendarCheckFill, BsFillShareFill } from "react-icons/bs";
import { IoLogoBuffer } from "react-icons/io";
import { AiOutlineLineChart, AiOutlineUnorderedList } from "react-icons/ai";
//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import SideBarHeaderMenu from "./SideBarHeaderMenu";
import SubMenuItemMenu from "./SubMenuItemMenu";
const SideBarContent = props => {
  const [isopen, setisopen] = useState(false);
  const clickhanlopen =() => {
    console.log(isopen);
    if (isopen) {
      setisopen(true);
    }
    else {
      setisopen(false);
    }

  }

  const listMenuItem =
    [
      {
        nameMenu: "MAIN",
        children: [
          {
            isSubmenu: false,
            bg_message: "bg-primary",
            numbermessage: 2,
            nameItemMenu: "Dashboard",
            iconItemMenu: <MdDashboard />,
            iconItemMenu2: <MdDashboard className="icon-font-size" />
          },
          {
            isSubmenu: false,
            nameItemMenu: "Calendar",
            iconItemMenu: <BsFillCalendarCheckFill />,
            iconItemMenu2: <BsFillCalendarCheckFill className="icon-font-size" />
          },
          {
            isSubmenu: true,
            nameItemMenu: "Email",
            iconItemMenu: <MdEmail />,
            iconItemMenu2: <MdEmail className="icon-font-size" />,
            children: [
              {
                isSubmenu: false,
                nameItemMenu: "Inbox"
              },
              {
                isSubmenu: false,
                nameItemMenu: "Email Read"
              },
              {
                isSubmenu: false,
                nameItemMenu: "Email Compose"
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
              isSubmenu: true,
              nameItemMenu: "UI ELements",
              iconItemMenu: <IoLogoBuffer />,
              iconItemMenu2: <IoLogoBuffer className="icon-font-size" />,
              children: [
                {
                  isSubmenu: false,
                  nameItemMenu: "Alerts"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Buttons"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Badge"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Cards"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Carousel"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Dropdowns"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Grid"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Images"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Lightbox"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Modals"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Pagination"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Popover & Tooltips"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Range Slider"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Session Timeout"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Progress Bars"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Sweet-Alert"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Tabs& Accordions"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Typography"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Video"
                }

              ]
            },
            {
              isSubmenu: true,
              nameItemMenu: "Forms",
              bg_message: "bg-success",
              numbermessage: 6,
              // message:<div className="badge rounded-circle bg-danger"><span >2</span></div>,
              iconItemMenu: <FiClipboard />,
              iconItemMenu2: <FiClipboard className="icon-font-size" />,
              children: [
                {
                  isSubmenu: false,
                  nameItemMenu: "Form Elements"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Form Validation"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Form Advanced"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Form Editors"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Form File Upload"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Form Xeditable"
                }

              ]
            },
            {
              isSubmenu: true,
              nameItemMenu: "Charts",
              iconItemMenu: <AiOutlineLineChart />,
              iconItemMenu2: <AiOutlineLineChart className="icon-font-size" />,
              children: [
                {
                  isSubmenu: false,
                  nameItemMenu: "Apex charts"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Chartist Chart"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Chartjs Chart"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Sparkline Chart"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "C3 Chart"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Jquery Knob Chart"
                }

              ]
            },
            {
              isSubmenu: true,
              nameItemMenu: "Tables",
              iconItemMenu: <AiOutlineUnorderedList />,
              iconItemMenu2: <AiOutlineUnorderedList className="icon-font-size" />,
              children: [
                {
                  isSubmenu: false,
                  nameItemMenu: "Basic Tables"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Data Tables"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Responsive Table"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Editable Table"
                }

              ]
            },
            {
              isSubmenu: true,
              nameItemMenu: "Icons",
              iconItemMenu: <MdAlbum />,
              iconItemMenu2: <MdAlbum className="icon-font-size" />,
              children: [
                {
                  isSubmenu: false,
                  nameItemMenu: "Material Design"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Ion Icons"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Font Awesome"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Themify Icons"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Dripocons"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Typicpns Icons"
                }

              ]
            },
            {
              isSubmenu: true,
              nameItemMenu: "Maps",
              bg_message: "bg-danger",
              numbermessage: 2,
              // message: <div className="badge rounded-circle bg-danger"><span >2</span></div>,
              iconItemMenu: <FaMapMarkerAlt />,
              iconItemMenu2: <FaMapMarkerAlt className="icon-font-size" />,
              children: [
                {
                  isSubmenu: false,
                  nameItemMenu: "Google Map"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Vector Maps"
                },
                {
                  isSubmenu: false,
                  nameItemMenu: "Leaflet Maps"
                }
              ]
            },

          ]
      },
      {
        nameMenu: "EXTRAS",
        children: [
          {
            isSubmenu: true,
            nameItemMenu: "Authentication",
            iconItemMenu: <RiAccountPinBoxFill />,
            iconItemMenu2: <RiAccountPinBoxFill className="icon-font-size" />,
            children: [
              {
                isSubmenu: false,
                nameItemMenu: "Login"
              },
              {
                isSubmenu: false,
                nameItemMenu: "Register"
              },
              {
                isSubmenu: false,
                nameItemMenu: "Recover Password"
              },
              {
                isSubmenu: false,
                nameItemMenu: "Lock Screen"
              }
            ]
          },
          {
            isSubmenu: true,
            nameItemMenu: "Extra Pages",
            iconItemMenu: <RiCheckboxMultipleBlankLine />,
            iconItemMenu2: <RiCheckboxMultipleBlankLine className="icon-font-size" />,
            children: [
              {
                isSubmenu: false,
                nameItemMenu: "Timeline"
              },
              {
                isSubmenu: false,
                nameItemMenu: "Invoice"
              },
              {
                isSubmenu: false,
                nameItemMenu: "Directory"
              },
              {
                isSubmenu: false,
                nameItemMenu: "Blank Page"
              },
              {
                isSubmenu: false,
                nameItemMenu: "Error 404"
              },
              {
                isSubmenu: false,
                nameItemMenu: "Error 500"
              }
            ]
          },
          {
            isSubmenu: true,
            nameItemMenu: "Multi Level",
            iconItemMenu: <BsFillShareFill />,
            iconItemMenu2: <BsFillShareFill className="icon-font-size" />,
            children: [
              {
                isSubmenu: false,
                nameItemMenu: "Level 1.1"
              },
              {
                isSubmenu: true,
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
    <div id="sidebar-menu" className="d-flex justify-content-center">
      <div className="">
        <ProSidebar collapsed={props.menuCollapse}  >
          <SideBarHeaderMenu className="" menuCollapse={props.menuCollapse}></SideBarHeaderMenu>
          <SubMenuItemMenu clickhanlopen={clickhanlopen} listMenuItem={listMenuItem} menuCollapse={props.menuCollapse} />
        </ProSidebar>
      </div>
    </div>
  );
};
export default SideBarContent;
