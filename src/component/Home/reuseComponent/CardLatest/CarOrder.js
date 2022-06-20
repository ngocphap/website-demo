import React from "react";
import { useState } from "react";
import ItemOrder from "./ItemOrder";
import ItemTransactions from "./ItemTransaction";

import ListCardLatest from "./ListCardLatest";
// import avatar from '../avatar.jpg'
const CardOrder = props => {
  const listItemTrasaction=[
    {
      id:"#12354781",
      urlImage:"/images/2.jpg",
      nameAvatar:"Herbert C. Patton",
      bgStatus:"bg-success",
      status:"Comfirm",
      number:"$14,584",
      date:"5/12/2016"
    },
    {
      id:"#52140300",
      urlImage:"/images/3.jpg",
      nameAvatar:"Mathias N. Klausen",
      bgStatus:"bg-warning",
      status:"Waiting payment",
      number:"$8,584",
      date:"10/11/2016"
    },
    {
      id:"#96254137",
      urlImage:"/images/4.jpg",
      nameAvatar:" Nikolaj S. Henriksen",
      bgStatus:"bg-success",
      status:"Confirm",
      number:"$954",
      date:"8/11/2016"
    },
    {
      id:"#12365474",
      urlImage:"/images/5.jpg",
      nameAvatar:"  Lasse C. Overgaard",
      bgStatus:"bg-danger",
      status:"Payment expired",
      number:"$44,584",
      date:"7/11/2016"
    },
    {
      id:"#85214796",
      urlImage:"/images/6.jpg",
      nameAvatar:" Kasper S. Jessen",
      bgStatus:"bg-success",
      status:"Confirm",
      number:"$8,844",
      date:"1/11/2016"
    },
  ]
  const listcardOrder=[
    {
      id:"#12354781",
      urlImage:"/images/avatar.jpg",
      nameOrder:"Riverston Glass Chair",
      bgStatus:"bg-success",
      namestatus:"Deilvered",
      number:"$185",
      date:"5/12/2016"
    },
    {
      id:"#52140300",
      urlImage:"/images/2.jpg",
      nameOrder:"Shine Company Catalina",
      bgStatus:"bg-success",
      namestatus:"Deilvered",
      number:"$1,024",
      date:"5/12/2016"
    },
    {
      id:"#96254137",
      urlImage:"/images/3.jpg",
      nameOrder:" Trex Outdoor Furniture Cape",
      bgStatus:"bg-danger",
      namestatus:"Cancel",
      number:"$657",
      date:"5/12/2016"
    },
    {
      id:"#12365474",
      urlImage:"/images/4.jpg",
      nameOrder:" Oasis Bathroom Teak Corner",
      bgStatus:"bg-warning",
      namestatus:"Shipped",
      number:"$8451",
      date:"5/12/2016"
    },
    {
      id:"#85214796",
      urlImage:"/images/5.jpg",
      nameOrder:" BeoPlay Speaker",
      bgStatus:"bg-success",
      namestatus:"Deilvered",
      number:"$584",
      date:"5/12/2016"
    },
    {
      id:"#12354781",
      urlImage:"/images/6.jpg",
      nameOrder:"Riverston Glass Chair",
      bgStatus:"bg-success",
      namestatus:"Deilvered",
      number:"$185",
      date:"5/12/2016"
    },
  ];
  const listcard=[
    {
      title:"Latest Transactions",
      boxcard:<ItemTransactions listItemTrasaction={listItemTrasaction}/>,
    },
    {
      title:"Latest Orders",
      boxcard:<ItemOrder listcardOrder={listcardOrder}/>,
    }
  ];

  return (
    <>
      <ListCardLatest listcard={listcard} />
    </>
  );
}
export default CardOrder;
