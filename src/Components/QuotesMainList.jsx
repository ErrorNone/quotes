import React, { useContext } from "react";
import Context from "../Context/Context";
import QuotesMainItem from "./QuotesMainItem";
import cl from "./QuotesMainList.module.css";

const QuotesMainList = () => {
  const {quotes} = useContext(Context)
  return (
    <ul>
      {quotes.map(quot => {
        return <QuotesMainItem quot={quot} key={quot.id}/>
      })}
    </ul>
  );
};

export default QuotesMainList;
