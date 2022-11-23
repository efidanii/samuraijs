import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';



function App(props) {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
        <div className="content">
          <Routes>
              <Route path='/dialogs/*' element={<Dialogs dialogsData={props.dialogsData}/>}/>
              <Route path='/profile'  element={<Profile myPostsDate={props.myPostsDate} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
          </Routes>
        </div>
    </div>
    </BrowserRouter>
);  
}

export default App;
