import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import { RiAccountCircleFill } from "react-icons/ri";
import { BiWalletAlt } from "react-icons/bi";
import { IoMdSettings, IoMdUnlock } from "react-icons/io";
import{CgLogOff}from "react-icons/cg";
import { ItemDropdownAvatar } from "./ItemDropdownAvatar";
const ListDropdownAvatar = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const listsDropdownItem =
    [
      {
        icon: <RiAccountCircleFill />,
        title: "Profile",
        linkpage: "/profile"
      },
      {
        icon: <BiWalletAlt />,
        title: "My Wallet",
        linkpage: "/wallet"
      },
      {
        icon: <IoMdSettings />,
        title: "Settings",
        linkpage: "/setting"
      },
      {
        icon: <IoMdUnlock />,
        title: "Lock screen",
        linkpage: "/locked"
      }
    ];
  return (
    <>
      {
        <Dropdown isOpen={dropdownOpen} toggle={toggle} >
          <DropdownToggle className=' btn-menu' >
            <Button className='btn-menu center-1 px-2'>
              <img className='img-avater rounded-circle' src="/images/avatar.jpg" alt="avatar" />
            </Button>
          </DropdownToggle>
          <DropdownMenu end className='bg-dropdown-menu position-dropdown-menu' >
            <ItemDropdownAvatar listsDropdownItem={listsDropdownItem} />
            <DropdownItem divider />
            <DropdownItem tag="a" href="/login" className='text-light'>
              <div className="d-flex">
                  <p className="px-2 m-0"><CgLogOff className=""/></p>
                  <p className=" text-danger">Logout</p>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      }

    </>

  );
}
export default ListDropdownAvatar;
