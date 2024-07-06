import React from "react";
import "./../styles/App.css";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
import { useState } from "react";

const App = () => {
  const [selectedOption, setselectedOption] = useState("");
  const handleSelect = (e) => {
    setselectedOption(e)
  }
  return (
    <div className="parent" style={{ backgroundColor: "#73ff00", padding: "1rem" }}>
      <h1>Parent Component</h1>
      <ChildComponent1 handleSelect={handleSelect} />
      <ChildComponent2 handleSelect={handleSelect} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App;
