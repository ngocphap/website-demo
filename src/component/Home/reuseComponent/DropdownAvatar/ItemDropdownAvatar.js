import React from "react";
import { DropdownItem } from "reactstrap";
import { RiAccountCircleFill } from "react-icons/ri";
export const ItemDropdownAvatar = props => {
  return (
    <>
     {/* <div className="col-12 col-md-6 col-lg-3"> */}
      {props.listsDropdownItem.map(item => (
        <DropdownItem tag="a" href={item.linkpage} className='text-light'
          key={item.title}>
          <div className="d-flex m-0 p-0">
            <p className="mx-2 p-0 m-0">{item.icon}</p>
            <p className="p-0 m-0">{item.title}</p>
          </div>
        </DropdownItem>
      ))}
        {/* </div> */}

    </>
  );
}
