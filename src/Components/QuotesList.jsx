import React from "react";
import QuotesItem from "./QuotesItem";
import cl from "./QuotesList.module.css";

const QuotesList = (props) => {
  return (
    <ul>
      {props.philosophers.map((phil) => {
        return <QuotesItem philosoph={phil} key={phil.id} />;
      })}
    </ul>
  );
};

export default QuotesList;
