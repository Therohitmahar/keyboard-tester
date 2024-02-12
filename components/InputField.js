import React, { useEffect } from "react";

const InputField = ({ inputText, setInputText, inputRef }) => {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      //   console.log(inputText, "logs");
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [inputText]);

  return (
    <div class="input-container">
      <input
        ref={inputRef}
        className="input"
        type="text"
        onChange={handleChange}
        value={inputText}
        placeholder="Type Here...."
      />
    </div>
  );
};

export default InputField;
