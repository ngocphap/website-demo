import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { NavLink as Link } from "react-router-dom";
import { Collapse, Nav, NavItem, NavLink, Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import Login from "../../../Login/Login";
import TabDashBoard from "../TabDashboard/TabDashboard";
const ItemSidebarLeft = props => {
  const [openItem, setOpenItem] = useState("");
  const [openItem1, setOpenItem1] = useState("");
  var [isactive, setisactive] = useState(false);
  const menuIconClick = (item) => {

    if (item !== openItem) {

      setOpenItem(item);

    }
    else {

      setOpenItem("");
    }

  };
  const menuIconClick1 = (item) => {
    if (item !== openItem1)
      setOpenItem1(item);
    else
      setOpenItem1("");

  };
  return (
    <>
      {props.listMenuItem.map(item => (
        <Nav className="menu" vertical>
          <div className="title-menu"><p className="px-3 text-muted">{item.nameMenu}</p></div>
          {item.children.map(items => (
            // <Link to={items.tablink}>
            <NavItem key={items.nameItemMenu} className={` py-2 item-menu`}   >
              <Link onClick={() => menuIconClick(items.nameItemMenu)} to={items.tablink || '#'} className={` text-decoration-none`}>
                <NavLink className={`${openItem === items.nameItemMenu && 'active'} item-link text-muted d-flex justify-content-between `}  >
                  <div className="d-flex m-0 p-0 ">
                    <span className="mx-3 m-0 p-0">{items.iconItemMenu}</span>
                    <p className=" m-0 p-0">{items.nameItemMenu}</p>
                  </div>
                  {
                    items.numbermessage ?
                      (items.numbermessage && (<div className={`badge rounded-circle ${items.bg_message}`}><span>{items.numbermessage}</span></div>)) :
                      (items.children && (<span className="m-0 p-0 d-flex justify-content-end align-content-end text-end"><BiChevronDown /></span>))
                  }
                </NavLink>
              </Link>

              {items.children && items.children.length && (
                <Collapse isOpen={openItem === items.nameItemMenu} >
                  <Nav className=" text-muted" navbar>
                    {
                      items.children.map(itemss => (
                        <NavItem className=" ps-5 item-submenu">
                          <Link onClick={() => menuIconClick1(itemss.nameItemMenu)} to={itemss.tablink||"#"} className="text-decoration-none">
                          <NavLink   className=" item-linksub text-muted"   >
                            <div className="d-flex justify-content-between">
                              <p className="p-0 m-0"> {itemss.nameItemMenu}</p>
                              {itemss.children && <span className="  px-2 d-flex justify-content-end align-content-end text-end"><BiChevronDown /></span>}
                            </div>
                            </NavLink>
                          </Link>
                            {itemss.children && itemss.children.length && (
                              <Collapse isOpen={itemss.nameItemMenu === openItem1} className="my-2">
                                <Nav className="ps-3 text-muted" navbar>
                                  {itemss.children.map(itemsss => (
                                    <>
                                      <NavItem>{itemsss.nameItemMenu}</NavItem>
                                    </>
                                  ))}
                                </Nav>
                              </Collapse>)}

                        </NavItem>
                      ))
                    }
                  </Nav>
                </Collapse>
              )}
            </NavItem>
            // </Link>

          ))}
        </Nav>
      ))}
    </>
  );
}
export default ItemSidebarLeft;
