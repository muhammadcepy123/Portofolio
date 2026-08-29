import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', content: '' });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        setIsSubmitting(false);
        setErrorMessage(data.message || 'Gagal mengirim pesan. Periksa kembali isian Anda.');
      }
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage('Terjadi kesalahan jaringan. Pastikan koneksi internet stabil.');
    }
  };

  return (
    <section id="contact" className="w-full relative bg-[#fafcff] overflow-hidden pt-32 pb-0">
      
      {/* MASSIVE GLOWING ORBS IN BACKGROUND */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-sky-200/50 via-indigo-100/40 to-transparent rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/40 via-sky-100/30 to-transparent rounded-full blur-[120px] pointer-events-none translate-y-1/4 -translate-x-1/4"></div>

      <div className="max-w-[85rem] mx-auto px-6 md:px-12 xl:px-20 relative z-10 mb-20">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-slate-200 text-sky-600 font-bold text-xs uppercase tracking-widest mb-6"
          >
            <i className="fas fa-paper-plane text-base"></i> Let's Talk
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-6"
          >
            Mari Mulai <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Sesuatu yang Besar.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 font-light"
          >
            Punya ide aplikasi brilian atau butuh diskusi teknis? Jangan ragu untuk menyapa, saya siap mendengarkan.
          </motion.p>
        </div>

        {/* MASSIVE FORM CONTAINER */}
        <div className="flex flex-col lg:flex-row gap-0 bg-white/70 backdrop-blur-2xl rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] border border-white overflow-hidden">
          
          {/* KOLOM KIRI: Informasi Kontak */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="w-full lg:w-2/5 p-10 md:p-16 bg-slate-900 flex flex-col justify-between text-left relative overflow-hidden"
          >
            {/* Aksen Latar Hitam */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Informasi Kontak.</h3>
              <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed">
                Pilih metode komunikasi yang paling nyaman untuk Anda. Saya akan membalas secepat kilat!
              </p>

              <div className="flex flex-col gap-6">
                
                {/* Tombol Email */}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadcepy123@gmail.com" target="_blank" rel="noreferrer" className="group flex items-center gap-4 md:gap-6 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-sky-500/20 hover:border-sky-500/50 transition-all duration-300 h-auto">
                  {/* Ikon dikunci ukurannya dengan shrink-0 */}
                  <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-xl md:text-2xl text-sky-400 group-hover:scale-110 transition-transform">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Email Surel</span>
                    {/* Menggunakan break-all agar teks turun ke bawah jika layar sempit, bukan terpotong */}
                    <span className="block text-sm md:text-lg font-bold text-white group-hover:text-sky-300 transition-colors break-all">
                      muhammadcepy123@gmail.com
                    </span>
                  </div>
                </a>

                {/* Tombol WhatsApp */}
                <a href="https://wa.me/6287779651205" target="_blank" rel="noreferrer" className="group flex items-center gap-4 md:gap-6 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 h-auto">
                  {/* Ikon dikunci ukurannya dengan shrink-0 */}
                  <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-2xl md:text-3xl text-emerald-400 group-hover:scale-110 transition-transform">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Panggilan / WA</span>
                    <span className="block text-sm md:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      +62 877-7965-1205
                    </span>
                  </div>
                </a>

              </div>
            </div>
          </motion.div>

          {/* KOLOM KANAN: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="w-full lg:w-3/5 p-10 md:p-16 text-left"
          >
            <h3 className="text-3xl font-black text-slate-900 mb-10">Kirim Pesan Langsung</h3>

            <AnimatePresence>
              {errorMessage && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mb-8 p-5 bg-red-50 border-l-4 border-red-500 text-red-600 rounded-r-xl font-bold">
                  {errorMessage}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 flex flex-col gap-3">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Nama Lengkap</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-slate-50 border-2 border-slate-100 px-6 py-4 rounded-2xl text-slate-800 text-lg focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-medium" placeholder="Tulis nama Anda" />
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Alamat Email</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-slate-50 border-2 border-slate-100 px-6 py-4 rounded-2xl text-slate-800 text-lg focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-medium" placeholder="contoh@email.com" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="content" className="text-sm font-bold text-slate-700 ml-1">Detail Pesan / Tawaran</label>
                <textarea id="content" value={formData.content} onChange={handleChange} rows="5" required className="w-full bg-slate-50 border-2 border-slate-100 px-6 py-5 rounded-2xl text-slate-800 text-lg focus:outline-none focus:border-sky-500 focus:bg-white transition-all resize-y font-medium" placeholder="Ceritakan tentang proyek atau ide Anda di sini..."></textarea>
              </div>

              <button type="submit" disabled={isSubmitting || isSubmitted} className={`w-full py-5 rounded-2xl text-xl font-black transition-all duration-300 flex items-center justify-center gap-4 ${isSubmitted ? 'bg-emerald-500 text-white shadow-[0_10px_30px_rgba(16,185,129,0.4)]' : 'bg-slate-900 text-white hover:bg-sky-500 hover:shadow-[0_10px_40px_rgba(14,165,233,0.4)] hover:-translate-y-1'}`}>
                {isSubmitting ? <><i className="fas fa-circle-notch fa-spin"></i> Memproses...</> : isSubmitted ? <><i className="fas fa-check-circle text-2xl"></i> Terkirim!</> : <>Kirim Pesan <i className="fas fa-paper-plane"></i></>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      <footer className="w-full bg-white border-t border-slate-200 py-10 relative z-10 text-center">
        <p className="text-slate-500 text-base font-medium">
          Didesain & Dikembangkan oleh <span className="text-slate-900 font-black tracking-wide">Muhammad Cepy</span>.
          <br className="md:hidden" />
          <span className="hidden md:inline"> &copy; </span> 2026. Hak Cipta Dilindungi.
        </p>
      </footer>
    </section>
  );
};

export default Contact;