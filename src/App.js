import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Apropos from './components/Apropos';
import MentionsLegales from './components/MentionsLegales';
import Cgu from './components/Cgu';
import Contact from './components/Contact';
import Kasa from './components/Kasa';
import Mvg from './components/Mvg';
import Nc from './components/Nc';
import Sb from './components/Sb';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgu" element={<Cgu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/kasa" element={<Kasa />} />
          <Route path="/projects/mon-vieux-grimoire" element={<Mvg />} />
          <Route path="/projects/nina-carducci" element={<Nc />} />
          <Route path="/projects/sophie-bluel" element={<Sb />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
