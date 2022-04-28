import React from "react";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import "../reuseComponent/App.css";
import { useState } from "react";
const InputFormGroup = props => {
 
    return (
        <>
            <div className="row text-center justify-content-center align-content-center">
                <div className="col-md-12">
                    <FormGroup>
                        {props.valueName.map(valueName => (
                            <FormGroup className="text-start ">
                                <Label
                                    className="text-1"
                                    key={valueName.id}
                                    for={valueName.for}
                                >
                                    {valueName.lable}
                                </Label>
                                <br />
                                <Input 
                                    
                                    className="w-100 input-item bg-3 "
                                    key={valueName.id}
                                    type={valueName.type}
                                    id={valueName.for}
                                    name={valueName.for}
                                    placeholder={valueName.namePlacehoder}
                                    onChange={valueName.value}
                                    
                                    
                                />
                                <FormFeedback valid >
                                    This field is invalid
                                </FormFeedback>
                                <FormFeedback invalid >
                                    This field is invalid
                                </FormFeedback>
                                <br />
                            </FormGroup>
                        ))}
                    </FormGroup>

                </div>
            </div>
        </>
    );
}
export default InputFormGroup;