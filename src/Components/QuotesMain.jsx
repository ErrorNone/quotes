import React from "react";
import cl from "./QuotesMain.module.css";
import QuotesMainList from "./QuotesMainList";

const QuotesMain = () => {
  return (
    <main className={cl.quotes}>
      <div className={cl.container}>
        <QuotesMainList/>
      </div>
    </main>
  );
};

export default QuotesMain;
