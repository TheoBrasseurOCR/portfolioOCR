// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Apropos from './pages/Apropos';
import MentionsLegales from './pages/MentionsLegales';
import Cgu from './pages/Cgu';
import Contact from './pages/Contact';
import Kasa from './pages/Kasa';
import Mvg from './pages/Mvg';
import Nc from './pages/Nc';
import Sb from './pages/Sb';


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
