import React from "react";
import cl from "./PhilosophersItem.module.css";
import "../Reset.css";
import { Link } from "react-router-dom";


const PhilosophersItem = ({ philosoph }) => {
  return (
    <li className={cl.li}>
      <Link to="/quotes" className={cl.a}>
        <img className={cl.img} src={philosoph.photo} alt="Портрет философа" />
        <div className={cl.name}>{philosoph.name}</div>
        <div className={cl.date}>{philosoph.lifeEars}</div>
      </Link>
    </li>
  );
};

export default PhilosophersItem;
