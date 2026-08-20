import { motion } from 'framer-motion';

const Experience = () => {
  // Data disatukan dan diurutkan secara rapi
  const timelineData = [
    {
      type: 'Pengalaman',
      period: 'Juli – Des 2025',
      title: 'Web & App Developer (Magang)',
      place: 'Perumdam Tirta Darma Ayu, Indramayu',
      desc: 'Merancang dan mengembangkan produk aplikasi bernama "Banyu Digital". Mempermudah akses dan pelayanan informasi bagi masyarakat Kabupaten Indramayu, meliputi integrasi sistem dasar dan koordinasi tim teknis.',
    },
    {
      type: 'Pendidikan',
      period: 'Lulus 2026',
      title: 'D3 Teknik Informatika',
      place: 'Politeknik Negeri Indramayu',
      desc: 'Fokus pada pengembangan perangkat lunak modern, mulai dari arsitektur backend, integrasi API, hingga pembuatan antarmuka aplikasi web dan mobile.',
    },
    {
      type: 'Pengalaman',
      period: 'Jan – Mar 2022',
      title: 'Program Magang Industri',
      place: 'Badan Keuangan Daerah Kab. Indramayu',
      desc: 'Membantu pencatatan, pengarsipan, dan pengelolaan administrasi data aset daerah. Terbiasa mengelola dokumen fisik/digital serta menyusun laporan operasional.',
    },
    {
      type: 'Pendidikan',
      period: 'Lulus 2023',
      title: 'Jurusan Perkantoran',
      place: 'SMK Negeri 1 Indramayu',
      desc: 'Mempelajari dasar administrasi, kearsipan, dan manajemen manajerial perkantoran yang membentuk kedisiplinan kerja.',
    }
  ];

  return (
    <section id="experience" className="w-full py-24 px-6 md:px-12 xl:px-20 bg-slate-50">
      <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* Bagian Kiri (Sticky Sidebar) */}
        <div className="w-full lg:w-1/3">
          {/* Efek sticky membuat judul diam saat sebelahnya di-scroll */}
          <div className="sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-dark leading-tight mb-6 tracking-tight">
                Jejak <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Karir & <br /> Edukasi.
                </span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                Kombinasi antara landasan akademis yang kuat dan pengalaman terjun langsung ke industri dalam membangun solusi nyata.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bagian Kanan (Daftar List Interaktif) */}
        <div className="w-full lg:w-2/3 flex flex-col pt-10 lg:pt-0">
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // Efek hover: geser sedikit ke kanan (translate-x)
              whileHover={{ x: 10 }}
              className="group relative border-t-2 border-slate-200 py-12 flex flex-col md:flex-row gap-6 md:gap-12 hover:border-primary transition-all duration-300 cursor-default"
            >
              {/* Kolom Tahun & Label */}
              <div className="md:w-1/3 shrink-0">
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 transition-colors duration-300 ${
                  item.type === 'Pengalaman' 
                    ? 'bg-sky-100 text-primary group-hover:bg-primary group-hover:text-white' 
                    : 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white'
                }`}>
                  {item.type}
                </span>
                <p className="text-2xl md:text-3xl font-extrabold text-slate-300 group-hover:text-dark transition-colors duration-300">
                  {item.period}
                </p>
              </div>
              
              {/* Kolom Deskripsi Pekerjaan */}
              <div className="md:w-2/3 relative">
                <h3 className="text-3xl font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <h4 className="text-xl text-slate-500 mb-6 font-medium">
                  {item.place}
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Ikon panah tersembunyi yang muncul saat di-hover */}
                <div className="absolute top-2 right-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-2xl text-primary hidden sm:block">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Garis penutup paling bawah */}
          <div className="border-t-2 border-slate-200 w-full"></div>
        </div>

      </div>
    </section>
  );
};

export default Experience;