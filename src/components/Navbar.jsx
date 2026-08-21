import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Tentang', 'Pengalaman', 'Portofolio', 'Kontak'];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)]' 
            : 'bg-transparent'
        }`}
      >
        <motion.div 
          className="h-1 bg-gradient-to-r from-primary via-secondary to-sky-300 origin-left"
          style={{ scaleX: scrollProgress }}
        />

        <div className={`flex justify-between items-center w-full px-6 md:px-12 xl:px-20 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
          
          {/* UBAHAN: Ukuran teks logo dikecilkan untuk mobile dan ditambah whitespace-nowrap */}
          <a href="#home" className="text-xl sm:text-2xl md:text-3xl font-extrabold text-dark tracking-tight flex items-center group whitespace-nowrap">
            Muhammad Cepy
            <motion.span 
              animate={{ rotate: isScrolled ? 360 : 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary text-2xl sm:text-3xl md:text-4xl ml-1 leading-none group-hover:text-secondary"
            >
              . Dev
            </motion.span>
          </a>

          <ul className="hidden md:flex items-center gap-2 relative">
            {navLinks.map((item, index) => {
              const link = item === 'Tentang' ? '#about' : item === 'Pengalaman' ? '#experience' : item === 'Kontak' ? '#contact' : `#${item.toLowerCase()}`;
              return (
                <li 
                  key={index} 
                  className="relative px-4 py-2"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a href={link} className="relative z-10 text-lg font-semibold text-slate-700 hover:text-primary transition-colors">
                    {item}
                  </a>
                  
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-sky-100 rounded-full -z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(true)} 
            className="md:hidden w-12 h-12 flex items-center justify-center shrink-0 bg-white rounded-full shadow-md border border-slate-100 text-dark text-xl focus:outline-none hover:text-primary hover:shadow-lg transition-all"
          >
            <i className="fas fa-bars"></i>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-900/95 backdrop-blur-2xl z-[100] flex flex-col items-center justify-center gap-6 sm:gap-10 h-[100dvh] w-full overflow-y-auto py-20"
          >
            <motion.button 
              whileHover={{ rotate: 90 }}
              onClick={() => setIsMobileMenuOpen(false)} 
              className="absolute top-8 right-8 w-14 h-14 bg-white/10 rounded-full text-white text-2xl flex items-center justify-center focus:outline-none hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all"
            >
              <i className="fas fa-times"></i>
            </motion.button>

            {navLinks.map((item, index) => {
              const link = item === 'Tentang' ? '#about' : item === 'Pengalaman' ? '#experience' : item === 'Kontak' ? '#contact' : `#${item.toLowerCase()}`;
              return (
                <motion.a 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={link} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-4xl font-extrabold text-white hover:text-secondary transition-all relative group"
                >
                  {item}
                  <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-secondary transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;