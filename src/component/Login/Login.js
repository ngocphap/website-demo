import React, { } from "react";
import { useForm, FormProvider } from 'react-hook-form';
import { Card, CardBody, Form, Label, FormGroup, Input } from "reactstrap";
import Header from "./reuseComponent/Header";
import InputFormGroup from "./reuseComponent/InputFormGroup";
import Footer from "./reuseComponent/Footer";
import Submit from "./reuseComponent/Submit";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import InformationContext from "../Context/InformationUser";
import { useContext } from "react";

const Login = () => {
  // useNavigate dieu hướng đến bộ định tuyến khác , giúp di đến url cụ thể
  const navigate = useNavigate();


  const { informationUser } = useContext(InformationContext);

  const header_title = "Welcome Back!";
  const header_content = "Sign in to continue to Lexa.";
  const valueName = [
    {
      id: 1, lable: "Email", type: "email", for: "email", namePlacehoder: "Enter email", value: "ngocphap5@gmail.com", rules:
      {
        required: "Required",
        pattern: {
          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: "Invalid Email"
        }
      }
    },
    { id: 2, lable: "Password", type: "password", for: "password", namePlacehoder: "Enter Password", value: "123456" }];
  const nameSubmitPage = "Log In";
  const textFooter = "Don't have an account ?";
  const textLinkPage = "Signup now";
  const linkPage = "/register";

  // sử dụng useForm của react-hook-form để check defaultvalues
  // sử dụng FormProvider  bao quanh form  để sử dụng context Controller
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  })

  var [islogin, setislogin] = useState(false);
  var [iserror, setiserror] = useState(false);

  console.log("Arr infomation:", informationUser);
  const onSubmit = (_data) => {

    const checkInformation = informationUser.find((curr) => _data.email === curr.email && _data.password === curr.password);
    // console.log("infomation check",checkInformation);

    if (checkInformation) {
      islogin = true;
      setiserror(false);
      setislogin(true);
      // console.log("islogin true:",islogin);
      if (islogin) {
        navigate('/home');
      }
      else
        navigate('/');
    }
    else {

      setiserror(true);
      setislogin(false);
      // console.log("islogin false:",islogin);
    }
  };

  // useEffect(() => {
  //   if (islogin) {
  //     navigate('/home');
  //   }
  //   else
  //   navigate('/');
  // }, [islogin]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5 ">
            <Card className="bg-1 my-5">
              <CardBody className="m-3">
                <Header header_title={header_title} header_content={header_content} />
                <FormProvider {...methods}>
                  <Form inline onSubmit={methods.handleSubmit(onSubmit)}>
                    <InputFormGroup
                      valueName={valueName}
                    />
                    {iserror && <Label className="text-danger">
                      Not password or email
                    </Label>}
                    <div className="d-flex justify-content-between  mb-5">
                      <FormGroup >
                        <Input
                          className="mx-2"
                          name="checkRemember"
                          type="checkbox"
                        />
                        <Label
                          className="text-1"
                          for="CheckRemember"
                        >
                          Remember me
                        </Label>
                      </FormGroup>
                      <Submit
                        nameSubmitPage={nameSubmitPage}
                      >
                      </Submit>
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
                </FormProvider>
              </CardBody>
            </Card>
          </div>
        </div>
        <Footer textFooter={textFooter} textLinkPage={textLinkPage} linkPage={linkPage} />
      </div>
    </>
  );
}
export default Login;
