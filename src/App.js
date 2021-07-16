import React from 'react';
import LandingPage from './components/general/LandingPage';
import NavBar from './components/navigation/NavBar';
import ContactPage from './components/contact/ContactPage';
import BioPage from './components/bio/BioPage';
import SkillsPage from './components/skills/SkillsPage';
import ProjectPage from './components/projects/ProjectPage';
import Footer from './components/navigation/Footer';
import { Route, Switch } from 'react-router-dom';
import './index.css'

const [red, green, blue] = [81, 226, 245]
const section1 = document.querySelector('.root')
const checkpoint = 500

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 1000
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  const currentScroll = window.pageYOffset;
  let opacity;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".scrollicon").style.opacity = opacity;
})


function App() {

  return (
    <div>
        {/* <Route path="/" to="#landing_page" component={LandingPage} />
        <Route path="/" to="#bio_page" component={BioPage} />
        <Route path="/" to="#project_page" component={ProjectPage} />
        <Route path="/" to="#skills_page" component={SkillsPage} />f */}
      <NavBar />
      <div id="content_container">
        <LandingPage id="landing_page"/>
        <BioPage/>
        <ProjectPage />
        <SkillsPage />
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
