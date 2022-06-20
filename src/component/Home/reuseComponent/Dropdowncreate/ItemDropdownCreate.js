import React from "react";
import { DropdownItem } from "reactstrap";
export const ItemDropdownCreate = props => {
  return (
    <>
     {/* <div className="col-12 col-md-6 col-lg-3"> */}
      {props.listsDropdownItem.map(item => (
        <DropdownItem className='text-light'
          key={item}
        >
          {item}
        </DropdownItem>
      ))}
      {/* </div> */}
    </>
  );
}
