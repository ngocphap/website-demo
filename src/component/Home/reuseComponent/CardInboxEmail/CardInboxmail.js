import React from "react";
import { Card, CardBody } from "reactstrap";
import ItemInbox from "./ItemInbox";
import ItemREcent from "./ItemREcent";
// import avatar from '../avatar.jpg'
const CardInboxmail = props => {

  return (
    <>
      {props.listcardinbox.map(item => (
        <div className="col-12 col-md-12 col-xl-4 my-4">
          <Card className="   bg-dropdown-menu card1">
            <CardBody className="card-body">
              <div className="text-light">
                <p>{item.title}</p>
                {item.boxcard}

              </div>
            </CardBody>
          </Card>
        </div>
      ))}

    </>
  );
}
export default CardInboxmail;
