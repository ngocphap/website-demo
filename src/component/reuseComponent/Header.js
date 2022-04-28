import React from "react";
const Header = props => {
    return (
        <>
            <div className="row text-center justify-content-center align-content-center">
                <div className="col-md-12">
                    <img className="text-center my-4" src={process.env.PUBLIC_URL + "images/logo.png"} alt="" />
                    <h6 className="text-muted">{props.header_title}</h6>
                    <h6 className="text-muted">{props.header_content}</h6>
                </div>
            </div>
        </>

    );
}
export default Header;