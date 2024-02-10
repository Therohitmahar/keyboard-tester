import React, { useEffect, useState } from "react";
import { SingleKey } from "./SingleKey";

const Main = () => {
  const [keyPressed, setKeyPressed] = useState("");
  const handleFn = (e) => {
    console.log(e.key, "logs");
    setKeyPressed(e.key);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleFn);

    return () => {
      window.removeEventListener("keydown", handleFn);
    };
  }, []);
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "["];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M", ",", "."];
  //   console.log(keyPressed, "logs ke");
  return (
    <section className="main-page">
      <div className="container">
        <div className="single-row">
          {firstRow?.map((el, i) => (
            <SingleKey key={i} text={el} keyPressed={keyPressed} />
          ))}
        </div>
        <div className="single-row">
          {secondRow?.map((el, i) => (
            <SingleKey key={i} text={el} keyPressed={keyPressed} />
          ))}
        </div>
        <div className="single-row">
          {thirdRow?.map((el, i) => (
            <SingleKey key={i} text={el} keyPressed={keyPressed} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
