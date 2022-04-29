import React from "react";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { Controller } from "react-hook-form";
import "../reuseComponent/App.css";

const InputFormGroup = props => {

  return (
    <>
      <div className="row text-center justify-content-center align-content-center">
        <div className="col-md-12">
          <FormGroup>
            {props.valueName.map(valueName => (
              <FormGroup key={valueName.id} className="text-start ">
                <Label
                  className="text-1"
                  for={valueName.for}
                >
                  {valueName.lable}
                </Label>
                <br />
                {/* sử dụng controller để render ra message error  */}
                <Controller
                  name={valueName.for}
                  rules={valueName.rules}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <>
                      <Input className="w-100 input-item bg-3 "
                        type={valueName.type}
                        placeholder={valueName.namePlacehoder}
                        onChange={onChange}
                        value={value}
                        invalid={Boolean(error)}
                      />
                      {Boolean(error) && (
                        <FormFeedback invalid >
                          {error.message}
                        </FormFeedback>
                      )}
                    </>
                  )}
                />
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
