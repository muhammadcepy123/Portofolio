import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Efek untuk mendeteksi scroll dan mengubah background navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Tentang', href: '/#about' }, // Disesuaikan dengan id="about"
    { name: 'Pengalaman', href: '/#experience' }, // Disesuaikan dengan id="experience"
    { name: 'Portofolio', href: '/#portfolio' },
    { name: 'Jasa Layanan', href: '/services' }, // Diarahkan ke Route /services
    { name: 'Kontak', href: '/#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="px-6 md:px-12 xl:px-20 flex justify-between items-center w-full">
        
        {/* LOGO */}
        <a href="#home" className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-baseline gap-1">
          Muhammad Cepy
          <span className="text-sky-500 text-3xl leading-none">.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Dev</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-slate-600 hover:text-sky-600 font-medium text-sm xl:text-base transition-colors relative group"
            >
              {link.name}
              {/* Garis bawah animasi saat di-hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        {/* TOMBOL MOBILE MENU (Hamburger) */}
        <button 
          className="lg:hidden text-slate-600 text-2xl hover:text-sky-600 transition-colors focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 flex flex-col transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        {navLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            onClick={() => setIsOpen(false)} 
            className="text-slate-600 hover:text-sky-600 hover:bg-slate-50 font-medium text-base px-6 py-3 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;