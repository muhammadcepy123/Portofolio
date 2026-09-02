import { motion } from 'framer-motion';
import Swal from 'sweetalert2'; // Tambahkan import SweetAlert2

const Certificates = () => {
  // Data sertifikat
  const certificateData = [
    {
      id: 1,
      title: 'Uji Kompetensi ASPAPI',
      issuer: 'Asosiasi Sarjana dan Praktisi Administrasi Perkantoran Indonesia (ASPAPI)',
      year: '2023',
      image: '/sertifikat_aspapi.png', 
      pdf: '/sertifikat_aspapi.pdf',   
      desc: 'Lisensi resmi bukti kompetensi standar dalam sistem kearsipan, manajemen data, dan tata kelola administrasi profesional dari SMK Negeri 1 Indramayu.',
      color: 'amber'
    }
    // CONTOH UNTUK NANTI JIKA SERTIFIKAT BANYU DIGITAL SUDAH ADA:
    // {
    //   id: 2,
    //   title: 'Penghargaan Banyu Digital',
    //   issuer: 'Perumdam Tirta Darma Ayu',
    //   year: '2026',
    //   image: '/sertifikat_banyu.jpg',
    //   pdf: '/sertifikat_banyu.pdf',
    //   desc: 'Apresiasi pengembangan sistem digital layanan publik terintegrasi untuk masyarakat Indramayu.',
    //   color: 'sky'
    // }
  ];

  // SOLUSI TAILWIND: Mapping warna eksplisit agar class tidak terhapus (purge) oleh Tailwind
  const themeColors = {
    amber: {
      text: 'text-amber-500',
      button: 'bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-500 hover:text-white hover:border-amber-500',
    },
    sky: {
      text: 'text-sky-500',
      button: 'bg-sky-50 text-sky-600 border-sky-200 hover:bg-sky-500 hover:text-white hover:border-sky-500',
    }
  };

  // Fungsi Download dengan SweetAlert2
  const handleDownload = async (fileUrl, fileName, docType) => {
    try {
      // Munculkan loading alert
      Swal.fire({
        title: 'Memproses...',
        text: `Sedang menyiapkan file ${docType}`,
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // Proses fetch file
      const response = await fetch(fileUrl);
      
      // Jika file tidak ditemukan di folder public, lempar error
      if (!response.ok) {
        throw new Error('File tidak ditemukan');
      }

      // Ubah respons menjadi Blob (data file)
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      // Buat elemen link sementara untuk memicu download
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      
      // Bersihkan elemen
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Munculkan alert SUKSES
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: `Dokumen ${docType} berhasil diunduh.`,
        confirmButtonColor: '#0ea5e9',
        timer: 3000
      });

    } catch (error) {
      // Munculkan alert GAGAL
      Swal.fire({
        icon: 'error',
        title: 'Oops... Gagal!',
        text: `Maaf, dokumen ${docType} gagal diunduh. Pastikan file tersedia.`,
        confirmButtonColor: '#0f172a'
      });
    }
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 xl:px-20 bg-[#f4f7fb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-white font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">
              <i className="fas fa-medal mr-2"></i> Pencapaian
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
              Sertifikasi & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Lisensi.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-base max-w-md font-light leading-relaxed">
            Bukti nyata kompetensi, dedikasi, dan pengakuan profesionalitas dari instansi resmi terkait.
          </p>
        </motion.div>

        {/* GRID SERTIFIKAT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificateData.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 flex flex-col"
            >
              {/* Tempat Gambar Sertifikat */}
              <div className="w-full h-[300px] md:h-[400px] bg-slate-100 rounded-[1.5rem] overflow-hidden relative mb-8 border border-slate-200 flex items-center justify-center">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Info & Teks */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 font-bold text-xs rounded-lg uppercase tracking-wider">
                    {cert.year}
                  </span>
                  <span className={`${themeColors[cert.color].text} font-bold text-xs uppercase tracking-widest`}>
                    {cert.issuer}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  {cert.title}
                </h3>
                
                <p className="text-slate-600 font-light text-base leading-relaxed mb-8 flex-1">
                  {cert.desc}
                </p>

                {/* Tombol Download yang Sudah Memakai SweetAlert */}
                <button 
                  onClick={() => handleDownload(cert.pdf, `${cert.title.replace(/\s+/g, '_')}.pdf`, cert.title)}
                  className={`w-full md:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 border font-bold rounded-xl transition-all duration-300 group/btn ${themeColors[cert.color].button} cursor-pointer`}
                >
                  <i className="fas fa-file-download text-lg group-hover/btn:-translate-y-1 transition-transform"></i>
                  Unduh Dokumen Asli
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;