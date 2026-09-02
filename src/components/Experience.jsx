import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const journeyData = [
    {
      id: 1,
      type: 'Pengalaman',
      period: 'Juli – Des 2025',
      title: 'Web & App Developer (Magang)',
      place: 'Perumdam Tirta Darma Ayu, Indramayu',
      desc: 'Merancang dan mengembangkan produk aplikasi bernama "Banyu Digital". Mempermudah akses dan pelayanan informasi bagi masyarakat Kabupaten Indramayu, meliputi integrasi sistem dasar dan koordinasi tim teknis.',
      icon: 'fas fa-laptop-code',
      color: 'sky',
      tags: ['Laravel', 'Flutter', 'API Integration', 'Team Work']
    },
    {
      id: 2,
      type: 'Pendidikan',
      period: 'Lulus 2026',
      title: 'D3 Teknik Informatika',
      place: 'Politeknik Negeri Indramayu',
      desc: 'Fokus pada pengembangan perangkat lunak modern, mulai dari arsitektur backend, integrasi API, hingga pembuatan antarmuka aplikasi web dan mobile.',
      icon: 'fas fa-user-graduate',
      color: 'emerald',
      tags: ['Software Engineering', 'Database', 'UI/UX']
    },
    {
      id: 3,
      type: 'Pengalaman',
      period: 'Jan – Mar 2022',
      title: 'Program Magang Industri',
      place: 'Badan Keuangan Daerah Kab. Indramayu',
      desc: 'Membantu pencatatan, pengarsipan, dan pengelolaan administrasi data aset daerah. Terbiasa mengelola dokumen fisik/digital serta menyusun laporan operasional.',
      icon: 'fas fa-building',
      color: 'indigo',
      tags: ['Administration', 'Data Management', 'Reporting']
    },
    {
      id: 4,
      type: 'Pendidikan',
      period: 'Lulus 2023',
      title: 'Jurusan Perkantoran',
      place: 'SMK Negeri 1 Indramayu',
      desc: 'Mempelajari dasar administrasi, kearsipan, dan manajemen manajerial perkantoran yang membentuk kedisiplinan kerja.',
      icon: 'fas fa-school',
      color: 'amber',
      tags: ['Discipline', 'Archive', 'Management']
    }
  ];

  // SOLUSI TAILWIND: Mapping warna eksplisit agar class tidak terhapus saat build production
  const themeColors = {
    sky: {
      bg: 'bg-sky-500',
      text: 'text-sky-500',
      border: 'border-sky-500',
      shadow: 'shadow-sky-500/40',
      bgLight: 'bg-sky-500/20',
      borderLight: 'border-sky-500/30',
      textLight: 'text-sky-400'
    },
    emerald: {
      bg: 'bg-emerald-500',
      text: 'text-emerald-500',
      border: 'border-emerald-500',
      shadow: 'shadow-emerald-500/40',
      bgLight: 'bg-emerald-500/20',
      borderLight: 'border-emerald-500/30',
      textLight: 'text-emerald-400'
    },
    indigo: {
      bg: 'bg-indigo-500',
      text: 'text-indigo-500',
      border: 'border-indigo-500',
      shadow: 'shadow-indigo-500/40',
      bgLight: 'bg-indigo-500/20',
      borderLight: 'border-indigo-500/30',
      textLight: 'text-indigo-400'
    },
    amber: {
      bg: 'bg-amber-500',
      text: 'text-amber-500',
      border: 'border-amber-500',
      shadow: 'shadow-amber-500/40',
      bgLight: 'bg-amber-500/20',
      borderLight: 'border-amber-500/30',
      textLight: 'text-amber-400'
    }
  };

  const [activeItem, setActiveItem] = useState(journeyData[0]);
  const detailRef = useRef(null); 

  return (
    <section id="experience" className="w-full py-32 px-6 md:px-12 xl:px-20 bg-white relative overflow-hidden">
      
      {/* FLOATING GEOMETRIC BACKGROUND */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-5%] w-64 h-64 border-[40px] border-sky-50 rounded-full z-0"
      ></motion.div>
      <motion.div 
        animate={{ x: [0, 30, 0], rotate: [0, -45, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[-5%] w-80 h-80 border-[30px] border-indigo-50 rounded-[3rem] z-0"
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-widest mb-6"
          >
            <i className="fas fa-compass text-indigo-500 text-base"></i> Eksplorasi Perjalanan
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-6"
          >
            Jejak <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Karir & Edukasi.</span>
          </motion.h2>
        </div>

        {/* INTERACTIVE SHOWCASE LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* KOLOM KIRI: Daftar Menu / Master List */}
          <div className="w-full lg:w-2/5 flex flex-col gap-4">
            
            {/* PENANDA VISUAL BARU: Teks Instruksi */}
            <div className="flex items-center gap-2 mb-2 pl-2">
              <i className="fas fa-hand-point-down text-sky-500 animate-bounce text-sm"></i>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Klik kotak di bawah untuk melihat detail
              </span>
            </div>

            {journeyData.map((item) => {
              const isActive = activeItem.id === item.id;
              const theme = themeColors[item.color];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  onClick={() => {
                    setActiveItem(item);
                    if (window.innerWidth < 1024 && detailRef.current) {
                      setTimeout(() => {
                        detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }, 200);
                    }
                  }}
                  className={`cursor-pointer rounded-[2rem] p-5 md:p-6 transition-all duration-300 border-l-8 flex items-center justify-between group ${
                    isActive 
                      ? `bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ${theme.border} scale-105 z-10` 
                      : 'bg-slate-50 border-transparent hover:bg-slate-100 hover:scale-[1.02]'
                  }`}
                >
                  {/* Ikon & Teks Info */}
                  <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${
                      isActive 
                        ? `${theme.bg} text-white shadow-lg ${theme.shadow}` 
                        : 'bg-white text-slate-400 border border-slate-200 group-hover:text-slate-600'
                    }`}>
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <p className={`text-xs font-black uppercase tracking-widest mb-1 transition-colors ${isActive ? theme.text : 'text-slate-400'}`}>
                        {item.period}
                      </p>
                      <h4 className={`text-lg font-bold transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-800'}`}>
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  {/* PENANDA VISUAL BARU: Ikon Panah (Chevron) */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive 
                      ? `${theme.bg} text-white shadow-md` 
                      : 'bg-slate-200 text-slate-400 group-hover:bg-slate-300 group-hover:text-slate-700'
                  }`}>
                    <i className={`fas fa-chevron-right text-sm ${!isActive && 'group-hover:translate-x-1 transition-transform'}`}></i>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* KOLOM KANAN: Layar Detail / Spotlight */}
          <div ref={detailRef} className="w-full lg:w-3/5 scroll-mt-24">
            <div className="bg-slate-900 rounded-[3rem] shadow-2xl p-8 md:p-14 min-h-[500px] relative overflow-hidden flex flex-col justify-center border border-slate-800">
              
              {/* Glow Belakang */}
              <div className={`absolute top-0 right-0 w-96 h-96 ${themeColors[activeItem.color].bgLight} blur-[100px] rounded-full pointer-events-none transition-colors duration-700`}></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-8 ${themeColors[activeItem.color].bgLight} ${themeColors[activeItem.color].textLight} border ${themeColors[activeItem.color].borderLight}`}>
                    <i className={activeItem.icon}></i> {activeItem.type}
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                    {activeItem.title}
                  </h3>
                  
                  <h4 className="text-xl md:text-2xl text-slate-400 font-medium mb-10 flex items-center gap-3">
                    <i className="fas fa-map-marker-alt text-slate-500"></i> {activeItem.place}
                  </h4>
                  
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-12">
                    {activeItem.desc}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {activeItem.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm font-bold rounded-xl"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`bg-${activeItem.id}`}
                  initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
                  animate={{ opacity: 0.05, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.2, rotate: 30 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute -bottom-10 -right-10 text-[250px] ${themeColors[activeItem.color].text} pointer-events-none z-0`}
                >
                  <i className={activeItem.icon}></i>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;