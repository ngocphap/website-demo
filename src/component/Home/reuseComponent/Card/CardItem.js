import React from "react";
import { Card, CardBody } from "reactstrap";
import Datareport from "./Datareport";
import DatareportAreaChar from "./DatareprtAreaChart";
const CardItem = props => {
  return (
    <>

      {props.listCards.map(item => (

            <div className="col-12 col-md-12 col-xl-4 my-4">
            <Card className="   bg-dropdown-menu card1">
              <CardBody className="card-body">
              <div className="">
                <div className="text-light">
                  <p>{item.titleCard}</p>
                </div>
                <div className="text-light d-flex justify-content-between">
                  {item.children.map(child => (
                    <div>
                      <p>{child.number}</p>
                      <p>{child.title}</p>
                    </div>
                  ))}
                </div>
                <div>
                  {item.reportCard}

                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      ))}

    </>
  );
}
export default CardItem;
