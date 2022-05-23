import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer >
      <section className="container">
        <a href="#" className="footer__logo">
          KK
        </a>
        <ul className="permalinks">
          <li>
            <Link to="/">Домой</Link>
          </li>
          <li>
            <a href="#about">Обо мне</a>
          </li>
          <li>
            <a href="#experience">Опыт</a>
          </li>
          <li>
            <a href="#blog">Блог</a>
          </li>
        </ul>
        <div className="footer__copyright">
          <small>&copy;All right reserved ;)</small>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
