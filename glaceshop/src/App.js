import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Ponuda from './pages/Ponuda';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/ponuda" element={<Ponuda />} />
        <Route path="/kontakt" element={<Kontakt />} />
        {/* opciono: za 404 */}
        <Route path="*" element={<div>404 - Stranica nije pronađena</div>} />
      </Routes>
    </Router>
  );
}

export default App;