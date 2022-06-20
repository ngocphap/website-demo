import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { BiChevronDown } from "react-icons/bi";
import { ItemDropdownLanguage } from "./ItemDropdownLanguage";
const ListIteamLanguage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const listsDropdownItem =
    [
      {
        language: "Spanish",
        urlImage: "/images/Spanish.jpg"
      },
      {
        language: "German",
        urlImage: "/images/German.jpg"
      },
      {
        language: "Italian",
        urlImage: "/images/Italian.jpg"
      },
      {
        language: "Russian",
        urlImage: "/images/Russian.jpg"
      },
      {
        language: "English",
        urlImage: "/images/English.jpg"
      }
    ];
  const [valueDropdownMenu, setValueDropdownMenu] = useState({
    language: "English",
    urlImage: "/images/English.jpg"
  });
  const hanldClickLanguage = (_language, ev) => {
    console.log(_language, ev);
    setValueDropdownMenu(_language);
  }
  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} >
        <DropdownToggle className=' btn-menu ' >
          <div className='btn-menu d-flex align-content-center text-center justify-content-center'>
            <div className='px-2'>
              <img className=" " src={process.env.PUBLIC_URL + valueDropdownMenu.urlImage} height="16px;" alt="" />
            </div>
            <p className='text-light m-0 '>  {valueDropdownMenu.language}</p>
            <span><BiChevronDown /></span>
          </div>
        </DropdownToggle>
        <DropdownMenu end className='bg-dropdown-menu position-dropdown-menu' >
          <ItemDropdownLanguage
            hanldClickLanguage={hanldClickLanguage}
            listsDropdownItem={listsDropdownItem}
          />
        </DropdownMenu>
      </Dropdown>
    </>

  );
}
export default ListIteamLanguage;
