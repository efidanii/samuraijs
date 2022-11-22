import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';





const Dialogs = (props) => {
  let dialogsElemts = props.dialogsData.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avaSrc={dialog.avaSrc}/>)
  let messagesElemts = props.dialogsData.messages.map(message => <MessageItem name={message.name} id={message.id} />)
  return (

    <div className={style.messenger}>
      <div className={style.dialogs}>
        {dialogsElemts}
      </div>

      <div className={style.messages}>
        {messagesElemts}
      </div>
    </div>
  )
}

export default Dialogs