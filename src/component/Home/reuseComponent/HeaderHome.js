import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiThMenu } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BiFullscreen } from "react-icons/bi";
import { Button, Input, Label, Form, UncontrolledCollapse } from 'reactstrap';
import ListDropdownAvatar from './DropdownAvatar/ListDropdownAvatar';
import "./header.css";

import ListDropdownItem from './Dropdowncreate/ListDropdownItem';
import ListIteamLanguage from './DropdownLanguage/ListIteamLanguage';
import ListDropdownBell from './DropdownMenuBell/ListDropdownBell';
import SidebarHeaderMenu from './SidebarLeft/SidebarHeader';
const HeaderHome = props => {

  return (
    <>
      <div className="row ">
        <div className="col-md-12 d-flex justify-content-between " >
          <SidebarHeaderMenu />
          <div className=' flex-fill navbar-menu'>
            <div className='d-flex justify-content-between align-content-center p-3 bg-menu'>
              <div className=' d-flex '>
                <div className="closemenu mx-3" onClick={props.menuIconClick} id="toggler">
                  <Button className='btn-menu '> <TiThMenu /></Button>
                </div>
                <ListDropdownItem className="" />
              </div>
              <div className=' d-flex'>
                <div className='from-search px-2'>
                  {/* <Form> */}
                  <Input className='in-search' type="text" name='search' id='search' placeholder='seach...' />
                  <Label className='lb-search text-light' for="search">< BsSearch /></Label>
                  {/* </Form> */}
                </div>
                <ListIteamLanguage />
                <div className='px-3'>
                  <Button className='btn-menu '><BiFullscreen></BiFullscreen></Button>
                </div>
                <ListDropdownBell />
                <ListDropdownAvatar />
                <div className='px-2 '>
                  <Button className='btn-menu  '><FiSettings /></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderHome;
