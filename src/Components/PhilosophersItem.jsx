import React, { useContext, useState } from "react";
import cl from "./PhilosophersItem.module.css";
import "../Reset.css";
import { Link } from "react-router-dom";
import BtnDelite from "../UI/BtnDelite/BtnDelite";
import Context from "../Context/Context";

const PhilosophersItem = ({ philosoph }) => {
  const { delitePhil } = useContext(Context)
  const [philId, setPhilId] = useState(philosoph);
 
  return (
    <li className={cl.li}>
      <BtnDelite 
        style={{top: '-25px', right: '65px'}}
        onClick={()=> delitePhil(philosoph.id)}
        ></BtnDelite>
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
