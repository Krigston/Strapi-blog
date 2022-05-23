import React from "react";
import "./experience.css";
import { FiUsers } from "react-icons/fi";
const Experience = () => {
  return (
    <section id="experience">
      <div className="container experience__container">
        <h1>Мой опыт работы и достижения</h1>
        <div className="experience__list">
          <article className=" experience__card">
            <FiUsers className=" experience__icon" />
            <h5>Опыт</h5>
            <small>1+ Год</small>
          </article>
          <article className=" experience__card">
            <FiUsers className=" experience__icon" />
            <h5>Опыт</h5>
            <small>1+ Год</small>
          </article>
          <article className=" experience__card">
            <FiUsers className=" experience__icon" />
            <h5>Опыт</h5>
            <small>1+ Год</small>
          </article>
          <article className=" experience__card">
            <FiUsers className=" experience__icon" />
            <h5>Опыт</h5>
            <small>1+ Год</small>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
