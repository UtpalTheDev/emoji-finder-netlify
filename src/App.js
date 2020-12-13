import React, { useState } from "react";
import "./styles.css";
import { emojidictionary } from "./emojidictionary.js";

export default function App() {
  const [text, settext] = useState("");

  var emojistock = Object.keys(emojidictionary);
  function inputhandler(event) {
    var text1 = event.target.value;
    var meaning = emojidictionary[text1];
    console.log(meaning);
    settext(meaning);
  }

  function clickhandler(item) {
    var meaning = emojidictionary[item];
    settext(meaning);
  }

  return (
    <div className="App">
      <div className="header">Emoji Finder</div>
      <input className="input" onChange={inputhandler}></input>
      <div className="meaning">{text}</div>
      <div>
        {emojistock.map(function (item) {
          return (
            <span
              key={item}
              className="list"
              onClick={() => clickhandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
