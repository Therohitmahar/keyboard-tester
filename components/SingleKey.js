import React, { useEffect, useState } from "react";

export const SingleKey = ({ text, keyPressed }) => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (text?.toLowerCase() === keyPressed?.toLowerCase()) {
      setClicked(true);
    }
    let timer = setTimeout(() => {
      setClicked(false);
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, [keyPressed]);

  return (
    <div
      className={`${clicked ? "active" : ""} single-text`}
      onClick={() => {
        setClicked(true);
      }}
    >
      {text}
    </div>
  );
};
