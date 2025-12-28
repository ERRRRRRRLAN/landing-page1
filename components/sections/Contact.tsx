/**
 * Contact Section Component
 * 
 * Section that displays a contact form to reach out to you.
 * Features:
 * - Form with 3 fields: Name, Email, Message
 * - Form validation (required fields)
 * - Loading state on submit
 * - Success/Error message after submit
 * - Fade-in animation when scrolling to section
 * - Dark gradient background with blur effect
 * 
 * EASY CUSTOMIZATION:
 * 
 * 1. Change Form Text:
 *    - Edit messages/en.json and messages/id.json → section "contact"
 *    - title: Section title (example: "Get In Touch")
 *    - subtitle: Section subtitle
 *    - form.name: Name field label
 *    - form.email: Email field label
 *    - form.message: Message field label
 *    - form.submit: Submit button text
 *    - form.sending: Text while sending
 *    - form.success: Success message after submit
 *    - form.error: Error message if failed
 * 
 * 2. Add Form Field:
 *    - Line 89: Add new field to formData (example: phone: '')
 *    - Add input field in JSX (see example at lines 189-205)
 *    - Make sure label exists in messages/en.json and messages/id.json
 * 
 * 3. Change Background Color:
 *    - Line 153: bg-gradient-to-br from-black via-gray-900 to-black
 *    - Example: from-blue-900 via-blue-800 to-blue-900 for dark blue
 * 
 * 4. Change Form Container Color:
 *    - Line 184: bg-gradient-to-br from-white/5 via-white/3 to-white/5
 *    - Change opacity (number after /) to change transparency
 * 
 * 5. Connect to Backend API:
 *    - Lines 105-143: Edit handleSubmit function
 *    - Replace API call simulation with fetch to your API endpoint
 *    - Example:
 *      const response = await fetch('/api/contact', {
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json' },
 *        body: JSON.stringify(formData),
 *      });
 *    - See README.md for complete guide on creating API route
 * 
 * 6. Change Validation:
 *    - Lines 199, 218, 236: required (field must be filled)
 *    - Add custom validation in handleSubmit if needed
 * 
 * 7. Change Email Service:
 *    - After creating API route, integrate with email service
 *    - Example: Resend, SendGrid, Nodemailer, etc.
 * 
 * IMPORTANT:
 * - Form is currently simulation only (does not actually send email)
 * - For production, MUST create API route and connect to email service
 * - Do not hardcode email in frontend (use environment variable)
 * - Make sure all text exists in messages/en.json and messages/id.json
 * - Email validation is done by browser (type="email")
 * 
 * DEPENDENCIES:
 * - next-intl: for multi-language support
 * - framer-motion: for animations and scroll detection
 * - lucide-react: for icons (Send, Mail, MessageSquare, User)
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
  // Hook to get translations from messages files → section "contact"
  const t = useTranslations('contact');
  
  // State to store form data
  // CUSTOMIZATION: Add new field here (example: phone: '')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // State to track if form is being submitted
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State for submit status (idle, success, error)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Ref to detect if section has entered viewport
  const ref = useRef(null);
  
  // Hook to check if element is in viewport
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Handler for form submit
  // CUSTOMIZATION: Replace simulation with API call to backend
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // IMPORTANT: This is simulation only! Replace with API call to backend
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Example API call (uncomment and adjust):
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

    // Simulation (remove after connecting to API)
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
            {/* CUSTOMIZATION: Add new field by following this structure */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <User size={16} />
                {t('form.name')}
              </label>
              <motion.input
                variants={inputVariants}
                whileFocus="focus"  // Scale animation on focus
                type="text"
                id="name"
                required  // Field must be filled
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
                type="email"  // Browser will validate email format
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
                rows={6}  // CUSTOMIZATION: Change number of rows by modifying rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors resize-none"
                placeholder={t('form.message')}
              />
            </div>

            {/* Submit Button */}
            {/* CUSTOMIZATION: Change button styling here */}
            <motion.button
              type="submit"
              disabled={isSubmitting}  // Disable while submitting
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* Loading State: Display spinner while submitting */}
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}  // Rotation animation for spinner
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                  />
                  {t('form.sending')}
                </>
              ) : (
                // Normal State: Display icon and submit text
                <>
                  <Send size={20} />
                  {t('form.submit')}
                </>
              )}
            </motion.button>

            {/* Status Message (Success/Error) */}
            {/* Message will appear after submit and disappear after 5 seconds */}
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
