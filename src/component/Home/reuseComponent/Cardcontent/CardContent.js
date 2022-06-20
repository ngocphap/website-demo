
import React from "react";
import { GrCube } from "react-icons/gr";
import { CardBody, Card } from "reactstrap";
const CardContent = (props) => {
  return (
    <>
      {
        props.listInformationCard.map(item => (
          <div className="col-12 col-md-6 col-xl-3">
            <Card className="  bg-menu ">
              <CardBody className="card-body">
                <div className="icon-card float-end rounded-circle bg-primary-1 align-items-center text-center d-flex justify-content-center">
                  {/* <GrCube className="h1 icon-card-1 "></GrCube> */}
                 <span  className="h1 text-light"> {item.icon} </span>
                </div>
                <div className="text-light">
                  <h6 className="text-uppercase mb-3 font-size-16 text-white">{item.title}</h6>
                  <h2 className="mb-4 text-white">{item.money}</h2>
                  <span className={`badge ${item.bgspan1}`}>{item.span1}</span>
                  <span className="ms-2">{item.span2}</span>
                </div>
              </CardBody>
            </Card>
          </div>
        ))
      }

    </>
  );
}

export default CardContent;
