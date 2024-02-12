import React, { useEffect, useState } from "react";

export const SingleKey = ({
  text,
  keyPressed,
  setKeyPressed,
  inputRef,
  setInputText,
}) => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (text?.toLowerCase() === keyPressed?.toLowerCase()) {
      setClicked(true);
      setKeyPressed("");
    }
    let timer = setTimeout(() => {
      setClicked(false);
    }, 100);
  }, [keyPressed, clicked]);

  return (
    <div
      className={`${clicked ? "active" : ""} single-text ${text}`}
      onClick={() => {
        inputRef?.current.focus();
              setInputText((prev) => prev + text?.toLowerCase());
        setClicked(true);
      }}
    >
      {text}
    </div>
  );
};
