import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");

const Navbar = () => {
    return(
      <nav className={style.nav}>
        <div className={style.item}><NavLink to="/profile" className={classNameFunc}>Profile</NavLink></div>
        <div className={style.item}><NavLink to="/dialogs" className={classNameFunc}>Messages</NavLink></div>
    </nav>

    )
}

export default Navbar