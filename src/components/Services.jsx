import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  // ==========================================
  // STATE UNTUK MODAL PORTFOLIO
  // ==========================================
  const [selectedProject, setSelectedProject] = useState(null);

  // Mencegah scroll pada body ketika modal terbuka
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  // ==========================================
  // DATA SERVICES & ATURAN
  // ==========================================
  const services = [
    {
      id: "web-app",
      title: "Web & Mobile App",
      subtitle: "Sistem Terintegrasi & Powerful",
      color: "sky",
      gradient: "from-sky-400 to-blue-600",
      icon: "fas fa-laptop-code",
      desc: "Hadirkan inovasi bisnis Anda ke dalam genggaman. Saya membangun aplikasi web (Laravel & React) serta mobile app (Flutter) yang siap rilis di PlayStore.",
      features: ["Sistem ERP & Manajemen", "Aplikasi Pengaduan Desa", "Website Pemesanan"]
    },
    {
      id: "portfolio",
      title: "Portofolio Personal",
      subtitle: "Tampil Menonjol di Era Digital",
      color: "indigo",
      gradient: "from-indigo-400 to-purple-600",
      icon: "fas fa-user-astronaut",
      desc: "Rancang website portofolio eksklusif yang berkelas dan menonjolkan kredibilitas profesional Anda untuk memikat HRD maupun calon klien besar.",
      features: ["UI/UX Eksklusif", "Smooth Scroll Animasi", "Domain Custom Pribadi"]
    },
    {
      id: "invitation",
      title: "Digital Invitation",
      subtitle: "Elegan, Praktis & Interaktif",
      color: "rose",
      gradient: "from-rose-400 to-pink-600",
      icon: "fas fa-heart",
      desc: "Bagikan momen spesial Anda dengan undangan digital berbasis website yang interaktif, praktis, dan dapat menjangkau tamu di mana saja.",
      features: ["Tema Undangan Premium", "RSVP & Buku Tamu", "Integrasi Google Maps"]
    }
  ];

  const rules = [
    {
      title: "Jalur Prioritas (Express)",
      icon: "fas fa-shipping-fast",
      color: "text-sky-500",
      bg: "bg-sky-100",
      border: "border-sky-200",
      desc: "Pengerjaan super cepat di luar tenggat normal tersedia. Tarif disesuaikan berdasarkan skala percepatan yang dibutuhkan oleh proyek."
    },
    {
      title: "Scope Creep & Revisi",
      icon: "fas fa-file-signature",
      color: "text-indigo-500",
      bg: "bg-indigo-100",
      border: "border-indigo-200",
      desc: "Revisi minor antarmuka (UI/UX) tidak dikenakan biaya. Penambahan fitur krusial di tengah jalan dihitung sebagai tarif tambahan."
    },
    {
      title: "Termin Pembayaran",
      icon: "fas fa-handshake",
      color: "text-emerald-500",
      bg: "bg-emerald-100",
      border: "border-emerald-200",
      desc: "Proyek dimulai setelah DP (30%-50%) diselesaikan. Pelunasan wajib dibayarkan sebelum kode sumber diserahkan atau aplikasi di-hosting."
    },
    {
      title: "Garansi & Maintenance",
      icon: "fas fa-shield-alt",
      color: "text-rose-500",
      bg: "bg-rose-100",
      border: "border-rose-200",
      desc: "Setiap project yang selesai dilengkapi masa garansi perbaikan bug. Perawatan server berkala tersedia dalam paket berlangganan terpisah."
    }
  ];

  // ==========================================
  // DATA PORTFOLIO YANG BARU & DIPERLUAS
  // ==========================================
  const portfolioProjects = [
    {
      id: 1,
      title: "Banyu Digital Admin",
      category: "Web Dashboard",
      img: "webadmin.PNG",
      desc: "Panel administrasi terpusat yang powerful untuk mengelola data layanan, monitoring pengaduan pelanggan, dan operasional aplikasi secara real-time untuk Perumdam Tirta Darma Ayu.",
      tech: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"]
    },
    {
      id: 2,
      title: "Banyu Mobile App",
      category: "Mobile Application",
      img: "apk.PNG",
      desc: "Aplikasi mobile terintegrasi untuk mempermudah pelayanan informasi publik, pengaduan, dan pengecekan tagihan bagi pelanggan dengan antarmuka yang user-friendly.",
      tech: ["Flutter", "Dart", "Firebase", "REST API"]
    },
    {
      id: 3,
      title: "Pengaduan Desa Admin",
      category: "Web Dashboard",
      img: "pgd-web.png", // Sesuaikan nama file gambar Anda
      desc: "Sistem manajemen keluhan warga untuk perangkat desa. Memungkinkan admin/perangkat desa melacak status laporan, memberikan tindak lanjut, dan mencetak rekapitulasi data.",
      tech: ["Laravel", "Tailwind CSS", "Alpine.js"]
    },
    {
      id: 4,
      title: "Pengaduan Desa Mobile",
      category: "Mobile Application",
      img: "pgd-desa.png", // Sesuaikan nama file gambar Anda
      desc: "Aplikasi mobile interaktif untuk memudahkan masyarakat desa dalam menyampaikan laporan, aspirasi, dan keluhan secara langsung beserta lampiran foto lokasi kejadian.",
      tech: ["Flutter", "Dart", "Geolocation API"]
    },
    {
      id: 5,
      title: "Premium Wedding Invitation",
      category: "Digital Invitation",
      img: "undangann.png",
      desc: "Undangan pernikahan digital berbasis website yang eksklusif. Dilengkapi fitur musik latar, hitung mundur, integrasi Google Maps, RSVP kehadiran, serta ucapan dari tamu.",
      tech: ["React JS", "Framer Motion", "Tailwind CSS"]
    }
  ];

  return (
    <section className="w-full min-h-screen bg-[#fafcff] text-slate-800 pt-32 lg:pt-40 pb-0 font-sans relative overflow-hidden">
      
      {/* ========================================== */}
      {/* BACKGROUND BLOBS */}
      {/* ========================================== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-sky-300/30 via-indigo-300/30 to-purple-300/30 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-sky-200/40 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-200/30 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* ========================================== */}
      {/* 1. HERO SECTION */}
      {/* ========================================== */}
      <div className="w-full px-6 md:px-12 xl:px-20 mb-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-sky-600 font-bold text-xs uppercase tracking-widest mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            Katalog Layanan Digital
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-slate-900 leading-[1.1] tracking-tighter mb-8"
          >
            Wujudkan Ide Anda <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600">
              Tanpa Batas Dimensi.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Saya membangun arsitektur digital (Web & Mobile) yang fungsional sekaligus memberikan pengalaman visual level tertinggi untuk bisnis Anda.
          </motion.p>
        </div>

        {/* Floating Abstract Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-6xl mx-auto bg-white/40 backdrop-blur-xl border border-white rounded-[2.5rem] p-4 md:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-indigo-500/5"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative z-10">
            {['Laravel Framework', 'React & Tailwind', 'Flutter Mobile Apps', 'UI/UX Modern'].map((item, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-md rounded-2xl p-6 text-center shadow-sm border border-white/50 hover:-translate-y-2 transition-transform duration-300">
                <i className={`text-3xl mb-3 text-sky-500 ${i === 0 ? 'fab fa-laravel' : i === 1 ? 'fab fa-react' : i === 2 ? 'fas fa-mobile-alt' : 'fas fa-paint-brush'}`}></i>
                <h4 className="font-bold text-slate-800 text-sm md:text-base">{item}</h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ========================================== */}
      {/* 2. SERVICES SECTION */}
      {/* ========================================== */}
      <div className="w-full px-6 md:px-12 xl:px-20 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 text-left">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Spesialisasi <span className="text-sky-500">Keahlian.</span></h2>
              <p className="text-slate-500 text-lg font-light">Setiap baris kode dirancang khusus untuk memenuhi standar industri skala tinggi.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(14,165,233,0.2)] transition-all duration-500 flex flex-col h-full group relative overflow-hidden ${index === 1 ? 'lg:-translate-y-8' : ''}`}
              >
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-bl-[100%] transition-opacity duration-500`}></div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-2xl mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10`}>
                  <i className={service.icon}></i>
                </div>
                
                <div className="relative z-10 flex-1 flex flex-col text-left">
                  <h4 className={`text-xs font-black uppercase tracking-widest text-${service.color}-500 mb-3`}>{service.subtitle}</h4>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-500 text-base font-light leading-relaxed mb-8 flex-1">{service.desc}</p>
                  
                  <ul className="flex flex-col gap-3 pt-6 border-t border-slate-100">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <div className={`w-6 h-6 rounded-full bg-${service.color}-50 flex items-center justify-center text-${service.color}-500 shrink-0`}>
                          <i className="fas fa-check text-[10px]"></i>
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. HASIL PROJEK (NEW MASONRY/GRID + MODAL) */}
      {/* ========================================== */}
      <div id="portfolio" className="w-full px-6 md:px-12 xl:px-20 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-6 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Efek Cahaya di Dalam Kotak Gelap */}
          <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-sky-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 text-left relative z-10">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sky-400 text-xs font-bold uppercase tracking-widest mb-4 border border-white/10"
              >
                <i className="fas fa-layer-group"></i> Showcase Eksklusif
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">Bukti <span className="text-sky-400">Karya.</span></h2>
              <p className="text-slate-400 text-lg font-light">Eksplorasi ide menjadi solusi nyata. Klik pada karya di bawah untuk melihat detail selengkapnya.</p>
            </div>
          </div>

          {/* GRID LAYOUT SCALABLE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {portfolioProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(proj)}
                className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700 cursor-pointer shadow-lg hover:shadow-sky-500/20 transition-all duration-300"
              >
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                
                {/* Overlay Hitam saat hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Text Content dalam Grid */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-left">
                  <span className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {proj.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {proj.title}
                  </h3>
                  
                  {/* Icon klik */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 border border-white/20">
                    <i className="fas fa-expand-alt"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 4. PRICING SECTION */}
      {/* ========================================== */}
      <div id="pricing" className="w-full px-6 md:px-12 xl:px-20 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Investasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Terjangkau.</span></h2>
            <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">Pilih paket yang paling sesuai dengan skala dan kebutuhan proyek digital Anda saat ini.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* STARTER */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-lg text-left"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-2">Paket Starter</h3>
              <p className="text-slate-500 text-sm mb-8 h-10">Ideal untuk Portofolio, Undangan, atau Landing Page Statis.</p>
              
              <div className="mb-8">
                <span className="text-4xl font-black text-slate-900">80<span className="text-xl font-normal text-slate-500">rb</span> <span className="text-2xl font-light text-slate-300">-</span> 150<span className="text-xl font-normal text-slate-500">rb</span></span>
              </div>
              
              <ul className="flex flex-col gap-4 mb-10 text-sm text-slate-600 font-medium">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-sky-500 text-lg"></i> 1-3 Halaman Web</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-sky-500 text-lg"></i> Desain Responsif (Mobile)</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-sky-500 text-lg"></i> Maksimal 2x Revisi</li>
                <li className="flex items-center gap-3 opacity-40"><i className="fas fa-times-circle text-slate-400 text-lg"></i> Database Dinamis</li>
              </ul>
              
              <a href="https://wa.me/6287779651205?text=Halo%20Cepy,%20saya%20tertarik%20dengan%20Paket%20Starter" target="_blank" rel="noreferrer" className="block w-full py-4 text-center rounded-2xl bg-slate-50 text-slate-700 font-bold hover:bg-slate-100 hover:shadow-md transition-all border border-slate-200">Pilih Starter</a>
            </motion.div>

            {/* PROFESSIONAL */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="bg-slate-900 border-2 border-sky-500 rounded-[3rem] p-12 shadow-[0_0_50px_rgba(14,165,233,0.3)] relative transform lg:-translate-y-4 text-left z-20"
            >
              <div className="absolute -top-5 inset-x-0 flex justify-center">
                <span className="bg-gradient-to-r from-sky-400 to-blue-600 text-white text-xs font-black uppercase tracking-widest py-2 px-6 rounded-full shadow-xl border border-sky-300/50">
                  Pilihan Favorit
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 mt-4">Paket Professional</h3>
              <p className="text-slate-400 text-sm mb-8 h-10">Solusi sempurna untuk Web Dinamis, Aplikasi Kasir, atau Sistem Informasi.</p>
              
              <div className="mb-8">
                <span className="text-5xl font-black text-sky-400">700<span className="text-2xl font-normal text-sky-700">rb</span> <span className="text-3xl font-light text-slate-600">-</span> 2<span className="text-2xl font-normal text-sky-700">Jt</span></span>
              </div>
              
              <ul className="flex flex-col gap-5 mb-10 text-sm text-slate-300 font-medium">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-sky-400 text-xl"></i> Desain Eksklusif (Hingga 10 Hal)</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-sky-400 text-xl"></i> CMS Admin & Database (Laravel)</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-sky-400 text-xl"></i> Animasi Interaktif Mulus</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-sky-400 text-xl"></i> Pengerjaan 2-4 Minggu</li>
              </ul>
              
              <a href="https://wa.me/6287779651205?text=Halo%20Cepy,%20saya%20tertarik%20dengan%20Paket%20Professional" target="_blank" rel="noreferrer" className="block w-full py-4 text-center rounded-2xl bg-gradient-to-r from-sky-400 to-blue-600 text-white font-black hover:shadow-[0_10px_30px_rgba(14,165,233,0.4)] hover:scale-105 transition-all">Pilih Professional</a>
            </motion.div>

            {/* ENTERPRISE */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-lg text-left"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-2">Paket Enterprise</h3>
              <p className="text-slate-500 text-sm mb-8 h-10">Aplikasi Mobile (Flutter) & Web Kompleks berskala perusahaan.</p>
              
              <div className="mb-8">
                <span className="text-4xl font-black text-slate-900">Custom</span>
              </div>
              
              <ul className="flex flex-col gap-4 mb-10 text-sm text-slate-600 font-medium">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-indigo-500 text-lg"></i> API & Payment Gateway</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-indigo-500 text-lg"></i> Keamanan & Skalabilitas Super</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-indigo-500 text-lg"></i> Maintenance Prioritas</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-indigo-500 text-lg"></i> Source Code Sepenuhnya</li>
              </ul>
              
              <a href="https://wa.me/6287779651205?text=Halo%20Cepy,%20saya%20tertarik%20berdiskusi%20untuk%20Paket%20Enterprise" target="_blank" rel="noreferrer" className="block w-full py-4 text-center rounded-2xl bg-slate-50 text-slate-700 font-bold hover:bg-slate-100 hover:shadow-md transition-all border border-slate-200">Konsultasi Khusus</a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 5. ATURAN KERJA */}
      {/* ========================================== */}
      <div className="w-full px-6 md:px-12 xl:px-20 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Aturan & <span className="text-indigo-500">Transparansi.</span></h2>
            <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">Cara kita bekerja sama untuk memastikan hasil proyek yang terarah dan saling menguntungkan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
            <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-slate-200 -translate-x-1/2 z-0"></div>

            {rules.map((rule, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] p-8 rounded-[2rem] flex flex-col sm:flex-row gap-6 text-left relative z-10 hover:-translate-y-2 transition-transform duration-300 ${index % 2 === 1 ? 'md:mt-24' : ''}`}
              >
                <div className={`w-16 h-16 shrink-0 rounded-2xl ${rule.bg} ${rule.color} ${rule.border} border flex items-center justify-center text-2xl shadow-sm`}>
                  <i className={rule.icon}></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">{rule.title}</h4>
                  <p className="text-slate-500 text-base font-light leading-relaxed">{rule.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 6. CALL TO ACTION */}
      {/* ========================================== */}
      <div className="w-full px-6 md:px-12 xl:px-20 relative z-10 mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto rounded-[3rem] p-1 border border-white/50 bg-gradient-to-br from-sky-400/30 to-indigo-600/30 shadow-2xl relative overflow-hidden"
        >
          <div className="bg-white/70 backdrop-blur-3xl rounded-[2.8rem] p-10 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10 text-left relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-400/20 blur-[50px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/20 blur-[50px] rounded-full pointer-events-none"></div>

            <div className="text-slate-900 max-w-2xl relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">Siap Memulai <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Proyek Anda?</span></h2>
              <p className="text-slate-600 text-lg md:text-xl font-light">
                Konsultasikan konsep aplikasi Anda secara gratis. Mari berdiskusi tentang fitur, tenggat waktu, dan penawaran teknis sekarang juga.
              </p>
            </div>
            
            <a href="https://wa.me/6287779651205" target="_blank" rel="noreferrer" className="relative z-10 shrink-0 inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white font-bold text-lg rounded-full hover:bg-sky-500 hover:shadow-[0_10px_40px_rgba(14,165,233,0.4)] hover:scale-105 active:scale-95 transition-all duration-300">
              <i className="fab fa-whatsapp text-emerald-400 text-2xl"></i> Hubungi WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <footer className="w-full bg-white border-t border-slate-200 py-8 relative z-10 text-center">
        <p className="text-slate-500 text-sm font-medium">
          Didesain & Dikembangkan oleh <span className="text-slate-800 font-bold tracking-wide">Muhammad Cepy</span>.
          <br className="md:hidden" />
          <span className="hidden md:inline"> &copy; </span> 2026. Hak Cipta Dilindungi.
        </p>
      </footer>


      {/* ========================================== */}
      {/* 7. MODAL POP-UP PORTFOLIO */}
      {/* ========================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-12 py-10">
            {/* Backdrop dengan blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm cursor-pointer"
            ></motion.div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0b1120] border border-slate-700 rounded-[2rem] shadow-2xl z-10 hide-scrollbar"
            >
              {/* Tombol Close */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 rounded-full bg-slate-800/50 hover:bg-red-500 text-white flex items-center justify-center transition-colors backdrop-blur-md"
              >
                <i className="fas fa-times"></i>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Gambar (Kiri) */}
                <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px] lg:min-h-[500px] w-full bg-slate-800">
                  <img 
                    src={selectedProject.img} 
                    alt={selectedProject.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Gradien pemisah untuk tampilan layar kecil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] to-transparent lg:hidden"></div>
                </div>

                {/* Info Detail (Kanan) */}
                <div className="p-8 md:p-12 flex flex-col justify-center text-left">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest border border-sky-500/20 mb-6 w-max">
                    {selectedProject.category}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light mb-8">
                    {selectedProject.desc}
                  </p>

                  <div>
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">Teknologi Utama:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((techItem, i) => (
                        <span key={i} className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium">
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Placeholder jika nanti butuh tombol "Lihat Live" */}
                  {/* 
                  <div className="mt-10">
                    <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-sky-400 hover:text-white transition-colors">
                      Lihat Website / Aplikasi
                    </button>
                  </div> 
                  */}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        /* Utilitas untuk menyembunyikan scrollbar di modal tapi tetap bisa di-scroll */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </section>
  );
};

export default Services;