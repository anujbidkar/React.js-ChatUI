import React from "react";

export default function ChatFooter(props) {
  return (
    <div className='content__footer'>
      <div className='sendNewMessage'>
        <button
          onClick={() => {
            props.sendMsgBtnFunction("other");
          }}
          className='addFiles'
        >
          <i className='fa fa-plus'></i>
        </button>
        <input
          value={props.myMSG}
          //   onKeyDown={props.onKeyDownHandler}
          type='text'
          placeholder='Type a message here'
          onChange={(e) => props.setMsg(e.target.value)}
        />
        <button
          className='btnSendMsg'
          id='sendMsgBtn'
          onClick={() => {
            props.sendMsgBtnFunction("");
          }}
        >
          <i className='fa fa-paper-plane'></i>
        </button>
      </div>
    </div>
  );
}
