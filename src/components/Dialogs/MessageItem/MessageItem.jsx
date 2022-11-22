import React from 'react';
import style from './MessageItem.module.css';

const MessageItem = (props) => {

  return <div className={style.messageItem}>{props.name}</div>
}

export default MessageItem