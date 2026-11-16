import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  const phoneNumber = "919490644434";
  const defaultMessage = encodeURIComponent("Hello NYKS MEDIA! I would like to inquire about a project.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover or mobile hint */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0E111C]/95 backdrop-blur-xl border border-white/[0.12] shadow-2xl text-xs text-white pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <div className="flex flex-col">
              <span className="font-bold">Chat on WhatsApp</span>
              <span className="text-[10px] text-slate-400">+91 9490644434</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-shadow focus:outline-none"
        aria-label="Chat on WhatsApp +91 9490644434"
      >
        {/* Radar ping effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white stroke-[#25D366] relative z-10" />

        {/* Small Online Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-[#06070A] z-20" />
      </motion.a>
    </div>
  );
}
