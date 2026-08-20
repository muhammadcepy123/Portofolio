import { useState, useEffect } from 'react';
// Pemanggil resmi animasi AOS untuk React
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // 1. Inisialisasi AOS yang benar
    AOS.init({
      once: false,
      mirror: true,
      offset: 50,
    });

    
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Portfolio />

      <Contact />

      {/* Modal 1: Banyu Digital App */}
      <div className={`fixed inset-0 z-[100] items-center justify-center bg-dark/60 backdrop-blur-sm p-4 ${activeModal === 'modal-banyu-app' ? 'flex' : 'hidden'}`}>
        <div className="bg-white w-full max-w-lg rounded-3xl p-8 relative">
          <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-dark text-2xl">&times;</button>
          <h3 className="text-2xl font-bold mb-4">Aplikasi Mobile Banyu Digital</h3>
          <p className="text-slate-600 mb-6">Aplikasi ini mempermudah pelanggan PDAM dalam pengecekan tagihan dan pengaduan.</p>
          <a href="https://play.google.com/store/apps/details?id=com.pelayananperumdamtda.app" target="_blank" rel="noreferrer" className="block text-center px-6 py-3 bg-primary text-white rounded-xl font-bold">Buka PlayStore</a>
        </div>
      </div>

      {/* Modal 2: Web Admin Banyu Digital */}
      <div className={`fixed inset-0 z-[100] items-center justify-center bg-dark/60 backdrop-blur-sm p-4 ${activeModal === 'modal-banyu-web' ? 'flex' : 'hidden'}`}>
        <div className="bg-white w-full max-w-lg rounded-3xl p-8 relative">
          <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-dark text-2xl">&times;</button>
          <h3 className="text-2xl font-bold mb-4">Web Admin Banyu Digital</h3>
          <p className="text-slate-600 mb-6">Panel admin untuk pengelolaan data operasional dan pelanggan.</p>
          <a href="https://pelayananperumdamtda.com" target="_blank" rel="noreferrer" className="block text-center px-6 py-3 bg-primary text-white rounded-xl font-bold">Kunjungi Website</a>
        </div>
      </div>

      {/* Modal 3: Deka Apparel */}
      <div className={`fixed inset-0 z-[100] items-center justify-center bg-dark/60 backdrop-blur-sm p-4 ${activeModal === 'modal-deka' ? 'flex' : 'hidden'}`}>
        <div className="bg-white w-full max-w-lg rounded-3xl p-8 relative">
          <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-dark text-2xl">&times;</button>
          <h3 className="text-2xl font-bold mb-4">Sistem Pengelolaan Deka Apparel</h3>
          <p className="text-slate-600 mb-6">Website manajemen inventori dan operasional untuk Deka Apparel.</p>
          <p className="text-sm text-slate-400 italic">Link sedang dalam pengembangan</p>
        </div>
      </div>
    </>
  );
}

export default App;