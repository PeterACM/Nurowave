import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/27828980512"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group transition-all"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold text-sm">
        Connect via WhatsApp
      </span>
    </motion.a>
  );
};
