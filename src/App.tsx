import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingIcons from "./components/FloatingIcons";

import "./App.css";

function App() {
  return (
    <>
  <FloatingIcons />

  <Header />

  <main>
    <Hero />
    <About />
    <Tech />
    <Projects />
    <Contact />
  </main>
</>
  );
}

export default App;