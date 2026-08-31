import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery'; // 1. Tambahkan import ini

function App() {
  return (
    <Router>
      <div className="bg-slate-50 min-h-screen overflow-x-hidden relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* 2. Tambahkan Route untuk Gallery di sini */}
          <Route path="/gallery" element={<Gallery />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;