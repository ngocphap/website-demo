import React from "react";
import { Button, Card, CardBody } from "reactstrap";
// import avatar from '../avatar.jpg'
const ItemREcent = props => {

  return (
    <>
      <div className="text-center">
        {props.listItem.map(item => (
          <>
            <div className="d-flex  box-maxter">
              <div className="text-start box-REcent my-3 flex-fill ms-3">
                <div className="mamamama">
                </div>
                <h6 className="d-flex m-3" >{item.time}</h6>
                <p className="m-3">{item.title}</p>
              </div>
            </div>
            <div className="icon-feed d-flex me-4 rounded-circle d-flex align-content-center text-center justify-content-center  ">
              <p className="text-light  ">-</p>
            </div>
          </>



        ))}
        <Button>Load More</Button>
      </div>

    </>
  );
}
export default ItemREcent;
