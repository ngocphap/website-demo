import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { ItemDropdownCreate } from "./ItemDropdownCreate";
const ListDropdownItem = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const ListDropdownMenu =
  {
    listsDropdownItem: ["Action", "Another action", "Something else here"],
    isdivider: true,
    nameDividerDropdownItem: "Separatedlink",
    nameDropdownMenu: "Create"
  };
  return (
    <>
      {
        <Dropdown isOpen={dropdownOpen} toggle={toggle} >
          <DropdownToggle className=' bg-btncreate' > {ListDropdownMenu.nameDropdownMenu}</DropdownToggle>
          <DropdownMenu end className='bg-dropdown-menu position-dropdown-menu' >

            <ItemDropdownCreate listsDropdownItem={ListDropdownMenu.listsDropdownItem} />
            {ListDropdownMenu.isdivider && <DropdownItem divider />}
            <DropdownItem className='text-light'>{ListDropdownMenu.nameDividerDropdownItem}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      }

    </>

  );
}
export default ListDropdownItem;
