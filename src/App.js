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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
