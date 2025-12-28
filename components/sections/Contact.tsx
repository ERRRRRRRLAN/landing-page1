/**
 * Contact Section Component
 * 
 * Section yang menampilkan form kontak untuk menghubungi Anda.
 * Fitur:
 * - Form dengan 3 field: Name, Email, Message
 * - Validasi form (required fields)
 * - Loading state saat submit
 * - Success/Error message setelah submit
 * - Animasi fade-in saat scroll ke section
 * - Background gradient gelap dengan efek blur
 * 
 * KUSTOMISASI MUDAH:
 * 
 * 1. Ubah Teks Form:
 *    - Edit messages/en.json dan messages/id.json → section "contact"
 *    - title: Judul section (contoh: "Get In Touch")
 *    - subtitle: Subjudul section
 *    - form.name: Label field nama
 *    - form.email: Label field email
 *    - form.message: Label field pesan
 *    - form.submit: Teks tombol submit
 *    - form.sending: Teks saat sedang mengirim
 *    - form.success: Pesan sukses setelah submit
 *    - form.error: Pesan error jika gagal
 * 
 * 2. Tambah Field Form:
 *    - Baris 12: Tambah field baru di formData (contoh: phone: '')
 *    - Tambah input field di JSX (lihat contoh di baris 76-92)
 *    - Pastikan label ada di messages/en.json dan messages/id.json
 * 
 * 3. Ubah Warna Background:
 *    - Baris 41: bg-gradient-to-br from-black via-gray-900 to-black
 *    - Contoh: from-blue-900 via-blue-800 to-blue-900 untuk biru gelap
 * 
 * 4. Ubah Warna Form Container:
 *    - Baris 72: bg-gradient-to-br from-white/5 via-white/3 to-white/5
 *    - Ubah opacity (angka setelah /) untuk mengubah transparansi
 * 
 * 5. Connect ke Backend API:
 *    - Baris 18-31: Edit fungsi handleSubmit
 *    - Ganti simulasi API call dengan fetch ke API endpoint Anda
 *    - Contoh:
 *      const response = await fetch('/api/contact', {
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json' },
 *        body: JSON.stringify(formData),
 *      });
 *    - Lihat README.md untuk panduan lengkap membuat API route
 * 
 * 6. Ubah Validasi:
 *    - Baris 86, 105, 124: required (field wajib diisi)
 *    - Tambah validasi custom di handleSubmit jika diperlukan
 * 
 * 7. Ubah Email Service:
 *    - Setelah membuat API route, integrasikan dengan email service
 *    - Contoh: Resend, SendGrid, Nodemailer, dll
 * 
 * PENTING:
 * - Form saat ini hanya simulasi (tidak benar-benar mengirim email)
 * - Untuk production, WAJIB membuat API route dan connect ke email service
 * - Jangan hardcode email di frontend (gunakan environment variable)
 * - Pastikan semua teks ada di messages/en.json dan messages/id.json
 * - Validasi email dilakukan oleh browser (type="email")
 * 
 * DEPENDENCIES:
 * - next-intl: untuk multi-language support
 * - framer-motion: untuk animasi dan scroll detection
 * - lucide-react: untuk icons (Send, Mail, MessageSquare, User)
 * 
 * @returns {JSX.Element} Contact section component
 */

'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Mail, MessageSquare, User } from 'lucide-react';

export default function Contact() {
  // Hook untuk mengambil terjemahan dari file messages → section "contact"
  const t = useTranslations('contact');
  
  // State untuk menyimpan data form
  // KUSTOMISASI: Tambah field baru di sini (contoh: phone: '')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // State untuk tracking apakah form sedang di-submit
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State untuk status submit (idle, success, error)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Ref untuk mendeteksi apakah section sudah masuk viewport
  const ref = useRef(null);
  
  // Hook untuk check apakah element sudah dalam viewport
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Handler untuk submit form
  // KUSTOMISASI: Ganti simulasi dengan API call ke backend
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // PENTING: Ini hanya simulasi! Ganti dengan API call ke backend
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Contoh API call (uncomment dan sesuaikan):
    /*
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
    */

    // Simulasi (hapus setelah connect ke API)
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: '#000000',
    },
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white to-gray-300 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white to-gray-300 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input Field */}
            {/* KUSTOMISASI: Tambah field baru dengan mengikuti struktur ini */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <User size={16} />
                {t('form.name')}
              </label>
              <motion.input
                variants={inputVariants}
                whileFocus="focus"  // Animasi scale saat focus
                type="text"
                id="name"
                required  // Field wajib diisi
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                placeholder={t('form.name')}
              />
            </div>

            {/* Email Input Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <Mail size={16} />
                {t('form.email')}
              </label>
              <motion.input
                variants={inputVariants}
                whileFocus="focus"
                type="email"  // Browser akan validasi format email
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                placeholder={t('form.email')}
              />
            </div>

            {/* Message Textarea Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <MessageSquare size={16} />
                {t('form.message')}
              </label>
              <motion.textarea
                variants={inputVariants}
                whileFocus="focus"
                id="message"
                required
                rows={6}  // KUSTOMISASI: Ubah jumlah baris dengan mengubah rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors resize-none"
                placeholder={t('form.message')}
              />
            </div>

            {/* Submit Button */}
            {/* KUSTOMISASI: Ubah styling tombol di sini */}
            <motion.button
              type="submit"
              disabled={isSubmitting}  // Disable saat sedang submit
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* Loading State: Tampilkan spinner saat sedang submit */}
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}  // Animasi rotasi spinner
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                  />
                  {t('form.sending')}
                </>
              ) : (
                // Normal State: Tampilkan icon dan teks submit
                <>
                  <Send size={20} />
                  {t('form.submit')}
                </>
              )}
            </motion.button>

            {/* Status Message (Success/Error) */}
            {/* Pesan akan muncul setelah submit dan hilang setelah 5 detik */}
            <AnimatePresence>
              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-green-500/20 border-2 border-green-500/50 rounded-lg text-green-400 text-center"
                >
                  {t('form.success')}
                </motion.div>
              )}
              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-red-500/20 border-2 border-red-500/50 rounded-lg text-red-400 text-center"
                >
                  {t('form.error')}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

