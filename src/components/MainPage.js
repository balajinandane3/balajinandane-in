import React from "react";
import About from "./About";
import Applications from "./Applications";
import Contact from "./Contact";

function MainPage({ currentPage }) {
  switch (currentPage) {
    case "about":
      return <About />;
    case "applications":
      return <Applications />;
    case "contact":
      return <Contact />;
    default:
      return (
        <section className="hero">
          <h1>Hi, I’m <span className="highlight">Balaji</span></h1>
          <p>Passionate Software Developer</p>
        </section>
      );
  }
}

export default MainPage;
