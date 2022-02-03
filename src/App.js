import React from "react";
import './App.css';
import Formcomp from "./Components/form";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header>
          <h2>Todo List</h2>
        </header>
        <Formcomp/>
      </div>
    </React.Fragment> 
  );
}

export default App;
