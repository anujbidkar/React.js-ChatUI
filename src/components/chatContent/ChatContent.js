import React, { Component, useState, useRef, useEffect } from "react";
import "./chatContent.css";
import ChatItem from "./ChatItem";
import anujlogo from "../../images/anuj.jpg";
import anujlogo2 from "../../images/anuj2.jpeg";
import ChatHeader from "./ChatHeader";

export default function ChatContent() {
  const [chatItms, setchatItms] = useState([]);
  const [myMSG, setMsg] = useState("");
  const messagesEndRef = useRef();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [myMSG]);

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      sendMsgBtn("");
    }
  };

  const sendMsgBtn = (type) => {
    scrollToBottom();

    if (myMSG.trim() != "") {
      const msgContent = {
        key: Math.random(),
        type: type,
        msg: myMSG,
        image: { anujlogo },
      };
      scrollToBottom();
      setchatItms([...chatItms, msgContent]);
      setMsg("");
      // scrollToBottom();
    }
  };

  return (
    <div className='main__chatcontent'>
      <ChatHeader />
      <div className='content__body'>
        <div className='chat__items'>
          {chatItms &&
            chatItms.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 1}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.type ? anujlogo : anujlogo2}
                />
              );
            })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className='content__footer'>
        <div className='sendNewMessage'>
          <button
            onClick={() => {
              sendMsgBtn("other");
            }}
            className='addFiles'
          >
            <i className='fa fa-plus'></i>
          </button>
          <input
            value={myMSG}
            onKeyDown={onKeyDownHandler}
            type='text'
            placeholder='Type a message here'
            onChange={(e) => setMsg(e.target.value)}
          />
          <button
            className='btnSendMsg'
            id='sendMsgBtn'
            onClick={() => {
              sendMsgBtn("");
            }}
          >
            <i className='fa fa-paper-plane'></i>
          </button>
        </div>
      </div>
    </div>
  );
}
