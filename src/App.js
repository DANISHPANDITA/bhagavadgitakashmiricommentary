/** @format */

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Basics from "./components/Basics";
import ChapterDetails from "./components/ChapterDetails";
import GeetaMahatmya from "./components/GeetaMahatmya";
import HomePage from "./components/HomePage";
import Table from "./components/Table";

function App() {
  // document.addEventListener(
  //   "contextmenu",
  //   function (e) {
  //     e.preventDefault();
  //   },
  //   false
  // );
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/geetamahatmya">
            <GeetaMahatmya />
          </Route>
          <Route exact path="/table">
            <Table />
          </Route>
          <Route exact path="/chapter/:chapterNo">
            <ChapterDetails />
          </Route>
          <Route exact path="/basics">
            <Basics />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="*">
            <p style={{ fontFamily: "sans-serif" }}>Cannot reach the path</p>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
