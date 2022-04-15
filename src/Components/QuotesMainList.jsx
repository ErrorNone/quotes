import React, { useContext } from "react";
import Context from "../Context/Context";
import QuotesMainItem from "./QuotesMainItem";
// import cl from "./QuotesMainList.module.css";

const QuotesMainList = ({philosoph}) => {
  const {quotes, deliteQuotes} = useContext(Context)
  const quotesFilterId = quotes.filter(quote => quote.nameId === philosoph.id)
 

  return (
    <ul>
      {quotesFilterId.map(quot => {
        return <QuotesMainItem deliteQuotes={deliteQuotes} quot={quot} key={quot.id}/>
      })}
    </ul>
  );
};

export default QuotesMainList;
