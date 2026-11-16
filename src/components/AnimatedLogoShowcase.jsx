import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Youtube, 
  Instagram, 
  Facebook, 
  Linkedin, 
  MessageCircle, 
  Code2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

function FloatingBrandIcon({ 
  icon: Icon, 
  label, 
  href, 
  color, 
  bgColor, 
  glowColor, 
  borderColor, 
  positionClass, 
  floatDelay = 0,
  floatDuration = 4
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        x: [0, 4, 0],
        rotate: [0, 3, -3, 0]
      }}
      transition={{
        duration: floatDuration,
        delay: floatDelay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute ${positionClass} z-20`}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.22, y: -4 }}
        whileTap={{ scale: 0.92 }}
        className={`relative flex items-center justify-center p-3 rounded-2xl ${bgColor} border ${borderColor} shadow-2xl backdrop-blur-xl transition-all duration-300 group cursor-pointer`}
        aria-label={label}
      >
        {/* Colorful Glow Aura behind the icon */}
        <div 
          className="absolute -inset-2 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: glowColor }}
        />

        {/* Orbit indicator dot */}
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white/80 border border-black/40 shadow-sm animate-pulse" />

        {/* Icon Component */}
        <Icon className={`w-5 h-5 ${color} relative z-10 drop-shadow-md`} />

        {/* Floating Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: -38, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ duration: 0.18 }}
              className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-xl bg-[#090C16]/95 border border-white/[0.18] shadow-2xl text-[11px] font-bold text-white flex items-center gap-1.5 pointer-events-none z-30"
            >
              <span>{label}</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </motion.div>
  );
}

export default function AnimatedLogoShowcase({ variant = "full" }) {
  const cardRef = useRef(null);

  // Mouse position values for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for buttery smooth rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 260,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 260,
    damping: 20
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-10 px-4 sm:px-8">
      
      {/* 3D Tilt Container */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
          rotateX,
          rotateY
        }}
        className="relative group cursor-pointer"
      >
        {/* Animated Multi-Color Glow Aura behind the logo */}
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-cyan-500/25 via-purple-600/30 to-amber-500/25 blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />

        {/* Outer Orbital Orbit Ring 1 with rotating energy nodes */}
        <div className="absolute -inset-10 sm:-inset-14 rounded-full border border-dashed border-white/[0.08] animate-spin pointer-events-none" style={{ animationDuration: '40s' }}>
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/80" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-pink-500 shadow-lg shadow-pink-500/80" />
        </div>

        {/* Outer Orbital Orbit Ring 2 in reverse */}
        <div className="absolute -inset-16 sm:-inset-20 rounded-full border border-dashed border-white/[0.04] animate-spin pointer-events-none" style={{ animationDuration: '55s', animationDirection: 'reverse' }}>
          <span className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-lg shadow-amber-400/80" />
          <span className="absolute top-1/2 left-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/80" />
        </div>

        {/* ==================================================== */}
        {/* 🛸 FLYING ORBITING ICONS SURROUNDING THE LOGO */}
        {/* ==================================================== */}

        {/* 1. YouTube Live Icon (Top-Right) */}
        <FloatingBrandIcon
          icon={Youtube}
          label="YouTube Live Channel"
          href="https://www.youtube.com"
          color="text-white fill-red-500"
          bgColor="bg-red-950/80"
          borderColor="border-red-500/50"
          glowColor="rgba(239, 68, 68, 0.45)"
          positionClass="-top-6 -right-4 sm:-top-8 sm:-right-8"
          floatDelay={0}
          floatDuration={3.8}
        />

        {/* 2. Instagram Icon (Top-Left) */}
        <FloatingBrandIcon
          icon={Instagram}
          label="Instagram @nyks_media_digital"
          href="https://www.instagram.com/nyks_media_digital"
          color="text-white"
          bgColor="bg-gradient-to-tr from-amber-600/80 via-pink-600/80 to-purple-700/80"
          borderColor="border-pink-400/50"
          glowColor="rgba(236, 72, 153, 0.45)"
          positionClass="-top-6 -left-4 sm:-top-8 sm:-left-8"
          floatDelay={0.5}
          floatDuration={4.2}
        />

        {/* 3. WhatsApp Icon (Bottom-Left) */}
        <FloatingBrandIcon
          icon={MessageCircle}
          label="WhatsApp +91 9490644434"
          href="https://wa.me/919490644434"
          color="text-white fill-[#25D366]"
          bgColor="bg-emerald-950/85"
          borderColor="border-[#25D366]/50"
          glowColor="rgba(37, 211, 102, 0.5)"
          positionClass="-bottom-6 -left-4 sm:-bottom-8 sm:-left-8"
          floatDelay={0.9}
          floatDuration={3.6}
        />

        {/* 4. Facebook Icon (Bottom-Right) */}
        <FloatingBrandIcon
          icon={Facebook}
          label="Facebook @nyks_media_digital"
          href="https://www.facebook.com/nyks_media_digital"
          color="text-white fill-blue-500"
          bgColor="bg-blue-950/85"
          borderColor="border-blue-500/50"
          glowColor="rgba(59, 130, 246, 0.45)"
          positionClass="-bottom-6 -right-4 sm:-bottom-8 sm:-right-8"
          floatDelay={1.2}
          floatDuration={4.4}
        />

        {/* 5. LinkedIn Icon (Right-Middle) */}
        <FloatingBrandIcon
          icon={Linkedin}
          label="LinkedIn Corporate"
          href="https://www.linkedin.com"
          color="text-sky-300"
          bgColor="bg-sky-950/80"
          borderColor="border-sky-500/40"
          glowColor="rgba(56, 189, 248, 0.4)"
          positionClass="top-1/2 -right-8 sm:-right-12 -translate-y-1/2 hidden xs:flex"
          floatDelay={0.3}
          floatDuration={4.0}
        />

        {/* 6. Web & App Development Icon (Left-Middle) */}
        <FloatingBrandIcon
          icon={Code2}
          label="Web & App Development"
          href="#tech-services"
          color="text-cyan-300"
          bgColor="bg-cyan-950/80"
          borderColor="border-cyan-400/40"
          glowColor="rgba(6, 182, 212, 0.4)"
          positionClass="top-1/2 -left-8 sm:-left-12 -translate-y-1/2 hidden xs:flex"
          floatDelay={0.7}
          floatDuration={3.9}
        />

        {/* ==================================================== */}
        {/* 🛡️ MAIN LOGO CARD */}
        {/* ==================================================== */}
        <motion.div
          animate={{
            y: [0, -8, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative rounded-3xl p-6 sm:p-9 bg-gradient-to-b from-[#101526]/95 via-[#0C101C]/95 to-[#070A12]/95 backdrop-blur-2xl border border-white/[0.18] group-hover:border-white/[0.35] transition-all duration-300 shadow-2xl shadow-black/95 flex flex-col items-center z-10"
        >
          {/* Subtle light sweep shine overlay */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </div>

          {/* Logo Image */}
          <div className="relative w-56 sm:w-64 md:w-72 max-w-full flex items-center justify-center p-2">
            <img
              src="/nyks-logo.png"
              alt="NYKS MEDIA Official Logo"
              className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(56,189,248,0.35)] group-hover:drop-shadow-[0_25px_45px_rgba(244,63,94,0.45)] transition-all duration-300"
            />
          </div>

          {/* Bottom Interactive Badge */}
          <div className="mt-4 pt-3 border-t border-white/[0.1] w-full flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1.5 font-semibold text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Official Brand Identity</span>
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/[0.08] text-amber-400 border border-amber-400/30 shadow-sm">
              EST. HYDERABAD
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Status Indicator */}
      <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-300 bg-white/[0.04] px-4 py-1.5 rounded-full border border-white/[0.08]">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Click any floating icon to visit YouTube, Instagram, WhatsApp, or Facebook</span>
      </div>

    </div>
  );
}
