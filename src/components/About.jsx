import { motion } from 'framer-motion';

const About = () => {
  const techStack = [
    { name: 'Laravel', icon: 'fab fa-laravel text-red-500' },
    { name: 'React.js', icon: 'fab fa-react text-sky-400' },
    { name: 'Tailwind CSS', icon: 'fas fa-wind text-teal-400' },
    { name: 'MySQL', icon: 'fas fa-database text-blue-500' },
    { name: 'PHP', icon: 'fab fa-php text-indigo-400' },
    { name: 'JavaScript', icon: 'fab fa-js text-yellow-400' },
    { name: 'Git & GitHub', icon: 'fab fa-git-alt text-orange-500' },
    { name: 'Figma', icon: 'fab fa-figma text-pink-500' },
  ];

  const personalInfo = [
    { icon: 'fas fa-graduation-cap', label: 'D3 Teknik Informatika' },
    { icon: 'fas fa-map-marker-alt', label: 'Indramayu, Jawa Barat' },
    { icon: 'fas fa-envelope', label: 'muhammadcepy123@gmail.com' },
    { icon: 'fas fa-calendar-alt', label: 'Lahir (2004)' },
  ];

  const stats = [
    { count: '2+', label: 'Sertifikat', icon: 'fas fa-medal text-amber-500' },
    { count: '3+', label: 'Project Besar', icon: 'fas fa-briefcase text-red-500' },
    { count: '1+', label: 'Tahun Belajar', icon: 'fas fa-code text-sky-500' },
  ];

  return (
    <section id="about" className="w-full py-28 px-6 md:px-12 xl:px-20 bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* --- BACKGROUND AMBIENT GLOW & ACCENTS --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]"></div>
        
        {/* Dotted Accents */}
        <div className="absolute top-[10%] left-[5%] grid grid-cols-4 gap-2 opacity-20">
          {[...Array(16)].map((_, i) => <div key={i} className="w-1 h-1 bg-red-500 rounded-full"></div>)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* GRID UTAMA: KIRI (FOTO & QUOTE CARD) | KANAN (TEKS & DETAIL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= SISI KIRI: FOTO & KUTIPAN ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Kotak Foto Utama dengan Latar Belakang Plakat Merah */}
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-red-500/30 bg-gradient-to-br from-[#161616] to-[#0a0a0a] shadow-[0_0_40px_rgba(239,68,68,0.15)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
              <img 
                src="san.png" 
                alt="Muhammad Cepy" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 relative z-0"
              />

              {/* Floating Badge di dalam foto */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl z-20 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center text-lg shrink-0">
                  <i className="fas fa-code"></i>
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">Full-Stack Developer</h4>
                  <p className="text-slate-400 text-xs">Web & Mobile Developer</p>
                </div>
              </div>
            </div>

            {/* Kartu Kutipan (Quote Card) */}
            <div className="bg-[#141414] border border-white/10 p-6 rounded-[2rem] relative shadow-lg">
              <span className="text-red-500 text-3xl font-serif absolute top-4 left-6 opacity-60">“</span>
              <p className="text-slate-300 text-xs md:text-sm font-light italic pl-4 mb-3 leading-relaxed">
                "Terus belajar, terus berkarya, dan memberikan yang terbaik untuk masa depan."
              </p>
              <p className="text-right text-xs font-bold text-red-400 pr-2">— Muhammad Cepy</p>
            </div>
          </motion.div>


          {/* ================= SISI KANAN: KONTENT & INFORMASI ================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#171717] border border-white/10 rounded-full mb-6 w-max shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-300">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Tentang <span className="text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]">Saya.</span>
            </h2>

            <p className="text-slate-400 text-sm md:text-base font-light mb-6 flex items-center gap-2">
              Kenalan lebih dekat dengan saya 👋
            </p>

            <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed mb-8">
              Saya adalah seorang pengembang perangkat lunak (Developer) yang memiliki minat besar dalam dunia teknologi, khususnya dalam pengembangan aplikasi web dan mobile. Saya selalu berusaha untuk belajar hal baru, meningkatkan kemampuan, dan menciptakan solusi digital yang bermanfaat bagi banyak orang[cite: 22].
            </p>

            {/* Chip Informasi Personal (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {personalInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-3 px-4 py-3 bg-[#141414] border border-white/10 rounded-xl text-xs md:text-sm text-slate-300 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                    <i className={info.icon}></i>
                  </div>
                  <span className="truncate font-medium">{info.label}</span>
                </div>
              ))}
            </div>

            {/* Keahlian Saya (Tech Stack Grid) */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-red-600 rounded-full"></span> Keahlian Saya
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-white/10 rounded-xl text-xs font-semibold text-slate-200 transition-colors">
                    <i className={`${tech.icon} text-base`}></i>
                    <span className="truncate">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pengalaman & Pencapaian (Stats Bar) */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                Pengalaman & Pencapaian
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-[#141414] border border-white/10 p-4 rounded-2xl text-center">
                    <div className="text-xl md:text-2xl font-black text-white mb-1 flex items-center justify-center gap-1.5">
                      <i className={`${stat.icon} text-sm md:text-base`}></i> {stat.count}
                    </div>
                    <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Tombol Lihat Portofolio */}
              <div className="flex justify-end">
                <a 
                  href="#portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-xs md:text-sm font-bold rounded-full transition-all shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                >
                  <span>Lihat Portofolio</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;