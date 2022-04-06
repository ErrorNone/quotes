import React from "react";
import cl from "./PhilosophersItem.module.css";
import "../Reset.css";


const PhilosophersItem = ({ philosoph }) => {
  return (
    <li className={cl.li}>
      <img className={cl.img} src={philosoph.photo} alt="Портрет философа" />
      <div className={cl.name}>{philosoph.name}</div>
      <div className={cl.date}>{philosoph.lifeEars}</div>
    </li>
  );
};

export default PhilosophersItem;
