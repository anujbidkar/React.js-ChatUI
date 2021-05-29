import React from "react";
import Avatar from "../chatList/Avatar";
import anujlogo from "../../images/anuj.jpg";

export default function ChatHeader() {
  return (
    <div className='content__header'>
      <div className='blocks'>
        <div className='current-chatting-user'>
          <Avatar isOnline='active' image={anujlogo} />
          <p>Anuj Bidkar </p>
        </div>
      </div>
    </div>
  );
}
