import React, { useEffect, useRef, useState } from "react";
import { SingleKey } from "./SingleKey";
import InputField from "./InputField";

const Main = () => {
  const inputRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const [keyPressed, setKeyPressed] = useState("");
  const handleFn = (e) => {
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
  const allArray = [firstRow, secondRow, thirdRow];
  // console.log(allArray, "logs ke");
  return (
    <section className="main-page">
      <InputField
        inputRef={inputRef}
        inputText={inputText}
        setInputText={setInputText}
      />
      <div className="container">
        {allArray?.map((item) => (
          <>
            <div className="single-row">
              {item?.map((el, i) => (
                <SingleKey
                  setInputText={setInputText}
                  inputRef={inputRef}
                  key={i}
                  text={el}
                  keyPressed={keyPressed}
                  setKeyPressed={setKeyPressed}
                />
              ))}
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Main;
