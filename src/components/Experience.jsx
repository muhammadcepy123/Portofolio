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
      desc: 'Merancang dan mengembangkan aplikasi berbasis web dan mobile, serta mempelajari proses kerja pengembangan sistem di lingkungan industri teknologi informasi[cite: 23].',
      icon: 'fas fa-laptop-code',
      achievements: [
        'Mengembangkan fitur aplikasi sesuai kebutuhan',
        'Meningkatkan pemahaman teknologi terkini',
        'Bekerja dalam tim pengembang profesional'
      ],
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
      achievements: [
        'IPK Sangat Memuaskan (3.95)',
        'Menguasai arsitektur MVC & Full-Stack',
        'Aktif dalam riset dan teknologi'
      ],
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
      achievements: [
        'Pengelolaan arsip aset daerah',
        'Penyusunan laporan administratif',
        'Ketepatan dan kedisiplinan tinggi'
      ],
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
      achievements: [
        'Sertifikasi Kompetensi ASPAPI',
        'Manajemen kearsipan profesional',
        'Lulus dengan predikat Sangat Kompeten'
      ],
      tags: ['Discipline', 'Archive', 'Management']
    }
  ];

  const [activeItem, setActiveItem] = useState(journeyData[0]);
  const detailRef = useRef(null); 

  return (
    <section id="experience" className="w-full py-28 px-6 md:px-12 xl:px-20 bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171717] border border-white/10 text-slate-300 font-bold text-xs uppercase tracking-widest mb-4 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span> Perjalanan Saya
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4"
          >
            Jejak <span className="text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]">Karir & Edukasi.</span>
          </motion.h2>
          <p className="text-slate-400 text-sm md:text-base font-light">
            Langkah demi langkah menuju versi terbaik diri saya.
          </p>
        </div>

        {/* INTERACTIVE SHOWCASE LAYOUT */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI: MASTER LIST (4 Item) */}
          <div className="w-full lg:col-span-5 flex flex-col gap-4">
            {journeyData.map((item) => {
              const isActive = activeItem.id === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
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
                  className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 border flex items-center justify-between group ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#1c1c1c] to-[#141414] border-red-500/50 shadow-[0_0_25px_rgba(239,68,68,0.2)]' 
                      : 'bg-[#121212] border-white/5 hover:border-white/15 hover:bg-[#161616]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]' 
                        : 'bg-[#1a1a1a] text-slate-400 border border-white/5'
                    }`}>
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">{item.period}</span>
                        <span className="text-[10px] px-2 py-0.5 bg-white/5 rounded text-slate-400">{item.type}</span>
                      </div>
                      <h4 className={`text-base font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isActive ? 'bg-red-600 text-white' : 'bg-white/5 text-slate-500 group-hover:bg-white/10 group-hover:text-white'
                  }`}>
                    <i className="fas fa-chevron-right text-xs"></i>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* KOLOM KANAN: SPOTLIGHT DETAIL */}
          <div ref={detailRef} className="w-full lg:col-span-7 scroll-mt-24">
            <motion.div 
              className="bg-gradient-to-br from-[#161616] to-[#0f0f0f] rounded-[2.5rem] shadow-2xl p-8 md:p-10 relative overflow-hidden border border-red-500/30 shadow-[0_0_40px_rgba(239,68,68,0.1)]"
            >
              {/* Background Glow Detail */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[90px] rounded-full pointer-events-none"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold mb-6 bg-red-600/20 text-red-400 border border-red-500/30">
                    <i className="fas fa-star text-[10px]"></i> Detail {activeItem.type}
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl font-black text-white mb-3 leading-tight">
                    {activeItem.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-400 font-medium mb-6 pb-6 border-b border-white/10">
                    <span className="flex items-center gap-1.5"><i className="fas fa-map-marker-alt text-red-500"></i> {activeItem.place}</span>
                    <span className="flex items-center gap-1.5"><i className="fas fa-calendar-alt text-red-500"></i> {activeItem.period}</span>
                  </div>
                  
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light mb-8">
                    {activeItem.desc}
                  </p>

                  {/* Bagian Pencapaian */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Pencapaian & Tanggung Jawab
                    </h4>
                    <div className="flex flex-col gap-2.5">
                      {activeItem.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-slate-300 bg-[#121212] border border-white/5 p-3 rounded-xl">
                          <i className="fas fa-check-circle text-red-500 shrink-0"></i>
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {activeItem.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-[#121212] border border-white/10 text-slate-300 text-xs font-semibold rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

            </motion.div>
          </div>

        </div>

        {/* STATS FOOTER BAWAH */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-white/10">
          <div className="bg-[#121212] border border-white/10 p-5 rounded-2xl text-center">
            <h4 className="text-xl md:text-2xl font-black text-white mb-1 flex items-center justify-center gap-2">
              <i className="fas fa-briefcase text-red-500 text-base"></i> 2+
            </h4>
            <p className="text-[11px] text-slate-400 uppercase tracking-wider">Pengalaman Magang</p>
          </div>
          <div className="bg-[#121212] border border-white/10 p-5 rounded-2xl text-center">
            <h4 className="text-xl md:text-2xl font-black text-white mb-1 flex items-center justify-center gap-2">
              <i className="fas fa-graduation-cap text-sky-400 text-base"></i> D3 & SMK
            </h4>
            <p className="text-[11px] text-slate-400 uppercase tracking-wider">Pendidikan Formal</p>
          </div>
          <div className="bg-[#121212] border border-white/10 p-5 rounded-2xl text-center">
            <h4 className="text-xl md:text-2xl font-black text-white mb-1 flex items-center justify-center gap-2">
              <i className="fas fa-medal text-amber-500 text-base"></i> 2+
            </h4>
            <p className="text-[11px] text-slate-400 uppercase tracking-wider">Sertifikasi Resmi</p>
          </div>
          <div className="bg-[#121212] border border-white/10 p-5 rounded-2xl text-center">
            <h4 className="text-xl md:text-2xl font-black text-white mb-1 flex items-center justify-center gap-2">
              <i className="fas fa-rocket text-emerald-400 text-base"></i> 2026
            </h4>
            <p className="text-[11px] text-slate-400 uppercase tracking-wider">Tahun Lulus D3</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;