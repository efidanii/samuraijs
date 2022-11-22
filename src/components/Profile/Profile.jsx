import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts avatarSrc={props.appPost.MyAvatar} profileName={props.appPost.MyName} postsData={props.appPost.postData} addPost={props.addPost}/>
    </div>

  )
}

export default Profile