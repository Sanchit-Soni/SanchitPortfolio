import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import React from "react";
import AnimatedCursor from "react-animated-cursor";
import EachProject from "./components/EachProject";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
// import CustomCursor from "./CustomCursor";
// import Sidebar from "./components/Sidebar";
// import LocomotiveScroll from "locomotive-scroll";

function App() {
  return (
    <div className="App" data-scroll-container>
      <AnimatedCursor
        innerSize={15}
        outerSize={40}
        color="223,253,253"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />
      {/* <CustomCursor /> */}
      <Router>
        <Navbar />

        <div className="pages">
          <HashRouter>
            <Route exact path="/" component={Loading} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/project/:id" component={EachProject} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={Loading} />
          </HashRouter>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
