import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  // Fungsi Download dengan SweetAlert2
  const handleDownload = async (fileUrl, fileName, docType) => {
    try {
      // Munculkan loading alert
      Swal.fire({
        title: 'Memproses...',
        text: `Sedang menyiapkan file ${docType} Anda`,
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // Proses fetch file
      const response = await fetch(fileUrl);
      
      // Jika file tidak ditemukan di folder public, lempar error
      if (!response.ok) {
        throw new Error('File tidak ditemukan');
      }

      // Ubah respons menjadi Blob (data file)
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      // Buat elemen link sementara untuk memicu download
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      
      // Bersihkan elemen
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Munculkan alert SUKSES
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: `Dokumen ${docType} berhasil diunduh.`,
        confirmButtonColor: '#0ea5e9',
        timer: 3000
      });

    } catch (error) {
      // Munculkan alert GAGAL
      Swal.fire({
        icon: 'error',
        title: 'Oops... Gagal!',
        text: `Maaf, dokumen ${docType} gagal diunduh. Pastikan file tersedia.`,
        confirmButtonColor: '#0f172a'
      });
    }
  };

  return (
    <header id="home" className="relative w-full min-h-screen flex items-center px-6 md:px-12 xl:px-20 bg-slate-50 pt-20 pb-12 overflow-hidden">
      
      {/* ========================================== */}
      {/* BACKGROUND GEOMETRIS (SUDAH DIKECILKAN)      */}
      {/* ========================================== */}
      
      {/* 1. Segitiga Besar (Lebih kecil dari sebelumnya) */}
      <motion.div 
        animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 right-0 w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] bg-gradient-to-bl from-sky-200/50 to-indigo-100/20 z-0"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />

      {/* 2. Segitiga Terpotong */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] -left-10 md:-left-16 w-[180px] h-[220px] bg-gradient-to-br from-emerald-200/40 to-transparent z-0"
        style={{ clipPath: 'polygon(0 0, 100% 15%, 85% 100%, 0 85%)' }}
      />

      {/* 3. Kotak Outline Berputar */}
      <motion.div 
        animate={{ rotate: [15, 75, 15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 -left-10 w-48 h-48 md:w-56 md:h-56 border-[12px] border-slate-200/60 rounded-3xl z-0"
      />

      {/* 4. Kotak Solid Kecil */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] right-[30%] lg:right-[35%] w-10 h-10 bg-sky-300/40 rounded-xl z-0 backdrop-blur-sm"
      />

      {/* 5. Pola Titik (Dot Pattern) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] z-0 pointer-events-none opacity-[0.35]" 
        style={{ 
          backgroundImage: 'radial-gradient(#94a3b8 2px, transparent 2px)', 
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 65%)',
          WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 65%)'
        }}>
      </div>
      {/* ========================================== */}

      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12 relative z-10">
        
        {/* KOLOM KIRI: Teks & Info (Teks Dikecilkan) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[55%] xl:w-[60%]"
        >
          {/* Badge Status */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm mb-5 hover:shadow-md transition-shadow">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs md:text-sm font-semibold text-slate-700 tracking-wide uppercase">Available for New Projects</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-800 leading-[1.15] mb-4 tracking-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">
              Muhammad Cepy.
            </span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-lg md:text-xl xl:text-2xl text-slate-500 font-semibold mb-5 flex flex-wrap items-center gap-3">
            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-sm border border-slate-200">A.Md.Kom.</span>
            <span>Full-Stack Developer</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl font-light">
            Berpengalaman merancang aplikasi pelayanan publik dan solusi digital yang berdampak. Membangun performa tinggi dengan <strong className="text-slate-800 font-semibold">Laravel, React.js, dan Flutter</strong>.
          </motion.p>
          
          {/* Tombol Aksi */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
            
            {/* 1. TOMBOL DOWNLOAD CV (Warna Biru / Sky-500) */}
            <button 
              onClick={() => handleDownload('/CV_Muhammad_Cepy.pdf', 'CV_Muhammad_Cepy.pdf', 'CV')}
              className="group relative px-7 py-3.5 bg-sky-500 text-white text-sm md:text-base font-bold rounded-xl overflow-hidden shadow-lg shadow-sky-500/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/50 active:scale-95 flex items-center gap-2 cursor-pointer border-none"
            >
              <span className="relative z-10">Unduh CV</span>
              <i className="fas fa-file-alt relative z-10 group-hover:-translate-y-1 transition-transform text-sm"></i>
              {/* Efek Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* 2. TOMBOL DOWNLOAD SKL (Warna Gelap / Slate-900) */}
            <button 
              onClick={() => handleDownload('/SKL_318_2303017_MUHAMMAD_CEPY.pdf', 'SKL_318_2303017_MUHAMMAD_CEPY.pdf', 'SKL')}
              className="group relative px-7 py-3.5 bg-slate-900 text-white text-sm md:text-base font-semibold rounded-xl overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-95 flex items-center gap-2 cursor-pointer border-none"
            >
              <span className="relative z-10">Unduh SKL</span>
              <i className="fas fa-graduation-cap relative z-10 group-hover:-translate-y-1 transition-transform text-sm"></i>
            </button>

          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-5">
            <span className="text-slate-400 font-medium text-xs tracking-widest uppercase">Connect</span>
            <div className="h-[1px] w-8 bg-slate-300"></div>
            <div className="flex gap-3">
              {['github', 'linkedin-in', 'dribbble'].map((icon, index) => (
                <a 
                  key={index}
                  href={icon === 'github' ? "https://github.com/muhammadcepy" : "#"}
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 flex items-center justify-center bg-white border border-slate-200 text-slate-500 rounded-full shadow-sm hover:bg-slate-900 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <i className={`fab fa-${icon} text-base`}></i>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* KOLOM KANAN: Foto & Floating Elements (Dikecilkan) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-[45%] xl:w-[40%] relative flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          {/* Main Photo Card */}
          <motion.div 
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.02, cursor: "grabbing" }}
            className="relative w-full max-w-[240px] h-[300px] sm:max-w-[260px] sm:h-[340px] md:max-w-[320px] md:h-[400px] rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white shadow-xl p-2.5 z-10 mx-auto lg:mx-0 group cursor-grab"
          >
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative pointer-events-none bg-slate-200">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10"></div>
              <img src="san.png" alt="Foto Muhammad Cepy" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
            </div>
          </motion.div>

          {/* Stat Card */}
          <motion.div
            drag
            dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 -left-4 md:top-12 md:-left-8 z-30 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-slate-100 cursor-grab"
          >
            <div className="flex items-center gap-3 pointer-events-none">
              <div className="w-10 h-10 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center text-lg">
                <i className="fas fa-check-circle"></i>
              </div>
              
            </div>
          </motion.div>

          {/* Floating Icon 1: Laravel */}
          <motion.div 
            drag
            dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 right-2 md:-top-6 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl shadow-md flex items-center justify-center text-red-500 text-2xl z-20 border border-slate-100 cursor-grab hover:scale-110 transition-transform"
          >
            <i className="fab fa-laravel pointer-events-none"></i>
          </motion.div>

          {/* Floating Icon 2: React */}
          <motion.div 
            drag
            dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
            animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -left-6 md:bottom-16 md:-left-8 w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-xl shadow-md flex items-center justify-center text-sky-400 text-xl z-20 border border-slate-700 cursor-grab hover:scale-110 transition-transform"
          >
            <i className="fab fa-react pointer-events-none"></i>
          </motion.div>

          {/* Floating Icon 3: PHP/DB */}
          <motion.div 
            drag
            dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-4 right-6 md:-bottom-6 md:right-12 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-indigo-500 text-3xl z-20 border-[3px] border-slate-50 cursor-grab hover:scale-110 transition-transform"
          >
            <i className="fab fa-php pointer-events-none"></i>
          </motion.div>

        </motion.div>
      </div>
    </header>
  );
};

export default Hero;