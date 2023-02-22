import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";

const x = "LÊ TRƯỜNG HOAN";
const App = () => {
  return (
    <div className="App">
      <header className="App-header contentLeft">
        <div id="logo1">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>Hello Tôi là {x}, Tôi đang làm web React đầu tiên nè :)) hihihihi</p>
        <Main />
        <br />
        <br />
      </header>
      <div className="contentRight">
        <AddNewProduct />
      </div>
    </div>
  );
};

export default App;
