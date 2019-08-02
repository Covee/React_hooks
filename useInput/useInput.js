import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue)
  const onChange = event => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value)
    }
    if (willUpdate) {
      setValue(value)
    }
  };
  return { value, onChange }
}




// 21번째 줄까지는 만든 hooks. 밑에 코드는 적용해서 사용해 본 것.

const App = () => {
  // 어떤 조건이든 value 를 false로 만든다면 setValue가 동작하지 않을것이다.
  // const maxLen = value => value.length <= 10;
  const maxLen = value => !value.includes("@") // @포함하면 setValue 동작 안함
  const name = useInput("Mr.", maxLen)
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name}/>
      <input placeholder="Email"/>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
