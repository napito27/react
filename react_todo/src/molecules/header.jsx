import React from 'react';

import '../styles/styles.css'

import headerImg from "../assets/img/todo-bg.jpg"

function Header() {
  return (
    <div className="header">
      <img src={headerImg} alt="todo list"/>
      <span className="main-title">To-Do List</span>
    </div>
  );
}

export default Header;