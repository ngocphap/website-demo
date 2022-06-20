import React from "react";
import { Button } from "reactstrap";
import "./css.css"
const ItemTransactions = props => {
  return (
    <>
      {props.listItemTrasaction.map(item=>(
      <div className=" item-transaction item-order ">
        <div className="row text-light d-flex justify-content-between my-2">
          <div className="col-3 d-flex center-auto">
            <img className="rounded-circle px-2" src={item.urlImage} height={"30px;"} alt="" />
            <p className="p-0 m-0 ">{item.nameAvatar}</p>
          </div>
          <div className=" col-3 d-flex py-2 center-auto">
            <div className={`icon-status ${item.bgStatus} rounded-circle mx-2 m-0 p-0`} ></div>
            <p className="m-0 p-0 d-flex">{item.status}</p>
          </div>
          <div className="col-2 center-auto">
            <p className="p-0 m-0">{item.number}</p>
            <p className="p-0 m-0">Amount</p>
          </div>
          <div className="col-2 center-auto">
            <p className="p-0 m-0">{item.date}</p>
            <p className="p-0 m-0">Date</p>
          </div>
          <div className="col-2 d-flex center-auto">
            <Button className="p-0 m-0 px-4">Edit</Button>
          </div>
        </div>
      </div>))}
    </>
  );
}
export default ItemTransactions;
