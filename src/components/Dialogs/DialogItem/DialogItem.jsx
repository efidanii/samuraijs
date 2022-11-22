import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css';


const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={style.dialogItem}>
      <NavLink to={path}>
        <div className={style.dialogWrapper}>
          <img className={style.avaSrc} src={props.avaSrc} alt="" />
          <div>{props.name}</div>
        </div>
      </NavLink>
    </div>
  )
};

export default DialogItem