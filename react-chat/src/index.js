import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/Chat";

import "./assets/scss/reset.scss";
import "./plugins/firebase";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Login} />
    <Route path="/chat" component={Chat} />
  </Router>,
  document.getElementById("root")
);
