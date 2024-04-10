import logo from "./logo.svg";
import "./App.css"
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Exp from "./components/exp/Exp";
import Project from "./components/projects/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Project />
      <Exp />
      <Contact />
    </div>
  );
}

export default App;
