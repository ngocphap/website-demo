import React from "react";
import ItemTransactions from "./ItemTransaction";
import { Card, CardBody } from "reactstrap";
import ItemOrder from "./ItemOrder";
const ListCardLatest = props => {

  return (
    <>

      {props.listcard.map(item => (
        <div className="col-12 col-md-12 col-xl-6 my-4 ">
          <Card className="   bg-dropdown-menu card-item ">
            <CardBody className="card-body">
              <div className="text-light">
                <p>{item.title}</p>
                {item.boxcard}
              </div>
            </CardBody>
          </Card>
        </div>))}

    </>
  );
}
export default ListCardLatest;
