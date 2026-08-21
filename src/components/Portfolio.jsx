import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Data Portofolio
  const projects = [
    {
      id: 'banyu-app',
      title: 'Banyu Digital Mobile',
      category: 'Mobile Application',
      desc: 'Aplikasi mobile terintegrasi untuk mempermudah pelayanan informasi publik, pengaduan, dan pengecekan tagihan bagi pelanggan Perumdam Tirta Darma Ayu.',
      tech: ['Flutter', 'Firebase', 'Dart'],
      image: 'apk.PNG',
      link: 'https://play.google.com/store/apps/details?id=com.pelayananperumdamtda.app',
      linkText: 'Lihat di PlayStore'
    },
    {
      id: 'banyu-web',
      title: 'Banyu Digital Admin',
      category: 'Web Dashboard',
      desc: 'Panel administrasi terpusat yang powerful untuk mengelola data layanan, monitoring pengaduan pelanggan, dan operasional aplikasi secara real-time.',
      tech: ['Laravel', 'Tailwind CSS', 'MySQL'],
      image: 'webadmin.PNG',
      link: 'https://pelayananperumdamtda.com',
      linkText: 'Kunjungi Website'
    },
    {
      id: 'deka',
      title: 'Deka Apparel System',
      category: 'Information System',
      desc: 'Sistem informasi manajemen komprehensif untuk bisnis clothing, mencakup pengelolaan inventori barang, transaksi, dan operasional harian toko.',
      tech: ['PHP', 'Bootstrap', 'MySQL'],
      image: 'https://via.placeholder.com/1200x800/0f172a/ffffff?text=Deka+Apparel+System',
      link: '#',
      linkText: 'Dalam Pengembangan'
    }
  ];

  return (
    <section id="portfolio" className="w-full py-24 px-6 md:px-12 xl:px-20 bg-white relative">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold text-dark tracking-tight mb-6">
          Karya <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Pilihan.</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-2xl">
          Eksplorasi dari ide menjadi solusi nyata. Berikut adalah beberapa proyek unggulan yang saya bangun dari nol hingga produksi.
        </p>
      </motion.div>

      {/* Daftar Proyek (Alternating Layout) */}
      <div className="flex flex-col gap-24 lg:gap-32">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={project.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16 group`}>
              
              {/* Bagian Gambar (Kiri/Kanan selang-seling) */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                className="w-full lg:w-3/5 relative rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Overlay Hitam Transparan saat Hover */}
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                
                {/* Efek Parallax/Zoom Halus pada Gambar */}
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover relative z-0"
                />

                {/* Tombol "Lihat Detail" Melayang */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span className="px-6 py-3 bg-white/90 backdrop-blur-md text-dark font-bold rounded-full shadow-lg transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                    Lihat Detail <i className="fas fa-expand ml-2"></i>
                  </span>
                </div>
              </motion.div>

              {/* Bagian Teks & Info */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                className="w-full lg:w-2/5 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary font-extrabold text-xl">0{index + 1}</span>
                  <div className="h-px bg-slate-300 w-12"></div>
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">{project.category}</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-extrabold text-dark mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-5 py-2 bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Modal / Pop-up Super Elegan (Pengganti versi kaku sebelumnya) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setSelectedProject(null)} // Klik background untuk tutup
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              // TAMBAHAN: max-h-[90vh] dan overflow-y-auto agar modal bisa di-scroll di dalam HP
              className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()} // Cegah tutup saat klik area modal
            >
              <button 
                onClick={() => setSelectedProject(null)} 
                // TAMBAHAN: Ubah absolute top-4 menjadi sticky/fixed agar tombol close tetap terlihat saat di-scroll
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md text-dark rounded-full flex items-center justify-center text-xl hover:bg-red-500 hover:text-white transition-colors shadow-sm"
              >
                <i className="fas fa-times"></i>
              </button>

              <div className="w-full h-64 md:h-80 bg-slate-100 overflow-hidden relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-8 md:p-12 flex flex-col items-center text-center">
                <h3 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">{selectedProject.title}</h3>
                <p className="text-lg text-slate-600 mb-8 max-w-xl">{selectedProject.desc}</p>
                
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-10 py-4 bg-primary text-white text-lg font-bold rounded-full shadow-lg shadow-sky-200 hover:bg-dark hover:shadow-none hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                >
                  {selectedProject.linkText} <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  );
};

export default Portfolio;