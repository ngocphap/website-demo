import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ItemDropdownBell  from "./ItemDropdownBell";
import { AiOutlineBell, AiOutlineShoppingCart } from "react-icons/ai";
import { BiMessageAlt } from "react-icons/bi";
import { FaCocktail } from "react-icons/fa";
import { RiArrowRightCircleFill } from "react-icons/ri";
const ListDropdownBell = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const listsDropdownItem =
    [
      {
        icon: [
          {
            icons: <AiOutlineShoppingCart />,
            borderColor: "border-success "
          },
        ],
        titleHeader: "Your order is placed",
        content: "If several languages coalesce the grammar"
      },
      {
        icon: [
          {
            icons: <BiMessageAlt />,
            borderColor: "border-warning  "
          },
        ],
        titleHeader: "New Message received",
        content: "You have 87 unread messages"
      },
      {
        icon: [
          {
            icons: <FaCocktail />,
            borderColor: "border-info"
          },
        ],

        titleHeader: "Your item is shipped",
        content: "It is a long established fact that a reader will"
      },
      {
        icon: [
          {
            icons: <AiOutlineShoppingCart />,
            borderColor: "border-primary  "
          },
        ],

        titleHeader: "Your order is placed",
        content: "Dummy text of the printing and typesetting industry."
      },
      {
        icon: [
          {
            icons: <BiMessageAlt />,
            borderColor: "border-warning  "
          },
        ],

        titleHeader: "New Message received",
        content: "You have 87 unread messages"
      }

    ];
    var [count,setCount]=useState(0);
    const countMessage=(e)=>{
      count =e.listsDropdownItem.length;
      setCount(count)
      // console.log(count);
    }
  return (
    <>
      {
        <Dropdown isOpen={dropdownOpen} toggle={toggle} >
          <DropdownToggle className='btn-menu' >
            <div className="icon-bell">
              <div className='btn-menu '>
                <AiOutlineBell className="h3"/>
              </div>
              <div className="message-icon rounded-circle bg-danger d-flex text-center justify-content-center align-items-center p-1 ">
                <span>3{countMessage}</span>
              </div>
            </div>

          </DropdownToggle>
          <DropdownMenu end className='bg-dropdown-menu position-dropdown-menu ' >
            <DropdownItem header>Notifications (258)</DropdownItem>
            <div className="dropdown-menu-bell scrollbar scrollbar-primary">
              <ItemDropdownBell className=""
                listsDropdownItem={listsDropdownItem} />
            </div>
            <DropdownItem divider />
            <div className='view-all text-light d-flex justify-content-center'>
              <a href="/" className="d-flex text-decoration-none text-primary">
                <span><RiArrowRightCircleFill /></span>
                <p>View all</p>
              </a>
            </div>
          </DropdownMenu>
        </Dropdown>
      }

    </>

  );
}
export default ListDropdownBell;
