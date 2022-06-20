import React from "react";
import { Link } from 'react-router-dom';

const Footer = props => {
    return (
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="d-flex justify-content-center ">
                    <p className="text-light me-3 ">{props.textFooter}</p>
                    <Link className="text-2 text-decoration-none" to={props.linkPage}>{props.textLinkPage}</Link>
                </div>
                <div>
                    <p className="text-light">&copy; 2022 Lexa-Crafted with &#10084; by Themesbrand</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;