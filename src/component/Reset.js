import React from "react";
import { useState } from "react";
import { Card, CardBody, Form } from "reactstrap";
import Header from "./reuseComponent/Header";
import InputFormGroup from "./reuseComponent/InputFormGroup";
import Footer from "./reuseComponent/Footer";
import Submit from "./reuseComponent/Submit";
const Reset = () => {
    const header_title = ["Reset Password"];
    const header_content = [""];
    const valueName = [
        { id: 1, lable: "Email", type: "email", for: "email", namePlacehoder: "Enter email" }
    ];
    const nameSubmitPage = ["Reset"];
    const textFooter = ["Remember It?"];
    const textLinkPage = ["Sign in Here"];
    const linkPage = "/";
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-5 ">
                    <Card className="bg-1 my-5">
                        <CardBody className="m-3">
                            <Header header_title={header_title} header_content={header_content} />
                            <div className="alert alert-info">
                            Enter your Email and instructions will be sent to you!
                            </div>
                            <Form inline>
                                <InputFormGroup valueName={valueName} />
                            
                            <div className="text-end justify-content-end">
                                <Submit nameSubmitPage={nameSubmitPage} />
                            </div>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <Footer textFooter={textFooter} textLinkPage={textLinkPage} linkPage={linkPage} />
        </div>
    );
}
export default Reset;