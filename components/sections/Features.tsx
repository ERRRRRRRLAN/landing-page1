'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Users, MousePointerClick, Headphones, TrendingUp, Shield } from 'lucide-react';

const icons = [Zap, Users, MousePointerClick, Headphones, TrendingUp, Shield];

export default function Features() {
  const t = useTranslations('features');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const features = [
    { key: 'feature1', icon: Zap },
    { key: 'feature2', icon: Users },
    { key: 'feature3', icon: MousePointerClick },
    { key: 'feature4', icon: Headphones },
    { key: 'feature5', icon: TrendingUp },
    { key: 'feature6', icon: Shield },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Features Grid - Bento Box Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = index === 0 || index === 2;
            
            return (
              <motion.div
                key={feature.key}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`
                  group relative p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-black rounded-2xl
                  hover:bg-gradient-to-br hover:from-black hover:via-gray-900 hover:to-black hover:text-white transition-all duration-300
                  ${isLarge ? 'md:col-span-2 lg:col-span-1' : ''}
                  cursor-pointer shadow-lg
                `}
              >
                {/* Hover Effect Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-100 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md">
                      <Icon size={32} className="text-white group-hover:text-black transition-colors duration-300" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                    {t(`items.${feature.key}.title`)}
                  </h3>
                  <p className="text-black/70 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                    {t(`items.${feature.key}.description`)}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-black group-hover:border-white rounded-tr-2xl transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

