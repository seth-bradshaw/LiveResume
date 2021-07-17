import React from "react";
import LandingPage from "./components/general/LandingPage";
import NavBar from "./components/navigation/NavBar";
import ContactPage from "./components/contact/ContactPage";
import BioPage from "./components/bio/BioPage";
import SkillsPage from "./components/skills/SkillsPage";
import ProjectPage from "./components/projects/ProjectPage";
import Footer from "./components/general/footer/Footer";

function App() {
  const [red, green, blue] = [81, 226, 245];
  const root = document.querySelector(".root");

  window.addEventListener("scroll", () => {
    const y = 1 + (window.scrollY || window.pageYOffset) / 1000;
    const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);

    root.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });

  return (
    <div>
      <NavBar />
      <div id="content_container">
        <LandingPage id="landing_page" />
        <BioPage />
        <ProjectPage />
        <SkillsPage />
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
