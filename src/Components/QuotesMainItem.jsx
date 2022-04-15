import React from "react";
import cl from "./QuotesMainItem.module.css";

const QuotesMainItem = ({quot, deliteQuotes}) => {
  return (
    <li className={cl.content}>
      <div className={cl.text}>{quot.quote}</div>
      <div className={cl.date}>{quot.year}</div>
      <hr className={cl.hr}/>
      <button onClick={() => deliteQuotes(quot.id)} className={cl.deliteBtn}></button>
    </li>
  );
};

export default QuotesMainItem;
