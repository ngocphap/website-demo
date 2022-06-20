import React from "react";
import { Card, CardBody } from "reactstrap";
// import avatar from '../avatar.jpg'
const ItemInbox = props => {

  return (
    <>
      {props.listInbox.map(item => (
        <div className=" d-flex justify-content-between box-message ">
          <div className=" d-flex align-content-center  ">
            <img className="rounded-circle me-4 my-2" src={item.iconAvatar} height="50px;" alt="avatar" />
            <div className="my-2">
              <p className="p-0 m-0 d-flex justify-content-between">{item.nameAvatar}</p>
              <p className="p-0 m-0 text-muted">{item.chatMessage}</p>
            </div>
          </div>
          <span className="text-muted">{item.timeChat}</span>
        </div>
      ))}
    </>
  );
}
export default ItemInbox;
