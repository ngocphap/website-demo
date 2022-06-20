import React, { useState } from "react";
import { createContext } from "react";
//init context
const InformationContext = createContext();
//provider context
export const InformationProvider = ({ children }) => {
  const [informationUser, setInformationUser] = useState([
    {
      email: "ngocphap5@gmail.com",
      password: "123456",
      username: "ngocphap5"
    },
  ])
  return (
    <InformationContext.Provider value={{ informationUser, setInformationUser }}>
      {children}
    </InformationContext.Provider>
  );
}
export default InformationContext;
