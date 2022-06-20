import React from "react";
import { Button } from "reactstrap";
import "./css.css"
const ItemOrder = props => {
  return (
    <>
      {props.listcardOrder.map(item=>(
      <div className=" item-order  ">
        <div className="row text-light d-flex justify-content-between my-2 ">
          <div className="col-1 d-flex center-auto">
            <p>{item.id}</p>
          </div>
          <div className="col-5 d-flex center-auto">
            <img className="rounded-circle me-2" src={item.urlImage} height={"30px;"} alt="" />
            <p className="p-0 m-0 d-flex center-auto ">{item.nameOrder}</p>
          </div>
          <div className="col-1 d-flex center-auto">
            <div className={`icon-order ${item.bgStatus} rounded-circle m-0 p-0`} >
            <p className="m-0 p-0 d-flex center-auto">{item.namestatus}</p>
            </div>
          </div>
          <div className="col-1 center-auto">
            <p className="p-0 m-0 d-flex center-auto">{item.number}</p>

          </div>
          <div className="col-1 center-auto">
            <p className="p-0 m-0 d-flex center-auto">{item.date}</p>
          </div>
          <div className="col-1 d-flex center-auto">
            <Button className="btn-edit p-0 m-0 ">Edit</Button>
          </div>
        </div>
      </div>))}
    </>
  );
}
export default ItemOrder;
