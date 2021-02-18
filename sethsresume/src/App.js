import React from 'react';
import { LandingPage } from './components/pages/index';
import { AboutMe } from './components/pages/index';
import { SkillsLanguages } from './components/pages/index';
import { Projects } from './components/pages/index';
import { FutureProjects } from './components/pages/index';
import { Contact } from './components/pages/index';

import '././styles/App.css';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <p>.............................</p>
      <AboutMe />
      <p>.............................</p>
      <SkillsLanguages />
      <p>.............................</p>
      <Projects />
      <p>.............................</p>
      <FutureProjects />
      <p>.............................</p>
      <Contact />
    </div>
  );
}

export default App;