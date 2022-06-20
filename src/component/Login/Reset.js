import React from "react";
import { Card, CardBody, Form,Label } from "reactstrap";
import Header from "./reuseComponent/Header";
import InputFormGroup from "./reuseComponent/InputFormGroup";
import Footer from "./reuseComponent/Footer";
import Submit from "./reuseComponent/Submit";
import { useForm, FormProvider } from 'react-hook-form';

import InformationContext from "../Context/InformationUser";
import { useContext } from "react";
import { useState } from "react";

const Reset = () => {

  const {informationUser}=useContext(InformationContext);

  const header_title = "Reset Password";
  const header_content = "";
  const valueName = [
    { id: 1, lable: "Email", type: "email", for: "email", namePlacehoder: "Enter email",
    rules:
    {
      required: "Email not entered ",
      pattern: {
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+.[a-zA])*$/,
        message: "Invalid Email ,please include an '@' "
      }
    } }
  ];
  const nameSubmitPage = "Reset";
  const textFooter = "Remember It?";
  const textLinkPage = "Sign in Here";
  const linkPage = "/";
  const methods = useForm({
    defaultValues: {
      email: "",
    }
  })
  var [isReset,setIsReset]=useState(false);
  var [iserror, setIserror] = useState(false);
  const onSubmit = (_data) => {

    const checkInformation = informationUser.find((curr) => curr.email === _data.email);
    if(checkInformation){
      isReset=true;
      setIsReset(isReset);
    }
    else{
      iserror=true;
      isReset=false;
      setIsReset(isReset);
      setIserror(iserror);
    }

    console.log(checkInformation);

   };
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
              {isReset &&
                <div className="bg-light d-flex ">
                  <p className="text-success m-1 p-2">Reset link are sended to your mailbox, check there first</p>
                </div>
              }
              <FormProvider {...methods}>
                <Form inline onSubmit={methods.handleSubmit(onSubmit)}>
                  <InputFormGroup valueName={valueName} />

                  {iserror && <Label className="text-danger">
                  Email does not exist
                  </Label>}

                  <div className="text-end justify-content-end">
                    <Submit nameSubmitPage={nameSubmitPage} />
                  </div>
                </Form>
              </FormProvider>
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer textFooter={textFooter} textLinkPage={textLinkPage} linkPage={linkPage} />
    </div>
  );
}
export default Reset;
