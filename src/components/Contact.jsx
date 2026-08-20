import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 1. Siapkan state untuk menampung inputan user
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: ''
  });

  // 2. Fungsi untuk menangkap perubahan ketikan di form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // 3. Fungsi menembak data ke API Laravel
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Melakukan HTTP POST request ke server Laravel (Pastikan port Laravel-mu 8000)
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Kosongkan form setelah berhasil
        setFormData({ name: '', email: '', content: '' });
        
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        // Menangkap error validasi dari Laravel
        setIsSubmitting(false);
        setErrorMessage(data.message || 'Gagal mengirim pesan. Periksa kembali form Anda.');
      }
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage('Terjadi kesalahan jaringan. Pastikan server API menyala.');
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="w-full flex flex-col">
      <div className="w-full flex flex-col lg:flex-row min-h-[90vh]">
        
        {/* BAGIAN KIRI */}
        <div className="w-full lg:w-1/2 bg-dark px-6 md:px-12 xl:px-20 pt-24 pb-16 relative overflow-hidden flex flex-col justify-center">
          <motion.div animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-32 -left-32 w-96 h-96 border-[40px] border-primary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-tl-full blur-3xl"></div>

          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Mari Mulai <br />
              <span className="text-primary">Sesuatu yang Besar.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-lg">
              Saya siap membantu mewujudkan ide Anda menjadi aplikasi web atau mobile yang luar biasa. Hubungi saya melalui kontak di bawah ini.
            </p>

            <div className="flex flex-col gap-8">
              {/* Kontak List (Dipersingkat agar kode tidak terlalu panjang di sini, isi sama seperti sebelumnya) */}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadcepy123@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-sky-400 text-2xl group-hover:bg-primary group-hover:text-white transition-all"><i className="fas fa-envelope"></i></div>
                <div><span className="block text-sm text-slate-500 mb-1">Email Surel</span><span className="text-xl font-bold text-white group-hover:text-primary transition-colors">muhammadcepy123@gmail.com</span></div>
              </a>
              <a href="https://wa.me/6287779651205" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-emerald-400 text-3xl group-hover:bg-emerald-500 group-hover:text-white transition-all"><i className="fab fa-whatsapp"></i></div>
                <div><span className="block text-sm text-slate-500 mb-1">Panggilan / WhatsApp</span><span className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">+62 877-7965-1205</span></div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* BAGIAN KANAN */}
        <div className="w-full lg:w-1/2 bg-slate-50 px-6 md:px-12 xl:px-20 pt-16 lg:pt-24 pb-16 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-xl mx-auto lg:mx-0">
            <h3 className="text-3xl font-bold text-dark mb-8">Kirim Pesan Langsung</h3>
            
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-600 rounded-xl">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full bg-transparent border-b-2 border-slate-300 px-0 py-2 text-dark text-lg focus:outline-none focus:border-primary transition-colors peer placeholder-transparent" 
                  placeholder="Nama Lengkap" 
                />
                <label htmlFor="name" className="absolute left-0 -top-4 text-sm text-primary font-bold transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-slate-400 peer-placeholder-shown:font-normal peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary peer-focus:font-bold cursor-text">
                  Nama Lengkap
                </label>
              </div>

              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full bg-transparent border-b-2 border-slate-300 px-0 py-2 text-dark text-lg focus:outline-none focus:border-primary transition-colors peer placeholder-transparent" 
                  placeholder="Email Anda" 
                />
                <label htmlFor="email" className="absolute left-0 -top-4 text-sm text-primary font-bold transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-slate-400 peer-placeholder-shown:font-normal peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary peer-focus:font-bold cursor-text">
                  Alamat Email
                </label>
              </div>

              <div className="relative mt-4">
                <textarea 
                  id="content" 
                  value={formData.content}
                  onChange={handleChange}
                  rows="4" 
                  required 
                  className="w-full bg-transparent border-b-2 border-slate-300 px-0 py-2 text-dark text-lg focus:outline-none focus:border-primary transition-colors peer placeholder-transparent resize-y" 
                  placeholder="Ceritakan detail proyek..."
                ></textarea>
                <label htmlFor="content" className="absolute left-0 -top-4 text-sm text-primary font-bold transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-slate-400 peer-placeholder-shown:font-normal peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary peer-focus:font-bold cursor-text">
                  Detail Pesan / Tawaran Proyek
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-5 mt-4 rounded-none text-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative ${
                  isSubmitted ? 'bg-emerald-500 text-white' : 'bg-dark text-white hover:bg-primary'
                }`}
              >
                {isSubmitting ? (
                  <><i className="fas fa-circle-notch fa-spin"></i> Sedang Mengirim...</>
                ) : isSubmitted ? (
                  <><i className="fas fa-check"></i> Pesan Terkirim ke Database!</>
                ) : (
                  <>Kirim Pesan <i className="fas fa-arrow-right"></i></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <footer className="w-full bg-dark border-t border-white/10 text-center py-8">
        <p className="text-slate-400 text-lg">&copy; 2026 <span className="text-white font-bold tracking-wide">Muhammad Cepy</span>.</p>
      </footer>
    </section>
  );
};

export default Contact;