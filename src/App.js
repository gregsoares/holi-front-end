import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './Components/Pages/Index';
import Projects from './Components/Pages/Projects';
import { TopNav } from './Components/TopNav/TopNav';
import { Footer } from './Components/Footer/Footer';
import { MultiTemp } from './Components/Pages/MultiTemp';
// import { Blog } from "./Components/Pages/Blog";
// TODO: Import router

function App() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/covidtracker' component={Index} />
        <Route exact path='/multitemp' component={MultiTemp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
