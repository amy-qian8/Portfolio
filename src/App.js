import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Organizations from "./components/Organizations";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/projects" component={Projects} />
        <Route path="/organizations" component={Organizations} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Home} />
      </Switch>
    </>
  );
}

export default App;
