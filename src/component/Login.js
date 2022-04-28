import React from "react";
import { useState } from "react";
import { Card, CardBody, Form, Label, FormGroup, Input } from "reactstrap";
import Header from "./reuseComponent/Header";
import InputFormGroup from "./reuseComponent/InputFormGroup";
import Footer from "./reuseComponent/Footer";
import Submit from "./reuseComponent/Submit";
import { Link } from "react-router-dom";
const Login = () => {
    const header_title = ["Welcome Back!"];
    const header_content = ["Sign in to continue to Lexa."];
    const valueName = [
        { id: 1, lable: "Email", type: "email", for: "email", namePlacehoder: "Enter email", value: "1" },
        { id: 2, lable: "Password", type: "password", for: "password", namePlacehoder: "Enter Password", value: "1" }];
    const nameSubmitPage = ["Log In"];
    const textFooter = ["Don't have an account ?"];
    const textLinkPage = ["Signup now"];
    const linkPage = "/register";

    const [getEmail,setEmail]=useState("");
    const [getPassword,setPassword]=useState("");
    const validateForm = e => {
        var value = e.target;
        console.log(value);
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-5 ">
                    <Card className="bg-1 my-5">
                        <CardBody className="m-3">
                            <Header header_title={header_title} header_content={header_content} />
                            <Form inline>
                                <InputFormGroup validateForm={validateForm} valueName={valueName} />

                                <div className="d-flex justify-content-between  mb-5">
                                    <FormGroup checkRemember>
                                        <Input
                                            className="mx-2"
                                            id="CheckRemember"
                                            name="checkRemember"
                                            type="checkbox"
                                        />
                                        <Label
                                            className="text-1"
                                            checkRemember
                                            for="CheckRemember"
                                        >
                                            Remember me
                                        </Label>
                                    </FormGroup>
                                    <Submit nameSubmitPage={nameSubmitPage} />
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <Link className="d-flex text-decoration-none text-muted" to="/reset">
                                            <div className="icon-img mx-2">
                                            </div>
                                            Forgot your password?</Link>
                                    </div>
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
export default Login;