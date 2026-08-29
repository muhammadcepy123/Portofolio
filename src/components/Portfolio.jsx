import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      id: 'banyu-app',
      title: 'Banyu Digital Mobile',
      category: 'Mobile App',
      desc: 'Aplikasi mobile terintegrasi untuk mempermudah pelayanan informasi publik, pengaduan, dan pengecekan tagihan bagi pelanggan Perumdam Tirta Darma Ayu.',
      tech: ['Flutter', 'Firebase', 'Dart'],
      image: 'apk.PNG', 
      link: 'https://play.google.com/store/apps/details?id=com.pelayananperumdamtda.app',
      linkText: 'PlayStore',
      icon: 'fas fa-mobile-alt'
    },
    {
      id: 'banyu-web',
      title: 'Banyu Digital Admin',
      category: 'Web Dashboard',
      desc: 'Panel administrasi terpusat yang powerful untuk mengelola data layanan, monitoring pengaduan pelanggan, dan operasional aplikasi secara real-time.',
      tech: ['Laravel', 'Tailwind', 'MySQL'],
      image: 'webadmin.PNG', 
      link: 'https://pelayananperumdamtda.com',
      linkText: 'Kunjungi Web',
      icon: 'fas fa-desktop'
    },
    {
      id: 'deka',
      title: 'Deka Apparel System',
      category: 'Info System',
      desc: 'Sistem informasi manajemen komprehensif untuk bisnis clothing, mencakup pengelolaan inventori barang, transaksi, dan operasional harian toko.',
      tech: ['PHP', 'Bootstrap', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop', 
      link: '#',
      linkText: 'On Progress',
      icon: 'fas fa-store'
    }
  ];

  const [activeId, setActiveId] = useState(projects[0].id);

  return (
    // DIUBAH JADI DARK MODE: bg-[#020617] (Slate 950)
    <section id="portfolio" className="w-full py-32 px-6 md:px-12 xl:px-20 bg-[#020617] relative overflow-hidden">
      
      {/* CINEMATIC GLOWING BACKGROUNDS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      
      {/* NOISE OVERLAY UNTUK KESAN FILM/PREMIUM */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>

      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-20 text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 border border-white/10"
        >
          <i className="fas fa-layer-group"></i> Showcase Eksklusif
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6"
        >
          Karya & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Inovasi.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl font-light mb-4"
        >
          Eksplorasi ide menjadi solusi nyata. Arahkan kursor atau klik pada panel di bawah ini untuk melihat keajaiban dari masing-masing proyek.
        </motion.p>
      </div>

      {/* ACCORDION GALLERY CONTAINER (Lebih Besar) */}
      <div className="max-w-[90rem] mx-auto w-full flex flex-col lg:flex-row h-[800px] lg:h-[600px] gap-4 md:gap-6 relative z-10">
        
        {projects.map((project) => {
          const isActive = activeId === project.id;
          
          return (
            <motion.div
              key={project.id}
              layout 
              onClick={() => setActiveId(project.id)}
              onMouseEnter={() => setActiveId(project.id)} 
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className={`relative rounded-[2.5rem] overflow-hidden cursor-pointer group flex flex-col justify-end
                ${isActive ? 'lg:flex-[5] flex-[4]' : 'lg:flex-[1] flex-[1]'} 
                min-h-[100px] lg:min-w-[120px] bg-slate-900 border border-white/10`}
            >
              
              <motion.img
                layout="position"
                src={project.image}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out
                  ${isActive ? 'scale-105 grayscale-0 opacity-100' : 'scale-100 grayscale opacity-30 group-hover:opacity-60'}
                `}
              />

              <div className={`absolute inset-0 transition-all duration-500 bg-gradient-to-t 
                ${isActive ? 'from-[#020617] via-[#020617]/50 to-transparent' : 'from-[#020617]/90 to-[#020617]/40'}
              `}></div>

              <motion.div layout="position" className="relative z-10 p-6 md:p-10 flex flex-col justify-end h-full w-full">
                
                <div className="flex items-center gap-5 mb-2 overflow-hidden">
                  <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-xl border transition-all duration-500
                    ${isActive ? 'bg-cyan-500 border-cyan-400 text-slate-900 shadow-[0_0_30px_rgba(34,211,238,0.5)]' : 'bg-white/10 border-white/20 text-white'}
                  `}>
                    <i className={`${project.icon} text-2xl`}></i>
                  </div>
                  
                  <motion.div layout="position" className="flex flex-col justify-center min-w-[250px]">
                    <span className={`text-sm font-black uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-white whitespace-nowrap truncate">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: 20 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 20 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mt-4"
                    >
                      <p className="text-slate-300 mb-8 max-w-2xl text-base md:text-lg font-light leading-relaxed">
                        {project.desc}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((t, i) => (
                            <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold rounded-xl">
                              {t}
                            </span>
                          ))}
                        </div>

                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 font-black text-base rounded-full hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all shrink-0"
                        >
                          {project.linkText} <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;