// App.js
import React from "react";
import "./App.css";

import Navbar from "./F_Assignment/components/Navbar";
import About from "./F_Assignment/components/About";
import Projects from "./F_Assignment/components/Projects";
import Skills from "./F_Assignment/components/Skills";
import Resume from "./F_Assignment/components/Resume";
import Contact from "./F_Assignment/components/Contact";
import Footer from "./F_Assignment/components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
