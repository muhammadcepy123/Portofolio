import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home', active: true },
    { name: 'Tentang', href: '/#about' },
    { name: 'Pengalaman', href: '/#experience' },
    { name: 'Portofolio', href: '/#portfolio' },
    { name: 'Jasa Layanan', href: '/services' },
    { name: 'Galeri', href: '/gallery' },
    { name: 'Kontak', href: '/#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3' 
          : 'bg-[#0a0a0a]/80 backdrop-blur-sm py-4' 
      }`}
    >
      <div className="px-6 md:px-12 xl:px-16 flex justify-between items-center w-full max-w-[1400px] mx-auto">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border border-white/20 group-hover:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)] transition-all duration-300 shrink-0">
            <img 
              src="san.png" 
              alt="Profil Muhammad Cepy" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm md:text-base font-bold text-white tracking-wide">
              Muhammad Cepy
            </span>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className={`font-medium text-sm transition-colors relative group flex items-center gap-2 ${
                link.active ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.active && (
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
              )}
              {link.name}
              {!link.active && (
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* BAGIAN KANAN */}
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center bg-[#171717] border border-white/10 rounded-full p-1 gap-1">
            <button className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-xs shadow-sm">
              <i className="fas fa-sun"></i>
            </button>
            <button className="w-6 h-6 rounded-full text-slate-500 hover:text-white flex items-center justify-center text-xs transition-colors">
              <i className="fas fa-moon"></i>
            </button>
          </div>

          <button 
            className="lg:hidden text-slate-300 text-2xl hover:text-white transition-colors focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 flex flex-col transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        {navLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            onClick={() => setIsOpen(false)} 
            className={`font-medium text-base px-6 py-3 transition-colors flex items-center gap-3 ${
              link.active 
                ? 'text-white bg-white/5' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {link.active && (
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
            )}
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;