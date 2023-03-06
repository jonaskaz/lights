import "./App.css";
import Form from "./Components/Form";
import React from "react";
import XButton from "./Components/XButton";
import Window from "./Components/Window";

function App() {
  return (
    <div className="App">
      <Window
        navcontent={<XButton />}
        content={<Form options={["test1", "test2"]}></Form>}
        bottomcontent={<p></p>}
      ></Window>
    </div>
  );
}

export default App;
