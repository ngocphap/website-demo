import React from "react";
import { BiChevronDown } from "react-icons/bi";

const TabContent = props => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <h4 className="text-light">
            {props.nameTab}
          </h4>
          <div className="d-flex">
            <p className="text-light">Lexa</p>
            {
              props.nameMenuSub ?
                (
                  <>
                    <span className="text-light"><BiChevronDown /></span>
                    <p className="text-light">
                      {props.nameMenuSub}
                    </p>
                  </>
                ) : ("")
            }
            <span className="text-light"><BiChevronDown /></span>
            <p className="text-light">
              {props.nameTab}
            </p>
          </div>
        </div>

        <div className="text-light">

        </div>
      </div>

    </>
  );
}
export default TabContent;
