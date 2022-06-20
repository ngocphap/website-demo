import React from "react";

import { useForm, FormProvider } from 'react-hook-form';
import { Card, CardBody, Form, Label } from "reactstrap";
import Header from "./reuseComponent/Header";
import InputFormGroup from "./reuseComponent/InputFormGroup";
import Footer from "./reuseComponent/Footer";
import Submit from "./reuseComponent/Submit";
import { Link } from "react-router-dom";
import { useState } from "react";
import InformationContext from "../Context/InformationUser";
import { useContext } from "react";
const Register = () => {
  const { informationUser, setInformationUser } = useContext(InformationContext);
  const header_title = "Free Register";
  const header_content = "Get your free Lexa account now.";
  const valueName = [
    {
      id: 1, lable: "Email", type: "email", for: "email", namePlacehoder: "Enter email",
      rules:
      {
        required: "Email not entered ",
        pattern: {
          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+.[a-zA])*$/,
          message: "Invalid Email ,please include an '@' "
        }
      }
    },
    {
      id: 2, lable: "Username", type: "text", for: "username", namePlacehoder: "Enter username",
      rules:
      {
        required: "Username not entered",
        pattern: {
          value: /[^a-zA-Z]/,
          message: "Invalid Username,there is at least 1 number "
        }
      }
    },
    {
      id: 3, lable: "Password", type: "password", for: "password", namePlacehoder: "Enter Password",
      rules:
      {
        required: "Password not entered",
        pattern: {
          value: /.{6,}$/,
          message: "Invalid Password,there is at least 6 digits"
        }
      }
    }
  ];
  const nameSubmitPage = "Register";
  const textFooter = "Already hav an account ?";
  const textLinkPage = "Login";
  const linkPage = "/";
  // sử dụng useForm của react-hook-form để check defaultvalues
  // sử dụng FormProvider của react-hook-form để sử dụng context useForm
  const methods = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: ""
    }
  })

  var [isregister, setisregister] = useState(false);
  var [iserror, setiserror] = useState(false);
  const onSubmit = (_data) => {
    const checkInformation = informationUser.find((curr) => curr.email === _data.email);
    if (checkInformation) {
      setiserror(true);
      setisregister(false);

      console.log("erro",iserror);
      console.log("submit",isregister);
    }
    else {
      setiserror(false);
      setisregister(true);
      setInformationUser([...informationUser, {
        email: _data.email,
        password: _data.password,
        username: _data.username
      }]);
      console.log("erro",iserror);
      console.log("submit",isregister);
      console.log(informationUser);
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-5 ">
          <Card className="bg-1 my-5">
            <CardBody className="m-3">
              <Header header_title={header_title} header_content={header_content} />
              {/* FormRrovider bao quanh Form */}
              {isregister &&
                <div className="bg-light d-flex ">
                  <p className="text-success m-1 p-2">Register User Successfully</p>
                </div>
              }
              <FormProvider {...methods}>
                <Form inline onSubmit={methods.handleSubmit(onSubmit)}>
                  <InputFormGroup valueName={valueName} />
                  {iserror && <Label className="text-danger">
                    Email already exists
                  </Label>}
                  <div className="text-end justify-content-end">
                    <Submit nameSubmitPage={nameSubmitPage} />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="text-muted">
                        By registering you agree to the Lexa
                        <Link className="text-decoration-none text-2" to=""> Terms of Use</Link>
                      </p>
                    </div>
                  </div>
                </Form>
              </FormProvider>
            </CardBody>
          </Card>
          <Footer textFooter={textFooter} textLinkPage={textLinkPage} linkPage={linkPage} />
        </div>
      </div>
    </div>
  );
}
export default Register;
