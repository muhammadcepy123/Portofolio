import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: "web-app",
      title: "Web & Mobile App",
      subtitle: "Sistem Terintegrasi & Powerful",
      color: "sky",
      gradient: "from-sky-400 to-blue-600",
      icon: "fas fa-laptop-code",
      desc: "Hadirkan inovasi bisnis Anda ke dalam genggaman. Saya membangun aplikasi web (Laravel & React) serta mobile app (Flutter) yang siap rilis di PlayStore.",
      features: ["Sistem ERP & Manajemen", "Aplikasi POS (Kasir)", "Integrasi API Real-time"]
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

  const exampleProjects = [
    {
      title: "Banyu Digital Admin",
      category: "Web Dashboard",
      img: "webadmin.PNG", 
    },
    {
      title: "Banyu Mobile App",
      category: "Mobile Application",
      img: "apk.PNG",
    },
    {
      title: "Premium Wedding Invitation",
      category: "Digital Invitation",
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
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

  return (
    <section className="w-full min-h-screen bg-[#fafcff] text-slate-800 pt-32 lg:pt-40 pb-0 font-sans relative overflow-hidden">
      
      {/* ========================================== */}
      {/* BACKGROUND BLOBS (MEMBERI KESAN MEWAH/WAH) */}
      {/* ========================================== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-sky-300/30 via-indigo-300/30 to-purple-300/30 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-sky-200/40 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-200/30 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* ========================================== */}
      {/* 1. HERO SECTION (DYNAMIC CENTERED TO GRID) */}
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
      {/* 2. SERVICES SECTION (STAGGERED / ASYMMETRIC) */}
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
                {/* Aksen Hover Belakang */}
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
      {/* 3. HASIL PROJEK (ELEVATED MASONRY STYLE)   */}
      {/* ========================================== */}
      <div className="w-full px-6 md:px-12 xl:px-20 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Efek Cahaya di Dalam Kotak Gelap */}
          <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-sky-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 text-left relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Bukti <span className="text-sky-400">Karya.</span></h2>
              <p className="text-slate-400 text-lg font-light">Cuplikan antarmuka proyek digital yang telah saya kembangkan.</p>
            </div>
            <a href="/#portfolio" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-sky-400 hover:text-white transition-all shadow-lg hover:shadow-sky-400/50 whitespace-nowrap group">
              Lihat Semua Karya <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {exampleProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-auto md:h-[400px] bg-slate-800 border border-slate-700 cursor-pointer"
              >
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/40 to-transparent flex flex-col justify-end p-8 text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{proj.category}</span>
                  <h3 className="text-2xl font-bold text-white leading-tight">{proj.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 4. PRICING SECTION (SAAS GLOWING STYLE)    */}
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
                <span className="text-4xl font-black text-slate-900">100<span className="text-xl font-normal text-slate-500">rb</span> <span className="text-2xl font-light text-slate-300">-</span> 200<span className="text-xl font-normal text-slate-500">rb</span></span>
              </div>
              
              <ul className="flex flex-col gap-4 mb-10 text-sm text-slate-600 font-medium">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-sky-500 text-lg"></i> 1-3 Halaman Web</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-sky-500 text-lg"></i> Desain Responsif (Mobile)</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-sky-500 text-lg"></i> Maksimal 2x Revisi</li>
                <li className="flex items-center gap-3 opacity-40"><i className="fas fa-times-circle text-slate-400 text-lg"></i> Database Dinamis</li>
              </ul>
              
              <a href="https://wa.me/6287779651205?text=Halo%20Cepy,%20saya%20tertarik%20dengan%20Paket%20Starter" target="_blank" rel="noreferrer" className="block w-full py-4 text-center rounded-2xl bg-slate-50 text-slate-700 font-bold hover:bg-slate-100 hover:shadow-md transition-all border border-slate-200">Pilih Starter</a>
            </motion.div>

            {/* PROFESSIONAL (GLOWING CENTER CARD) */}
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
      {/* 5. ATURAN KERJA (ZIG-ZAG / FLOATING STEPS) */}
      {/* ========================================== */}
      <div className="w-full px-6 md:px-12 xl:px-20 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Aturan & <span className="text-indigo-500">Transparansi.</span></h2>
            <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">Cara kita bekerja sama untuk memastikan hasil proyek yang terarah dan saling menguntungkan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
            {/* Garis Vertikal Samar Penghubung di Tengah (Hanya Desktop) */}
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
      {/* 6. CALL TO ACTION (MASSIVE GLASS BANNER)   */}
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
            
            {/* Ornamen Transparan Dalam Banner */}
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

      {/* ========================================== */}
      {/* 7. FOOTER (WAJIB ADA AGAR RAPI)            */}
      {/* ========================================== */}
      <footer className="w-full bg-white border-t border-slate-200 py-8 relative z-10 text-center">
        <p className="text-slate-500 text-sm font-medium">
          Didesain & Dikembangkan oleh <span className="text-slate-800 font-bold tracking-wide">Muhammad Cepy</span>.
          <br className="md:hidden" />
          <span className="hidden md:inline"> &copy; </span> 2026. Hak Cipta Dilindungi.
        </p>
      </footer>

    </section>
  );
};

export default Services;