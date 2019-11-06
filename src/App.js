import React from "react";
import "./App.css";
import Data from "./components/Data";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>NASA Photo of the Day</h1>
      </header>
      <Data />
    </div>
  );
}

export default App;
