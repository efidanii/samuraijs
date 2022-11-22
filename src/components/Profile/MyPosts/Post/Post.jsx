import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  
    return(
      <div className={style.post}>
        <div className={style.postTop}>
          <img className={style.ava} src={props.avatarSrc} alt="" />
          <div className={style.postInfo}>
              <div className={style.name}>{props.name}</div>
              <div className={style.date}>{props.date}</div>
          </div>
        </div>  

        <div className={style.postText}>
            {props.text}
        </div>
        <div  className={style.likes}>🖤 {props.likes}</div>
      </div>
    )
}

export default Post