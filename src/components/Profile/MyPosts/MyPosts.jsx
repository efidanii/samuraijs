import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostActionCreator, addPostActionCreator} from '../../../redux/state'

const MyPosts = (props) => {

  let posts = props.myPostsDate.postData.map(post => <Post name={props.myPostsDate.MyName} avatarSrc={props.myPostsDate.MyAvatar} date={post.date} text={post.text} likes={post.likes} />)
  

  let newPostElement = React.createRef();
  let addPost = () => {
    if (newPostElement.current.value != 0){
      props.dispatch(addPostActionCreator())
      props.dispatch(updateNewPostActionCreator(""))
    }
      }, 
      onChangePost = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostActionCreator(text))
      },
      onEnterPress = (e) =>{
        if(e.keyCode == 13 && e.shiftKey == false) {
          if (newPostElement.current.value != 0){
            e.preventDefault();
            props.dispatch(addPostActionCreator()) 
            props.dispatch(updateNewPostActionCreator(""))
          }
        }
      }


  return (

    <div div >
    <div>
      <div className={style.post}>
        <div className={style.postTop}>
          <img className={style.ava} src={props.myPostsDate.MyAvatar} alt=""/>

          <textarea placeholder="Whtat's new?" onChange={onChangePost} onKeyDown={onEnterPress} ref={newPostElement} className={style.textarea} value={props.myPostsDate.newPostText}/>

          <button onClick={addPost}><img className={style.iconSend} src="https://cdn1.iconfinder.com/data/icons/communicate/512/send-512.png" alt="" /></button>
        </div>


      </div>
    </div>
  { posts }
    </div >
    
  )
}

export default MyPosts