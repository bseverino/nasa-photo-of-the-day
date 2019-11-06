import React from "react";
import "./App.css";
import {CardData} from "./components/CardData";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>NASA Photo of the Day</h1>
      </header>
      <div className="container">
        <CardData />
      </div>
    </div>
  );
}

export default App;
