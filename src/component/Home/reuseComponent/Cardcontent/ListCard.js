import React from "react";

import { BiCube } from "react-icons/bi";
import { IoLogoBuffer } from "react-icons/io";
import { BsTags,BsBriefcase } from "react-icons/bs";
import CardContent from "./CardContent";
const ListCard = props => {
  const listInformationCard = [
    {
      title: "ORDERS",
      money: "1,587",
      icon: <BiCube/>,
      span1: "+11%",
      span2: "From previous period",
      bgspan1:"bg-info"
    },
    {
      title: "REVENUE",
      money: "$46,782",
      icon: <IoLogoBuffer />,
      span1: "-29%",
      span2: "From previous period",
      bgspan1:"bg-danger"
    },
    {
      title: "AVERAGE PRICE",
      money: "$15.9",
      icon: <BsTags/>,
      span1: "0%",
      span2: "From previous period",
      bgspan1:"bg-warning"
    },
    {
      title: "PRODUCT SOLD",
      money: "1890",
      icon: <BsBriefcase/>,
      span1: "+89%",
      span2: "From previous period",
      bgspan1:"bg-info"
    }
  ]
  return (
    <CardContent listInformationCard={listInformationCard}/>
  );
}

export default ListCard;
