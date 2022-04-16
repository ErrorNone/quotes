import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import QuotesItem from "./QuotesItem";
import cl from "./QuotesList.module.css";
import Context from "../Context/Context";


const QuotesList = () => {
  const params = useParams()
  const {philosophers} = useContext(Context)
  const id = Number.parseInt(params.nameId)

  const philosophId = philosophers.filter(ph => {
    return  id !== ph.id ? null : ph
  })
  

  return (
    <ul>
      {<QuotesItem philosoph={philosophId[0]} /> }
    </ul>
  );
};

export default QuotesList;