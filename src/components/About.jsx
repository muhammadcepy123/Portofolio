import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('profil');

  const menuTabs = [
    { id: 'profil', name: 'Profil & Latar Belakang', icon: 'fas fa-user' },
    { id: 'skills', name: 'Tech Stack & Tools', icon: 'fas fa-layer-group' },
    { id: 'biodata', name: 'Informasi Personal', icon: 'fas fa-id-card' }
  ];

  const techStack = [
    { name: 'Laravel', icon: 'fab fa-laravel', color: 'text-red-500', bg: 'bg-red-50' },
    { name: 'React.js', icon: 'fab fa-react', color: 'text-sky-500', bg: 'bg-sky-50' },
    { name: 'Flutter', icon: 'fab fa-app-store-ios', color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'PHP', icon: 'fab fa-php', color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { name: 'Tailwind', icon: 'fas fa-wind', color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { name: 'MySQL', icon: 'fas fa-database', color: 'text-amber-500', bg: 'bg-amber-50' },
  ];

  return (
    <section id="about" className="w-full py-32 px-6 md:px-12 xl:px-20 bg-[#fafcff] relative overflow-hidden">
      
      {/* ANIMATED BACKGROUND BLOBS */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-sky-300/30 via-indigo-300/20 to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/4 translate-x-1/4"
      ></motion.div>
      <motion.div 
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-300/20 via-sky-300/20 to-transparent rounded-full blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4"
      ></motion.div>

      {/* HEADER SECTION */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-sky-600 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm"
        >
          <i className="fas fa-fingerprint"></i> Kenali Lebih Dekat
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-6"
        >
          Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Saya.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-light"
        >
          Eksplorasi latar belakang, keahlian, dan informasi personal saya melalui panel interaktif di bawah ini.
        </motion.p>
      </div>

      {/* MASSIVE MACOS WINDOW CONTAINER */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_80px_-15px_rgba(0,0,0,0.1)] border border-white overflow-hidden flex flex-col md:flex-row relative z-10"
      >
        
        {/* SIDEBAR NAVIGATION */}
        <div className="w-full md:w-80 bg-slate-50/50 backdrop-blur-md border-b md:border-b-0 md:border-r border-slate-200 flex flex-col shrink-0">
          <div className="hidden md:flex items-center gap-2.5 px-8 py-6 border-b border-slate-200">
            <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-inner"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-inner"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-inner"></div>
          </div>

          <div className="flex flex-row md:flex-col p-4 md:p-6 gap-3 overflow-x-auto custom-scrollbar">
            {menuTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all whitespace-nowrap md:whitespace-normal text-left relative overflow-hidden group ${
                  activeTab === tab.id 
                    ? 'bg-white text-sky-600 shadow-md border border-slate-100' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-white/60 border border-transparent'
                }`}
              >
                {activeTab === tab.id && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-sky-500 rounded-r-full"></span>
                )}
                <i className={`${tab.icon} text-lg ${activeTab === tab.id ? 'text-sky-500' : 'text-slate-400 group-hover:text-sky-400 transition-colors'}`}></i>
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 p-8 md:p-14 min-h-[450px] relative">
          <AnimatePresence mode="wait">
            
            {/* KONTEN 1: PROFIL */}
            {activeTab === 'profil' && (
              <motion.div
                key="profil"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6 w-max border border-indigo-100">
                  <i className="fas fa-hand-sparkles text-base"></i> Halo, Kawan!
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.2]">
                  Membangun Solusi Digital dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Kode yang Bersih.</span>
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed font-light mb-6">
                  Saya adalah lulusan <strong>D3 Teknik Informatika dari Politeknik Negeri Indramayu</strong> yang berdedikasi tinggi pada rekayasa perangkat lunak. Saya terbiasa merancang aplikasi mulai dari konsep dasar hingga implementasi penuh, baik berbasis web maupun mobile.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed font-light mb-10">
                  Fokus utama saya adalah menciptakan produk yang tidak hanya berfungsi dengan baik, namun juga memiliki struktur <em>database</em> yang efisien dan antarmuka pengguna (UI) yang nyaman dilihat.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {['Problem Solver', 'Adaptif', 'Clean Code'].map((badge, i) => (
                    <span key={i} className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-full flex items-center gap-2 shadow-sm">
                      <i className="fas fa-check-circle text-emerald-500"></i> {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* KONTEN 2: TECH STACK */}
            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-center"
              >
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Keahlian Teknis</h3>
                <p className="text-slate-500 text-lg font-light mb-10">
                  Teknologi dan tools yang sering saya gunakan untuk membangun aplikasi berskala tinggi.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {techStack.map((tech, idx) => (
                    <div 
                      key={idx}
                      className="group flex flex-col items-center justify-center p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:border-sky-200 transition-all duration-300 cursor-pointer"
                    >
                      <div className={`w-16 h-16 ${tech.bg} rounded-2xl flex items-center justify-center text-4xl ${tech.color} mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm`}>
                        <i className={tech.icon}></i>
                      </div>
                      <span className="font-bold text-slate-800 text-lg group-hover:text-sky-600 transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* KONTEN 3: BIODATA */}
            {activeTab === 'biodata' && (
              <motion.div
                key="biodata"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-center"
              >
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-10">Informasi Personal</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="flex items-center gap-5 p-6 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-2xl text-sky-500 shrink-0">
                      <i className="fas fa-calendar-alt"></i>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Usia</h4>
                      <p className="text-xl font-black text-slate-800">21 Tahun</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-6 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-2xl text-indigo-500 shrink-0">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Domisili</h4>
                      <p className="text-xl font-black text-slate-800">Indramayu, Jawa Barat</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-6 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow md:col-span-2">
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-2xl text-emerald-500 shrink-0">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Pendidikan Terakhir</h4>
                      <p className="text-xl font-black text-slate-800">D3 Teknik Informatika <span className="text-slate-500 font-medium text-base ml-2 bg-slate-100 px-3 py-1 rounded-lg">(A.Md.Kom.)</span></p>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default About;