import React from "react";
import { useState } from "react";
import { Card, CardBody } from "reactstrap";
import CardInboxmail from "./CardInboxmail";
import ItemInbox from "./ItemInbox";
import ItemREcent from "./ItemREcent";
// import avatar from '../avatar.jpg'
const ListcardInbox = props => {
  const [listInbox, setlistInbox] = useState([
    {
      iconAvatar: "/images/avatar.jpg",
      nameAvatar: "Misty",
      chatMessage: "Hey! there I'm avaible..",
      timeChat: "13:40 PM"
    },
    {
      iconAvatar: "/images/2.jpg",
      nameAvatar: "Melissa",
      chatMessage: "I'vefinished it! See you so...",
      timeChat: "13:34 PM"
    },
    {
      iconAvatar: "/images/3.jpg",
      nameAvatar: "Dwayne",
      chatMessage: "This theme is awesome!",
      timeChat: "13:17 PM"
    },
    {
      iconAvatar: "/images/4.jpg",
      nameAvatar: "Martin",
      chatMessage: "Nice to meet you!",
      timeChat: "12:20 PM"
    },
    {
      iconAvatar: "/images/5.jpg",
      nameAvatar: "Vincent",
      chatMessage: "Hey! there I'm avaible..",
      timeChat: "13:17 PM"
    },
    {
      iconAvatar: "/images/6.jpg",
      nameAvatar: "Robert Chappa",
      chatMessage: "Hey! there I'm avaible..",
      timeChat: "10:12 PM"
    },
  ])
  const [listItem, setlistItem] = useState([
    {
      time: "JUN25",
      title: "Responded to need “Volunteer Activities”"
    },
    {
      time: "JUN24",
      title: "Added an interest “Volunteer Activities””"
    },
    {
      time: "JUN23",
      title: "Joined the group “Boardsmanship Forum””"
    },
    {
      time: "JUN21",
      title: "Responded to need “In-Kind Opportunity””"
    },
  ])
  const listcardinbox = [
    {
      title: "Inbox",
      boxcard: <ItemInbox listInbox={listInbox} />
    },
    {
      title: "Recent Activity Feed",
      boxcard: <ItemREcent listItem={listItem} />
    },
  ]
  return (
    <>
      <CardInboxmail listcardinbox={listcardinbox} />
    </>
  );
}
export default ListcardInbox;
