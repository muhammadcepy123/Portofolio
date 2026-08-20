import { motion } from 'framer-motion';

const About = () => {
  // Data Keahlian untuk animasi berjalan (Running Layout)
  const techStack = [
    { name: 'Laravel', icon: 'fab fa-laravel', color: 'text-red-500' },
    { name: 'PHP', icon: 'fab fa-php', color: 'text-indigo-600' },
    { name: 'Flutter', icon: 'fab fa-app-store-ios', color: 'text-sky-500' },
    { name: 'Tailwind CSS', icon: 'fas fa-wind', color: 'text-cyan-500' },
    { name: 'MySQL', icon: 'fas fa-database', color: 'text-amber-600' },
    { name: 'Git & GitHub', icon: 'fab fa-github', color: 'text-slate-800' },
  ];

  // Kita duplikasi datanya 3 kali agar efek berjalannya (marquee) tidak pernah putus
  const marqueeItems = [...techStack, ...techStack, ...techStack];

  return (
    <section id="about" className="w-full py-24 px-6 md:px-12 xl:px-20 bg-white overflow-hidden relative">
      
      {/* Header Bagian */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">
          Tentang <span className="text-primary">Saya.</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </motion.div>

      {/* Grid Layout Model "Bento Box" */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        
        {/* Kotak 1: Teks Utama (Lebar 2 Kolom) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2 bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-500"
        >
          {/* Dekorasi Air di pojok kotak */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          
          <h3 className="text-2xl font-bold text-dark mb-6">Mengenal Lebih Jauh</h3>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
            Saya adalah seorang lulusan D3 Teknik Informatika dari Politeknik Negeri Indramayu (2026) yang berdedikasi dan berorientasi pada hasil. Saya memiliki minat kuat pada pengembangan Full-Stack menggunakan ekosistem <strong className="text-dark">Laravel, PHP, dan Tailwind CSS</strong>, serta pengembangan aplikasi mobile menggunakan <strong className="text-dark">Flutter</strong>.
          </p>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Saya terbiasa bekerja secara adaptif, responsif, dan siap memberikan kontribusi terbaik di bidang teknologi. Selain keahlian teknis IT, saya juga memiliki kemampuan administrasi dan manajemen perkantoran yang solid.
          </p>
        </motion.div>

        {/* Kotak 2: Info Cepat (Gaya Dark Mode Elegan) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark text-white p-8 md:p-10 rounded-[2rem] relative overflow-hidden flex flex-col justify-center group hover:shadow-xl transition-shadow duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-dark -z-10"></div>
          
          <ul className="flex flex-col gap-6">
            <li className="flex items-center gap-4 group/item">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                <i className="fas fa-hourglass-half"></i>
              </div>
              <div>
                <span className="block text-sm text-slate-400">Usia</span>
                <span className="text-lg font-semibold">21 Tahun</span>
              </div>
            </li>
            
            <li className="flex items-center gap-4 group/item">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <span className="block text-sm text-slate-400">Domisili</span>
                <span className="text-lg font-semibold">Indramayu, Jawa Barat</span>
              </div>
            </li>

            <li className="flex items-center gap-4 group/item">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div>
                <span className="block text-sm text-slate-400">Pendidikan</span>
                <span className="text-lg font-semibold">D3 Teknik Informatika</span>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Kotak 3: Running Layout (Marquee) Tech Stack Lebar Penuh */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-3 bg-white border border-slate-100 p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-center relative"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100/[0.04] bg-[length:32px_32px]"></div>
          
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center mb-8 relative z-10">
            Keahlian Teknis & Tools
          </h4>

          {/* Masking untuk membuat ujung kiri-kanan transparan/memudar */}
          <div className="flex overflow-hidden relative w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
            
            <motion.div
              animate={{ x: ["0%", "-33.33%"] }} // Berjalan sepertiga karena data diduplikasi 3x
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
              className="flex gap-12 min-w-max pr-12 items-center hover:[animation-play-state:paused]" // Berhenti saat di-hover
            >
              {marqueeItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                  <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl ${item.color} group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-300 border border-slate-100`}>
                    <i className={item.icon}></i>
                  </div>
                  <span className="text-xl font-bold text-slate-300 group-hover:text-dark transition-colors duration-300">
                    {item.name}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;