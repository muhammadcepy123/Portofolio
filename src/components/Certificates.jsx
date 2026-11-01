import { motion } from 'framer-motion';
import Swal from 'sweetalert2'; 

const Certificates = () => {
  // Data berdasarkan 2 sertifikat asli yang kamu miliki
  const certificateData = [
    {
      id: 1,
      title: 'Sertifikat Penghargaan Banyu Digital',
      issuer: 'Perumda Air Minum Tirta Darma Ayu Kabupaten Indramayu',
      year: '5 Mei 2026',
      image: '/sertif.png', // Sesuai dengan file gambar Banyu Digitalmu
      pdf: '/sertif.pdf',     // Sesuaikan jika formatnya PDF (.pdf)
      desc: 'Diberikan atas keberhasilan perancangan, pembangunan, dan pengimplementasian Sistem Informasi Serta Layanan Pelanggan Berbasis Web dan Mobile "Banyu Digital".',
      isFeatured: true
    },
    {
      id: 2,
      title: 'Uji Kompetensi ASPAPI',
      issuer: 'Asosiasi Sarjana dan Praktisi Administrasi Perkantoran Indonesia (ASPAPI) Jawa Barat',
      year: '28 April 2023',
      image: '/sertifikat_aspapi.png', // Sesuai dengan file gambar ASPAPI-mu
      pdf: '/sertifikat_aspapi.pdf',   // Sesuaikan jika formatnya PDF (.pdf)
      desc: 'Uji Kompetensi Keahlian Otomatisasi dan Tata Kelola Perkantoran di SMK Negeri 1 Indramayu dengan predikat Sangat Kompeten.',
      isFeatured: false
    }
  ];

  const featuredCert = certificateData.find(c => c.isFeatured) || certificateData[0];
  const sideCerts = certificateData.filter(c => !c.isFeatured);

  const handleDownload = async (fileUrl, fileName, docType) => {
    try {
      Swal.fire({
        title: 'Memproses...',
        text: `Sedang menyiapkan file ${docType}`,
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => Swal.showLoading()
      });

      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error('File tidak ditemukan');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: `Dokumen ${docType} berhasil diunduh.`,
        confirmButtonColor: '#ef4444',
        timer: 3000
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: `Dokumen ${docType} gagal diunduh. Pastikan file tersedia.`,
        confirmButtonColor: '#0a0a0a'
      });
    }
  };

  return (
    <section id="certificates" className="w-full py-28 px-6 md:px-12 xl:px-20 bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Background Ambient Glow Merah */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#171717] border border-white/10 rounded-full mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-300">
              Sertifikat
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Sertifikasi & <span className="text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]">Penghargaan.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
            Berbagai sertifikat dan penghargaan yang telah saya raih sebagai bentuk dedikasi dan pengembangan diri di bidang teknologi maupun profesional.
          </p>
        </motion.div>

        {/* UTAMA SHOWCASE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* SISI KIRI: SERTIFIKAT UTAMA (BANYU DIGITAL) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="lg:col-span-7 bg-gradient-to-b from-[#161616] to-[#0f0f0f] border border-red-500/30 rounded-[2.5rem] p-6 md:p-8 shadow-[0_0_50px_rgba(239,68,68,0.15)] relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute top-6 left-6 z-20">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600 text-white text-[10px] md:text-xs font-bold rounded-full shadow-[0_0_10px_rgba(239,68,68,0.6)]">
                <i className="fas fa-star text-[10px]"></i> Sertifikat Utama
              </span>
            </div>

            <div className="w-full h-[260px] md:h-[340px] bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 relative my-4 flex items-center justify-center p-2">
              <img 
                src={featuredCert.image} 
                alt={featuredCert.title}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-red-400 font-bold text-xs uppercase tracking-widest">{featuredCert.issuer}</span>
                <span className="text-slate-400 text-xs">{featuredCert.year}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">{featuredCert.title}</h3>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                {featuredCert.desc}
              </p>

              <button 
                onClick={() => handleDownload(featuredCert.pdf, `${featuredCert.title.replace(/\s+/g, '_')}.pdf`, featuredCert.title)}
                className="w-full py-3.5 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-bold rounded-xl hover:brightness-110 transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <i className="fas fa-file-download text-base"></i> Unduh Dokumen Asli
              </button>
            </div>
          </motion.div>

          {/* SISI KANAN: SERTIFIKAT PENDUKUNG (ASPAPI) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {sideCerts.map((cert) => (
              <div 
                key={cert.id}
                onClick={() => handleDownload(cert.pdf, `${cert.title.replace(/\s+/g, '_')}.pdf`, cert.title)}
                className="bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 hover:border-red-500/50 p-4 md:p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 cursor-pointer group shadow-lg"
              >
                <div className="w-24 h-20 bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 shrink-0 flex items-center justify-center p-1">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-red-400 font-semibold truncate max-w-[150px]">{cert.issuer}</span>
                    <span className="text-[10px] text-slate-500">{cert.year}</span>
                  </div>
                  <h4 className="text-white text-sm font-bold truncate group-hover:text-red-400 transition-colors">{cert.title}</h4>
                  <p className="text-slate-400 text-[11px] line-clamp-2">{cert.desc}</p>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-red-600 text-slate-400 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <i className="fas fa-arrow-right text-xs"></i>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Certificates;  