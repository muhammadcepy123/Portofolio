import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: "web-app",
      title: "Web & Mobile App Development",
      subtitle: "Sistem Terintegrasi & Powerful",
      gradient: "from-sky-400 to-blue-600",
      bgGlow: "bg-blue-300",
      icon: "fas fa-layer-group",
      visualIcon: "fas fa-mobile-alt",
      desc: "Hadirkan inovasi bisnis Anda ke dalam genggaman. Saya membangun aplikasi web yang handal berbasis Laravel & React, serta aplikasi mobile modern menggunakan Flutter yang super cepat dan siap rilis di PlayStore.",
      features: ["Sistem Informasi & ERP", "Aplikasi Kasir (POS) & E-Commerce", "Integrasi API & Database Real-time", "Maintenance & Keamanan Data"]
    },
    {
      id: "portfolio",
      title: "Pembuatan Portofolio Personal",
      subtitle: "Tampil Menonjol di Era Digital",
      gradient: "from-indigo-400 to-purple-600",
      bgGlow: "bg-purple-300",
      icon: "fas fa-laptop-code",
      visualIcon: "fas fa-paint-brush",
      desc: "Jangan biarkan karya terbaikmu tersembunyi. Saya merancang website portofolio eksklusif yang interaktif, berkelas, dan menonjolkan kredibilitas profesional Anda untuk memikat HRD maupun calon klien.",
      features: ["Desain UI/UX Eksklusif & Modern", "Animasi Interaktif (Smooth Scroll)", "Domain Custom (contoh: namakamu.com)", "Optimasi SEO & Performa Cepat"]
    },
    {
      id: "invitation",
      title: "Digital Invitation (Undangan Digital)",
      subtitle: "Elegan, Praktis & Interaktif",
      gradient: "from-rose-400 to-pink-600",
      bgGlow: "bg-pink-300",
      icon: "fas fa-envelope-open-text",
      visualIcon: "fas fa-heart",
      desc: "Bagikan momen spesial Anda dengan cara yang modern. Undangan digital berbasis website yang interaktif, praktis, ramah lingkungan, dan dapat menjangkau tamu di mana saja tanpa batas ruang.",
      features: ["Undangan Pernikahan (Wedding)", "Undangan Ulang Tahun (Birthday)", "Buku Tamu (RSVP) & Galeri Foto", "Navigasi Peta Lokasi (Google Maps)"]
    }
  ];

  return (
    // Padding top dinaikkan drastis (pt-40 lg:pt-56) agar tidak nabrak Navbar!
    <section className="w-full min-h-screen bg-slate-50 relative overflow-hidden pt-40 lg:pt-56 pb-24">
      
      {/* Ornamen Background Halaman */}
      <div className="absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#0ea5e9 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-200/40 rounded-full blur-[150px] pointer-events-none z-0" />
      
      {/* HEADER SUPER MEGAH */}
      <div className="w-full px-6 md:px-12 xl:px-20 relative z-10 mb-24 lg:mb-32 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 shadow-lg shadow-slate-200/50 mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <span className="text-sm md:text-base font-extrabold text-slate-700 tracking-widest uppercase">Layanan Profesional</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-900 tracking-tighter mb-8 max-w-6xl leading-[1.1]"
        >
          Wujudkan Ide Besar <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500">
            Menjadi Realitas Digital.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="text-lg md:text-2xl text-slate-500 max-w-4xl leading-relaxed font-medium"
        >
          Mulai dari membangun sistem perusahaan berskala besar hingga merayakan momen paling spesial dalam hidup Anda, saya siap memberikan karya terbaik.
        </motion.p>
      </div>

      {/* IMMERSIVE SHOWCASE (Selang-seling) */}
      <div className="w-full flex flex-col gap-24 lg:gap-40 relative z-10">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={service.id} className="w-full px-6 md:px-12 xl:px-20">
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 max-w-8xl mx-auto`}>
                
                {/* BAGIAN TEKS (Kiri/Kanan) */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                  className="w-full lg:w-1/2 flex flex-col relative z-20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-2xl shadow-lg`}>
                      <i className={service.icon}></i>
                    </div>
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">{service.subtitle}</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
                    {service.desc}
                  </p>
                  
                  <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-6">Yang Anda Dapatkan:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <i className={`fas fa-check-circle mt-1 text-transparent bg-clip-text bg-gradient-to-br ${service.gradient} text-xl`}></i>
                          <span className="text-slate-700 font-semibold">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* BAGIAN VISUAL ABSTRAK (Kanan/Kiri) - Wow Factor! */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
                  className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[400px] lg:min-h-[600px]"
                >
                  {/* Cahaya Latar Belakang */}
                  <div className={`absolute inset-0 ${service.bgGlow} rounded-full blur-[100px] opacity-40 mix-blend-multiply`}></div>
                  
                  {/* Kaca / Glassmorphism Utama */}
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: isEven ? 2 : -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative w-full max-w-md aspect-square bg-white/40 backdrop-blur-3xl border border-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center overflow-hidden group cursor-pointer z-10"
                  >
                    {/* Lapisan Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    {/* Ikon Raksasa di Tengah */}
                    <i className={`${service.visualIcon} text-[10rem] text-white drop-shadow-2xl group-hover:scale-110 transition-transform duration-500`}></i>

                    {/* Ornamen UI Melayang 1 */}
                    <motion.div 
                      animate={{ y: [0, 20, 0] }} 
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-10 left-10 w-24 h-24 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/80 flex items-center justify-center text-3xl"
                    >
                      <i className={`fas fa-star text-transparent bg-clip-text bg-gradient-to-br ${service.gradient}`}></i>
                    </motion.div>

                    {/* Ornamen UI Melayang 2 */}
                    <motion.div 
                      animate={{ y: [0, -25, 0] }} 
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-12 right-12 w-32 h-16 bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-white/80 flex items-center justify-center"
                    >
                      <div className={`h-2 w-12 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                    </motion.div>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          );
        })}
      </div>

      {/* CALL TO ACTION (CTA) SUPER PREMIUM */}
      <div className="w-full px-6 md:px-12 xl:px-20 mt-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="w-full bg-slate-900 rounded-[3rem] p-10 md:p-16 lg:p-24 overflow-hidden relative flex flex-col items-center text-center shadow-2xl"
        >
          <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-sky-500/30 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 relative z-10 leading-tight">
            Siap Memulai <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">Proyek Anda?</span>
          </h2>
          
          <p className="text-lg lg:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 relative z-10">
            Konsultasikan ide dan kebutuhan Anda secara gratis. Saya akan memberikan solusi teknis terbaik dan penawaran harga yang sesuai.
          </p>
          
          <a href="https://wa.me/6287779651205" target="_blank" rel="noreferrer" className="relative z-10 group px-10 md:px-14 py-5 md:py-6 bg-white text-slate-900 font-black text-xl md:text-2xl rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-4">
            <i className="fab fa-whatsapp text-emerald-500 text-3xl md:text-4xl group-hover:rotate-12 transition-transform"></i> Pesan Sekarang
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default Services;