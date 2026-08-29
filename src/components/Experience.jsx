import { useState } from 'react';
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

  const [activeItem, setActiveItem] = useState(journeyData[0]);

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
            {journeyData.map((item) => {
              const isActive = activeItem.id === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  onClick={() => setActiveItem(item)}
                  className={`cursor-pointer rounded-[2rem] p-5 md:p-6 transition-all duration-300 border-l-8 flex items-center justify-between group ${
                    isActive 
                      ? `bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-${item.color}-500 scale-105 z-10` 
                      : 'bg-slate-50 border-transparent hover:bg-slate-100 hover:scale-[1.02]'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${
                      isActive 
                        ? `bg-${item.color}-500 text-white shadow-lg shadow-${item.color}-500/40` 
                        : 'bg-white text-slate-400 border border-slate-200 group-hover:text-slate-600'
                    }`}>
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <p className={`text-xs font-black uppercase tracking-widest mb-1 transition-colors ${isActive ? `text-${item.color}-500` : 'text-slate-400'}`}>
                        {item.period}
                      </p>
                      <h4 className={`text-lg font-bold transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-800'}`}>
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* KOLOM KANAN: Layar Detail / Spotlight */}
          <div className="w-full lg:w-3/5">
            <div className="bg-slate-900 rounded-[3rem] shadow-2xl p-8 md:p-14 min-h-[500px] relative overflow-hidden flex flex-col justify-center border border-slate-800">
              
              {/* Glow Belakang */}
              <div className={`absolute top-0 right-0 w-96 h-96 bg-${activeItem.color}-500/20 blur-[100px] rounded-full pointer-events-none transition-colors duration-700`}></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-8 bg-${activeItem.color}-500/20 text-${activeItem.color}-400 border border-${activeItem.color}-500/30`}>
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
                  className={`absolute -bottom-10 -right-10 text-[250px] text-${activeItem.color}-500 pointer-events-none z-0`}
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