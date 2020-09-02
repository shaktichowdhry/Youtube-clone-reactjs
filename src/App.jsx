import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Recommendedvideos from "./components/Recommendedvideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Router>
      {/* //BEM class naming convension */}
      <div className="app">
        {/* <h1>Hello Cleaver Programmers, let's build a YOUTUBE Clone 🚀 </h1> */}
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            {/* <h1>Search page</h1> */}
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              {/* <h1>Home page</h1> */}
              <Sidebar />
              <Recommendedvideos />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
