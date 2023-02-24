import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Main from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";
import Product from "./components/Products/Product";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const x = "LÊ TRƯỜNG HOAN";
const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path={"/about"}>
          <Product />
        </Route>
        <Route path={"/"}>
          <div className="App">
            <header className="App-header contentLeft">
              <div id="logo1">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <p>
                Hello Tôi là {x}, Tôi đang làm web React đầu tiên nè :))
                hihihihi
              </p>
              <Main />
              <br />
              <br />
            </header>
            <div className="contentRight">
              <AddNewProduct />
              <hr />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
