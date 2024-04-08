import logo from "./logo.svg";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Exp from "./components/exp/Exp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Exp/>
      <Contact />
    </div>
  );
}

export default App;
