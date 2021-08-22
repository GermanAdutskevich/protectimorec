import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import Main from "./layouts/Main";
import List from "./layouts/List";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/list" component={List} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
