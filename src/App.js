/** @format */

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Basics from "./components/Basics";
import ChapterDetails from "./components/ChapterDetails";
import GeetaMahatmya from "./components/GeetaMahatmya";
import HomePage from "./components/HomePage";
import Shloka from "./components/Shloka";
import Table from "./components/Table";
import { useSelector } from "react-redux";
import { selectShlokaDataDetails } from "./redux/slice";
function App() {
  // document.addEventListener(
  //   "contextmenu",
  //   function (e) {
  //     e.preventDefault();
  //   },
  //   false
  // );
  function getPos(str, subStr, i) {
    return str.split(subStr, i).join(subStr).length;
  }
  const shlokaData = useSelector(selectShlokaDataDetails);

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
          <Route exact path="/chapter/:chapterNo/verse/:verseNo">
            {shlokaData ? (
              <Shloka />
            ) : (
              <Redirect
                to={`/chapter/${window.location.href.slice(
                  getPos(window.location.href, "/", 4) + 1,
                  getPos(window.location.href, "/", 5)
                )}`}
              />
            )}
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
