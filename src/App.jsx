import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services'; // File jasa yang akan kita buat nanti

function App() {
  return (
    <Router>
      <div className="bg-slate-50 min-h-screen overflow-x-hidden relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;