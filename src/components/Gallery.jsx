import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  // State untuk menyimpan data gambar yang sedang diklik
  const [selectedImage, setSelectedImage] = useState(null);

  // Data gambar yang sudah disesuaikan dengan foto aslimu
  const galleryItems = [
    {
      id: 1,
      src: '/presentasi.jpeg', 
      span: 'md:col-span-2 lg:col-span-7', 
      title: 'Rapat Koordinasi Sistem',
      subtitle: 'Presentasi dan diskusi kebutuhan sistem bersama pihak Perumdam Tirta Darma Ayu',
    },
    {
      id: 2,
      src: '/timdev.jpeg',
      span: 'md:col-span-1 lg:col-span-5', 
      title: 'Proses Development',
      subtitle: 'Fase pengerjaan teknis dan coding aplikasi Banyu Digital bersama tim',
    },
    {
      id: 3,
      src: '/fotbar_dirut.jpeg',
      span: 'md:col-span-1 lg:col-span-5',
      title: 'Bersama Jajaran Direksi',
      subtitle: 'Momen kebersamaan dengan jajaran pimpinan usai pemaparan progres proyek',
    },
    {
      id: 4,
      src: '/launching.jpeg',
      span: 'md:col-span-2 lg:col-span-7',
      title: 'Peluncuran Banyu Digital',
      subtitle: 'Acara launching resmi aplikasi pada 5 Maret 2026 yang dihadiri Bupati Indramayu',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6 md:px-12 xl:px-20 w-full overflow-hidden relative">
      
      {/* Bagian Header Gallery */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-600 font-bold text-sm tracking-wider uppercase mb-4 inline-block">
          Dokumentasi
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
          Galeri <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">Kegiatan</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl font-light">
          Momen perjalanan selama magang, kolaborasi tim, dan proses menjalin kemitraan dalam membangun solusi digital.
        </p>
      </motion.div>

      {/* Grid Asimetris Gallery */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full"
      >
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            onClick={() => setSelectedImage(item)} // Fungsi memanggil modal saat diklik
            className={`relative rounded-[2rem] overflow-hidden group h-[300px] md:h-[400px] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${item.span} border border-slate-200 bg-white`}
          >
            {/* Gambar */}
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay Gradient (Muncul saat di-hover / transparan di awal) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
            
            {/* Teks Konten */}
            <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
              {/* Ikon diubah jadi ikon expand/klik agar lebih intuitif */}
              <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-lg">
                <i className="fas fa-expand-arrows-alt"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sky-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* MODAL POP-UP (LIGHTBOX) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Tutup jika area luar diklik
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat area dalam modal diklik
              className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Tombol Close */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              >
                <i className="fas fa-times text-lg"></i>
              </button>

              {/* Area Gambar Pop-up */}
              <div className="w-full md:w-3/5 bg-slate-100 relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-[40vh] md:h-[70vh] object-cover"
                />
              </div>

              {/* Area Teks Detail */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6 w-max">
                  <i className="fas fa-image"></i> Detail Momen
                </div>
                <h3 className="text-3xl font-black text-slate-800 mb-4 leading-tight">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
                  {selectedImage.subtitle}
                </p>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="mt-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors self-start"
                >
                  Tutup Gambar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;