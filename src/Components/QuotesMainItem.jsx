import React from "react";
import BtnDelite from "../UI/BtnDelite/BtnDelite";
import cl from "./QuotesMainItem.module.css";

const QuotesMainItem = ({quot, deliteQuotes}) => {
  return (
    <li className={cl.content}>
      <div className={cl.text}>{quot.quote}</div>
      <div className={cl.date}>{quot.year}</div>
      <hr className={cl.hr}/>
      <BtnDelite onClick={() => deliteQuotes(quot.id)} className={cl.deliteBtn}></BtnDelite>
    </li>
  );
};

export default QuotesMainItem;
