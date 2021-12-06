import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Screens/Header";
import About from "./components/Screens/about/About";
import Portfolio from "./components/Screens/Projects/Portfolio";
import Contact from "./components/Screens/Contact";
import Particle from "./components/particles/particle";
const App = () => {
  return (
    <>
      <Router basename={"/"}>
        <div className="App">
          <NavBar />
          <Particle/>
          <Switch>
            <Route path={["/MyPortfolio","/",]}  exact component={Header} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
