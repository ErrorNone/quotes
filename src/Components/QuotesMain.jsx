import React from "react";
import cl from "./QuotesMain.module.css";
import QuotesMainList from "./QuotesMainList";

const QuotesMain = ({philosoph}) => {
  return (
    <main className={cl.quotes}>
      <div className={cl.container}>
        <QuotesMainList philosoph={philosoph}/>
      </div>
    </main>
  );
};

export default QuotesMain;
