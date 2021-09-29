import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import React from "react";
import AnimatedCursor from "react-animated-cursor";
import EachProject from "./components/EachProject";
// import Sidebar from "./components/Sidebar";
// import LocomotiveScroll from "locomotive-scroll";

function App() {
  return (
    <div className="App" data-scroll-container>
      <AnimatedCursor
        innerSize={15}
        outerSize={40}
        color="198,81,205"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />
      <Router>
        <Navbar />
        {/* <Sidebar /> */}

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/project/:id" component={EachProject} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
