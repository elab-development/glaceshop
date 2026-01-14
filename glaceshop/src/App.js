import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './pages/Home';
import Ponuda from './pages/Ponuda';
import Kontakt from './pages/Kontakt';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ponuda" element={<Ponuda />} />
        <Route path="/kontakt" element={<Kontakt />} />
        {}
        <Route path="*" element={<div>404 - Stranica nije pronađena</div>} />
      </Routes>
    </Router>
  );
}

export default App;