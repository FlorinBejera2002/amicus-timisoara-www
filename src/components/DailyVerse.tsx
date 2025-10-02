import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaCalendarAlt } from 'react-icons/fa';
import dailyVersesData from '../data/dailyVerses.json';

interface Verse {
  id: number;
  verse: string;
  reference: string;
  date: string;
}

export const DailyVerse: React.FC = () => {
  const [todaysVerse, setTodaysVerse] = useState<Verse | null>(null);

  useEffect(() => {
    const getTodaysVerse = () => {
      const today = new Date();
      const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
      
      // Folosește modulo pentru a cicla prin versete dacă sunt mai puține de 365
      const verseIndex = (dayOfYear - 1) % dailyVersesData.verses.length;
      const verse = dailyVersesData.verses[verseIndex];
      
      setTodaysVerse(verse);
    };

    getTodaysVerse();
  }, []);

  const formatDate = () => {
    const today = new Date();
    return today.toLocaleDateString('ro-RO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!todaysVerse) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-white/20 rounded w-32 mx-auto mb-6"></div>
        <div className="h-6 bg-white/20 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-6 bg-white/20 rounded w-1/2 mx-auto mb-4"></div>
        <div className="h-4 bg-white/20 rounded w-1/3 mx-auto"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-white/20">
          <FaBookOpen className="text-3xl text-white" />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Versetul Zilnic
      </motion.h2>

      {/* Date */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex items-center justify-center space-x-2 mb-8 text-red-100"
      >
        <FaCalendarAlt className="text-lg" />
        <span className="text-lg font-medium">{formatDate()}</span>
      </motion.div>

      {/* Verse */}
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl text-red-50 mb-6 max-w-4xl mx-auto leading-relaxed font-light italic"
      >
        "{todaysVerse.verse}"
      </motion.blockquote>

      {/* Reference */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-red-200 text-lg font-semibold"
      >
        - {todaysVerse.reference}
      </motion.p>
    </motion.div>
  );
};