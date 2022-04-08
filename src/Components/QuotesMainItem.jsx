import React from "react";
import cl from "./QuotesMainItem.module.css";

const QuotesMainItem = ({quot}) => {
  return (
    <li className={cl.content}>
      <div className={cl.text}>{quot.quote}</div>
      <div className={cl.date}>{quot.year}</div>
      <hr className={cl.hr}/>
    </li>
  );
};

export default QuotesMainItem;
