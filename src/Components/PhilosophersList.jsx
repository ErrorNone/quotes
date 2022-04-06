import React from "react";
import PhilosophersItem from "./PhilosophersItem";
import "../Reset.css";
import cl from "./PhilosophersList.module.css";

const PhilosophersList = (props) => {
  return (
    <ul className={cl.ul}>
      {props.philosophers.map((phil) => {
        return <PhilosophersItem philosoph={phil} key={phil.id} />;
      })}
    </ul>
  );
};

export default PhilosophersList;
