import React from "react";
import { DropdownItem } from "reactstrap";
import "../header.css"


 const ItemDropdownBell = props => {
  return (
    <>
      {props.listsDropdownItem.map(item => (
        <DropdownItem tag="a" href="/home" className='text-light dropdown-item-bell'
          key={item.titleHeader}
        >
          <div className=" row  " >
            {item.icon.map(icons=>(
              <div key={icons.icon} className={`col-1 px-2 d-flex icon-card-2 ${icons.borderColor} rounded-circle align-items-center text-center justify-content-center m-2`}>
              {icons.icons}
            </div>
            ))
            }
            <div className=" col-9 ">
              <p className="text-white m-0">{item.titleHeader}</p>
              <p className="text-muted m-0 p-0 p-item">{item.content}</p>
            </div>
          </div>
        </DropdownItem>
      ))}
    </>
  );
}
export default ItemDropdownBell;
