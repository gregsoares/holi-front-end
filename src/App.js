import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./Components/Pages/Index";
import Projects from "./Components/Pages/Projects";
import { TopNav } from "./Components/TopNav/TopNav";
import { Footer } from "./Components/Footer/Footer";
// TODO: Import router

function App() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/covidtracker" component={Index} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
