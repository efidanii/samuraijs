import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts myPostsDate={props.myPostsDate} dispatch={props.dispatch}/>
    </div>

  )
}

export default Profile