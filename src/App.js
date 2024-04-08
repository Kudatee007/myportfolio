import logo from "./logo.svg";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Contact />
    </div>
  );
}

export default App;
