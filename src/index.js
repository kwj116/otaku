import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Rengoku from "./Chracters/Rengoku";
import Home from "./Home";
import Kakasi from "./Chracters/Kakasi";
import Menu from "./Menu";
import Nezuko from "./Chracters/Nezuko";
import Levi from "./Chracters/Levi";
import Eren from "./Chracters/Eren";
import Sinobu from "./Chracters/Sinobu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Switch>
      <Route path="/rengoku">
        <Rengoku />
      </Route>
      <Route path="/kakasi">
        <Kakasi />
      </Route>
      <Route path="/nezuko">
        <Nezuko />
      </Route>
      <Route path="/levi">
        <Levi />
      </Route>
      <Route path="/eren">
        <Eren />
      </Route>
      <Route path="/sinobu">
        <Sinobu />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);
