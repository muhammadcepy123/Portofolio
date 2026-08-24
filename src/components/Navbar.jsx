import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(totalScroll / windowHeight || 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. Buat daftar semua link utama (Master Data)
  const allNavLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'Tentang', path: '/#about' },
    { name: 'Pengalaman', path: '/#experience' },
    { name: 'Portofolio', path: '/#portfolio' },
    { name: 'Jasa Layanan', path: '/services' },
    { name: 'Kontak', path: '/#contact' }
  ];

  // 2. Logika Filter: 
  // Jika URL saat ini adalah '/services', tampilkan HANYA Home dan Jasa Layanan.
  // Jika bukan, tampilkan semuanya.
  const navLinks = location.pathname === '/services' 
    ? allNavLinks.filter(item => item.name === 'Home' || item.name === 'Jasa Layanan')
    : allNavLinks;

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
          isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
        }`}
      >
        <motion.div className="h-1 bg-gradient-to-r from-primary via-secondary to-sky-300 origin-left" style={{ scaleX: scrollProgress }} />

        <div className={`flex justify-between items-center w-full px-6 md:px-12 xl:px-20 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
          
          <Link to="/#home" className="text-xl sm:text-2xl md:text-3xl font-extrabold text-dark tracking-tight flex items-center group whitespace-nowrap">
            Muhammad Cepy
            <motion.span animate={{ rotate: isScrolled ? 360 : 0 }} transition={{ duration: 0.5 }} className="text-primary text-2xl sm:text-3xl md:text-4xl ml-1 leading-none group-hover:text-secondary">
              . Dev
            </motion.span>
          </Link>

          <ul className="hidden md:flex items-center gap-2 relative">
            {navLinks.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={index} className="relative px-4 py-2" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                  <a href={item.path} className={`relative z-10 text-lg font-semibold transition-colors ${isActive ? 'text-primary' : 'text-slate-700 hover:text-primary'}`}>
                    {item.name}
                  </a>
                  {hoveredIndex === index && (
                    <motion.div layoutId="nav-hover-pill" className="absolute inset-0 bg-sky-50 border border-sky-100 rounded-full -z-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                  )}
                </li>
              );
            })}
          </ul>

          <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsMobileMenuOpen(true)} className="md:hidden w-12 h-12 flex items-center justify-center shrink-0 bg-white rounded-full shadow-md border border-slate-100 text-dark text-xl focus:outline-none hover:text-primary hover:shadow-lg transition-all">
            <i className="fas fa-bars"></i>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-[100] flex flex-col items-center justify-center gap-6 sm:gap-10 h-[100dvh] w-full overflow-y-auto py-20">
            <motion.button whileHover={{ rotate: 90 }} onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 w-14 h-14 bg-slate-100 rounded-full text-dark text-2xl flex items-center justify-center focus:outline-none hover:bg-red-50 hover:text-red-500 transition-all">
              <i className="fas fa-times"></i>
            </motion.button>

            {navLinks.map((item, index) => (
              <motion.a key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-extrabold text-slate-800 hover:text-primary transition-all relative group">
                {item.name}
                <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;