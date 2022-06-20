import React from "react";
import { DropdownItem } from "reactstrap";
export const ItemDropdownLanguage = props => {
  return (
    <>
      {props.listsDropdownItem.map(item => (
        <DropdownItem className='text-light'
          key={item.language}

          onClick={(ev) => props.hanldClickLanguage(item, ev)}
        >
          <div className=' d-flex '>
            <div className='px-2'>
              <img className=" " src={ item.urlImage} height="16px;" alt="" />
            </div>
            <p className='text-light m-0 '>{item.language}</p>
          </div>
        </DropdownItem>
      ))}
     <div className="col-12 col-md-6 col-lg-3"></div>

    </>
  );
}
