import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header >
      <div className="container header__container">
        <Link  to="/">
          <h1>Домой</h1>
        </Link>
        <nav className="header__nav">
          <a href="#about">
            <h3>Обо мне</h3>
          </a>
          <a href="#blog">
            <h3>Блог</h3>
          </a>
          <a href="#experience">
            <h3>Опыт</h3>
          </a>
        </nav>
      </div>
      <a href="#" className='scroll__up'>В верх</a>
    </header>
  );
};
export default Header;
