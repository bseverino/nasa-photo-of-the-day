import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Data from "./components/Data";

const Header = styled.header`
  background: black;
  color: white;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

const Wrapper = styled.section `
  margin: 30px;
  padding: 30px 0;
  border-radius: 10px;
  background: gray;
`;

function App() {
  return (
    <div className="App">
      <Header>
        <h1>NASA Photo of the Day</h1>
      </Header>
      <Wrapper>
        <Data />
      </Wrapper>
    </div>
  );
}

export default App;
