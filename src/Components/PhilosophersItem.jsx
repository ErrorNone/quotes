import React, { useState } from "react";
import cl from "./PhilosophersItem.module.css";
import "../Reset.css";
import { Link } from "react-router-dom";

const PhilosophersItem = ({ philosoph }) => {
 
  const [philId, setPhilId] = useState(philosoph);
 
  return (
    <li className={cl.li}>
      <Link
        to={`/quotes/${philosoph.id}`}
        state={{
          philId: philId,
        }}
        className={cl.a}
      >
        <img className={cl.img} src={philosoph.photo} alt="Портрет философа" />
        <div className={cl.name}>{philosoph.name}</div>
        <div className={cl.date}>{philosoph.lifeYears}</div>
      </Link>
    </li>
  );
};

export default PhilosophersItem;
