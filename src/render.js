import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost} from './redux/state'



const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (state) => {
  root.render(
  <React.StrictMode>
    <App myPostsDate={state.myPostsDate} dialogsData={state.dialogsData} addPost={addPost}/>
  </React.StrictMode>
);
}


