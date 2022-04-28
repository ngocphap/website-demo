import React from "react";
import { useState } from "react";
import { Card, CardBody, Form } from "reactstrap";
import Header from "./reuseComponent/Header";
import InputFormGroup from "./reuseComponent/InputFormGroup";
import Footer from "./reuseComponent/Footer";
import Submit from "./reuseComponent/Submit";
const Register = () => {
    const header_title = ["Free Register"];
    const header_content = ["Get your free Lexa account now."];
    const valueName = [
        { id: 1, lable: "Email", type: "email", for: "email", namePlacehoder: "Enter email" }, 
        { id: 2, lable: "Username", type: "text", for: "username", namePlacehoder: "Enter username" }, 
        { id: 3, lable: "Password", type: "password", for: "password", namePlacehoder: "Enter Password" }
    ];
    const nameSubmitPage = ["Register"];
    const textFooter = ["Already hav an account ?"];
    const textLinkPage = ["Login"];
    const linkPage = "/";

    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-5 ">
                    <Card className="bg-1 my-5">
                        <CardBody className="m-3">
                            <Header header_title={header_title} header_content={header_content} />
                            <Form inline>
                                <InputFormGroup valueName={valueName}  />
                            
                            <div className="text-end justify-content-end">
                            <Submit nameSubmitPage={nameSubmitPage} />
                            </div>
                           
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="text-muted">By registering you agree to the Lexa <a className="text-decoration-none text-2" href=""> Terms of Use</a></p>
                                </div>
                            </div>
                            </Form>
                        </CardBody>
                    </Card>
                    <Footer textFooter={textFooter} textLinkPage={textLinkPage} linkPage={linkPage} />
                </div>
            </div>

        </div>
    );
}
export default Register;