import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const titleUpdater = useTitle("Loading...");
  return (
    <div className="App">
      <div>Hi!</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
