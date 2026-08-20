import { motion } from 'framer-motion';

const Hero = () => {
  // Animasi untuk teks yang muncul berurutan (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    // Padding kiri-kanan (px-6 md:px-12 xl:px-20) sudah disamakan persis dengan Navbar
    <header id="home" className="relative w-full min-h-screen flex items-center px-6 md:px-12 xl:px-20 bg-slate-50 pt-24 pb-16 overflow-hidden">
      
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-40" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Ornamen Cahaya Blur di Belakang */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-sky-300/40 rounded-full blur-[100px] z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[0%] left-[0%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] z-0"
      />

      {/* DIBUANG: max-w-7xl mx-auto. Sekarang w-full murni agar melebar ke pojok! */}
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 relative z-10">
        
        {/* Kolom Kiri: Teks & Info (Melebar ke pojok kiri) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[60%]"
        >
          {/* Badge Melayang */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-100 shadow-sm mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold text-slate-600">Available for New Projects</span>
          </motion.div>

          {/* Heading Besar */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl xl:text-8xl font-extrabold text-dark leading-tight mb-2 tracking-tight">
            Muhammad <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Cepy.</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-slate-500 font-medium mb-8">
            A.Md.Kom. <span className="mx-2 text-slate-300">|</span> Full-Stack Developer
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
          Lulusan D3 Teknik Informatika yang berdedikasi membangun solusi digital. Berpengalaman dalam pengembangan Full-Stack (<b>Laravel, PHP, Flutter, React.js</b>) dan merancang aplikasi pelayanan publik yang berdampak nyata bagi masyarakat.
          </motion.p>
          
          {/* Tombol Aksi */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-12">
            <a href="#portfolio" className="group relative px-8 py-4 bg-dark text-white text-lg font-bold rounded-2xl overflow-hidden shadow-xl shadow-slate-900/20 transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Eksplor Karya <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a href="#contact" className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 hover:border-primary hover:text-primary text-lg font-bold rounded-2xl transition-all hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2">
              <i className="fas fa-envelope"></i> Hubungi Saya
            </a>
          </motion.div>

          {/* Ikon Sosmed Bawah */}
          <motion.div variants={itemVariants} className="flex gap-5 items-center">
            <span className="text-slate-400 font-medium mr-2">Terhubung:</span>
            {['github', 'linkedin-in'].map((icon, index) => (
              <a 
                key={index}
                href={icon === 'github' ? "https://github.com/muhammadcepy" : "#"}
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-100 text-slate-600 text-xl rounded-xl shadow-sm hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Kolom Kanan: Foto & Ornamen Melayang (Merapat ke pojok kanan) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-[40%] relative flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          {/* Kotak Glassmorphism Utama */}
          <div className="relative w-[300px] h-[380px] md:w-[380px] md:h-[480px] xl:w-[450px] xl:h-[550px] rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white shadow-2xl p-4 z-10 group">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
              <img src="contoh.png" alt="Foto Muhammad Cepy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Ikon Float 1: Laravel */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 md:top-10 md:-left-12 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-red-500 text-4xl z-20 border border-slate-50"
          >
            <i className="fab fa-laravel"></i>
          </motion.div>

          {/* Ikon Float 2: Flutter / Mobile */}
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -left-4 md:bottom-20 md:-left-16 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-sky-500 text-3xl z-20 border border-slate-50"
          >
            <i className="fab fa-app-store-ios"></i>
          </motion.div>

          {/* Ikon Float 3: Database / PHP */}
          <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-8 right-10 md:-bottom-12 md:right-20 w-24 h-24 bg-dark rounded-full shadow-2xl flex items-center justify-center text-white text-4xl z-20 border-4 border-white"
          >
            <i className="fab fa-php"></i>
          </motion.div>

        </motion.div>
      </div>
    </header>
  );
};

export default Hero;