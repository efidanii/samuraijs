import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from '../../redux/state'





const Dialogs = (props) => {
  let dialogsElemts = props.dialogsData.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avaSrc={dialog.avaSrc}/>)
  let messagesElemts = props.dialogsData.messages.map(message => <MessageItem name={message.name} id={message.id} />)

  let newMessageBody = props.dialogsData.newMessageBody, 
      onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
      },
      onNewMessageChange = (e) =>{
        let body = e.target.value
        props.dispatch(updateNewMessageBodyActionCreator(body))
      }
  return ( 

    <div className={style.messenger}>
      <div className={style.dialogs}>
        {dialogsElemts}
      </div>

      <div className={style.messages}>
        {messagesElemts}
        <div className={style.textareaAndButton}>
          <textarea onChange={onNewMessageChange} placeholder='Write a message...' className={style.textarea} value={newMessageBody}/>
          <button onClick={onSendMessageClick}><img className={style.iconSend} src="https://cdn1.iconfinder.com/data/icons/communicate/512/send-512.png" alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs