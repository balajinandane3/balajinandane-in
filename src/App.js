import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [section, setSection] = useState("hero");

  return (
    <>
      <Header setSection={setSection} />

      {/* 🔥 This wrapper FIXES your alignment issue */}
      <div className="page-container">
        {section === "hero" && <Hero />}
        {section === "about" && <About />}
        {section === "resume" && <Resume />}
        {section === "projects" && <Projects />}
        {section === "contact" && <Contact />}
      </div>
    </>
  );
}

export default App;
