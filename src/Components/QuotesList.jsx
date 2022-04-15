import React from "react";
import { useLocation } from "react-router-dom";
import QuotesItem from "./QuotesItem";
import cl from "./QuotesList.module.css";


const QuotesList = () => {
  const location = useLocation()
  const philosophId = location.state?.philId;

  return (
    <ul>
      {<QuotesItem philosoph={philosophId} /> }    
    </ul>
  );
};

export default QuotesList;
