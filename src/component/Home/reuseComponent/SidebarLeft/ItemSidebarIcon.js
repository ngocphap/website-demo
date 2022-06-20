import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const ItemSidebarIcon = props => {
  const [openItem, setOpenItem] = useState(null);
  const menuIconClick = (item) => {
    if (item !== openItem) {
      setOpenItem(item);
    }
    else {
      setOpenItem(null);
    }
  };
  return (
    <>
      {props.listMenuItem.map(item => (
        <Nav className="menu py-2"  vertical>
          {item.children.map(items => (
            <Dropdown className="dropdown py-2">
              <NavLink href="#" onClick={() => menuIconClick(items.nameItemMenu)}className={`${items.nameItemMenu === openItem && 'active'} item-link text-muted d-flex justify-content-between `} >
                <div className="d-flex m-0 p-0">
                  <span className=" m-0 p-0">{items.iconItemMenu2}</span>
                </div>
              </NavLink>
              <DropdownMenu className=" dropdown-menu1  " navbar>
                <DropdownItem header className=" text-light">{items.nameItemMenu}</DropdownItem>
                {
                  items.children?.map(itemss => (
                    <DropdownItem className=" text-muted ms-2">{itemss.nameItemMenu}</DropdownItem>
                  ))
                }
              </DropdownMenu>
            </Dropdown>
          ))}
        </Nav>
      ))}

    </>
  );
}
export default ItemSidebarIcon;
