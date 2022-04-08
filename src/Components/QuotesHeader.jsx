import React from "react";
import cl from "./QuotesHeader.module.css";

const QuotesHeader = ({ philosoph }) => {
  return (
    <header className={cl.header}>
      <div className={cl.container}>
        <div className={cl.contant}>
          <div className={cl.left}>
            <img
              src={philosoph.photo}
              alt="Фото философа"
              className={cl.avatar}
            />
          </div>
          <div className={cl.right}>
            <h2 className={cl.name}>{philosoph.name}</h2>
            <h3 className={cl.age}>{philosoph.lifeEars}</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default QuotesHeader;
