import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Screens/Header";
import About from "./components/Screens/about/About";
import Portfolio from "./components/Screens/Projects/Portfolio";
import Footer from "./components/Screens/Footer";
import Contact from "./components/Screens/Contact";
const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Header} />
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
