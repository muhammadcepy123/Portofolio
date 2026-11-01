import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const Hero = () => {
  const handleDownload = async (fileUrl, fileName, docType) => {
    try {
      Swal.fire({
        title: 'Memproses...',
        text: `Menyiapkan ${docType}`,
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => Swal.showLoading()
      });

      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error('File tidak ditemukan');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      Swal.fire({ icon: 'success', title: 'Berhasil!', text: `${docType} diunduh.`, confirmButtonColor: '#ef4444', timer: 3000 });
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Gagal!', text: `File ${docType} tidak tersedia.`, confirmButtonColor: '#ef4444' });
    }
  };

  return (
    <header id="home" className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden flex items-center pt-32 pb-20 lg:py-0">
      
      {/* --- BACKGROUND NEON GLOW & PATTERNS --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[160px]"></div>
        
        <div className="absolute top-[35%] left-[5%] grid grid-cols-4 gap-2.5 opacity-30">
          {[...Array(16)].map((_, i) => <div key={i} className="w-1 h-1 bg-red-500 rounded-full"></div>)}
        </div>
      </div>

      {/* --- MAIN CONTAINER --- */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
        
        {/* KOLOM KIRI: TEKS UTAMA */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start xl:pr-10 pt-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#171717]/80 border border-white/10 rounded-full mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.9)]"></span>
            <span className="text-[10px] md:text-[11px] font-semibold text-slate-300 tracking-widest uppercase">PORTFOLIO 2026</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight mb-4">
            Muhammad <br />
            <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">Cepy.</span>
          </h1>

          <div className="flex items-center gap-3 text-lg md:text-xl font-bold mb-5">
            <span className="text-slate-200">Full-Stack Developer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span className="text-slate-400">A.Md.Kom.</span>
          </div>

          <p className="text-sm md:text-base text-slate-400 mb-8 max-w-[540px] leading-relaxed font-light">
            Saya merancang dan membangun ekosistem digital dengan arsitektur yang bersih dan performa tinggi. Fokus menghadirkan solusi teknologi yang presisi untuk kebutuhan masa kini.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {[
              { icon: 'fab fa-laravel text-red-500', name: 'Laravel' },
              { icon: 'fab fa-react text-sky-400', name: 'React.js' },
              { icon: 'fas fa-mobile-alt text-blue-400', name: 'Flutter' },
              { icon: 'fab fa-css3 text-teal-400', name: 'Tailwind CSS' },
              { icon: 'fas fa-database text-blue-500', name: 'MySQL' }
            ].map((tech, i) => (
              <div key={i} className="flex items-center gap-2 px-3.5 py-2 bg-[#141414] border border-white/10 rounded-full text-[11px] md:text-xs font-semibold text-slate-300 shadow-inner">
                <i className={tech.icon}></i> {tech.name}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button 
              onClick={() => handleDownload('/CV_Muhammad_Cepy.pdf', 'CV_Muhammad_Cepy.pdf', 'CV')}
              className="px-6 py-3.5 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-bold rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] flex items-center gap-2"
            >
              Unduh CV <i className="fas fa-download text-xs"></i>
            </button>
            <button 
              onClick={() => handleDownload('/SKL_318_2303017_MUHAMMAD_CEPY.pdf', 'SKL_318_2303017_MUHAMMAD_CEPY.pdf', 'SKL')}
              className="px-6 py-3.5 bg-transparent border border-slate-600 text-slate-300 text-sm font-bold rounded-full hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              Unduh SKL <i className="fas fa-file-alt text-xs"></i>
            </button>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="https://wa.me/6287779651205" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadcepy123@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <i className="fas fa-envelope"></i> email
            </a>
          </div>
        </motion.div>

        {/* KOLOM KANAN: FOTO & GLASS CARDS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          {/* Plakat Latar Belakang Merah */}
          <div className="absolute top-[5%] right-[10%] lg:right-[15%] w-[260px] h-[350px] md:w-[320px] md:h-[420px] bg-gradient-to-br from-red-600/40 to-[#0a0a0a] rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl border border-red-500/30 backdrop-blur-sm z-0 shadow-[0_0_50px_rgba(239,68,68,0.2)]"></div>

          {/* Swoosh Light Curve */}
          <div className="absolute top-[55%] left-[-20%] lg:left-[-10%] w-[120%] h-[150px] border-t-2 border-red-500/40 rounded-[50%] blur-[1px] rotate-[-15deg] z-20 pointer-events-none opacity-60"></div>

          {/* Foto Utama Profil */}
          <div className="relative z-10 w-[260px] md:w-[340px] pt-4 flex flex-col justify-end">
            <img 
              src="san.png" 
              alt="Muhammad Cepy" 
              className="w-full h-auto object-contain relative z-10 drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
            />
            <div className="absolute bottom-0 left-[-10%] right-[-10%] h-24 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none"></div>
          </div>

          {/* FLOATING GLASS CARD 1 */}
          <motion.div 
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[-5%] lg:right-[-10%] bg-[#171717]/80 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-2xl shadow-2xl z-30 w-32 md:w-40"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600/20 text-red-500 rounded-lg flex items-center justify-center mb-3">
              <i className="fas fa-code text-sm md:text-base"></i>
            </div>
            <p className="text-white text-sm md:text-base font-bold leading-tight">Developer</p>
            <p className="text-slate-400 text-[9px] md:text-[10px] mt-1">Build. Innovate. Grow.</p>
            <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-red-600 to-transparent mt-3"></div>
          </motion.div>

          {/* FLOATING GLASS CARD 2 */}
          <motion.div 
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[25%] lg:bottom-[20%] right-[-5%] lg:right-[-8%] bg-[#171717]/90 backdrop-blur-md border border-white/10 px-4 py-3 md:px-5 md:py-4 rounded-[1.5rem] shadow-2xl z-30 flex items-center gap-3 md:gap-4"
          >
            <p className="text-white text-xs md:text-sm font-bold leading-tight">
              Turning Ideas <br /> Into Digital Reality
            </p>
            <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-[10px] md:text-xs shadow-[0_0_12px_rgba(239,68,68,0.6)]">
              <i className="fas fa-arrow-right"></i>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </header>
  );
};

export default Hero;