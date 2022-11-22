import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let posts = props.postsData.map(post => <Post name={props.MyName} avatarSrc={props.avatarSrc} date={post.date} text={post.text} likes={post.likes} />)
  
  
  let newPostElement = React.createRef();
  let addPost = () => {
      let text = newPostElement.current.value
      props.addPost(text)
      newPostElement.current.value = ''
  }
  
  return (

    <div div >
    <div>
      <div className={style.post}>
        <div className={style.postTop}>
          <img className={style.ava} src={props.avatarSrc} alt="" />

          <textarea ref={newPostElement} className={style.textarea} placeholder='Whats new?'></textarea>

          <button onClick={addPost}><img className={style.iconSend} src="https://cdn1.iconfinder.com/data/icons/communicate/512/send-512.png" alt="" /></button>
        </div>


      </div>
    </div>
  { posts }
    </div >
    
  )
}

export default MyPosts