import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function AnimatedLogoShowcase({ variant = "full" }) {
  const cardRef = useRef(null);

  // Mouse position values for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for buttery smooth rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 260,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
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
    <div className="relative flex flex-col items-center justify-center py-6">
      
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
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-sky-500/25 via-purple-600/30 to-amber-500/25 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />

        {/* Ambient Ring / Orbit Effect */}
        <div className="absolute -inset-8 rounded-full border border-white/[0.06] animate-spin" style={{ animationDuration: '30s' }}>
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
        </div>
        <div className="absolute -inset-14 rounded-full border border-white/[0.03] animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50" />
        </div>

        {/* Main Logo Card */}
        <motion.div
          animate={{
            y: [0, -8, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative rounded-3xl p-6 sm:p-8 bg-[#0B0D16]/90 backdrop-blur-2xl border border-white/[0.14] group-hover:border-white/[0.3] transition-all duration-300 shadow-2xl shadow-black/90 flex flex-col items-center"
        >
          {/* Subtle light sweep shine overlay */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </div>

          {/* Logo Image */}
          <div className="relative w-56 sm:w-64 md:w-72 max-w-full flex items-center justify-center p-2">
            <img
              src="/nyks-logo.png"
              alt="NYKS MEDIA Official Logo"
              className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(56,189,248,0.25)] group-hover:drop-shadow-[0_20px_40px_rgba(244,63,94,0.35)] transition-all duration-300"
            />
          </div>

          {/* Bottom Interactive Badge */}
          <div className="mt-4 pt-3 border-t border-white/[0.08] w-full flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Official Brand Identity</span>
            </span>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/[0.06] text-amber-400 border border-amber-400/20">
              EST. HYDERABAD
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Status Indicator */}
      <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>Hover or move your cursor to interact in 3D</span>
      </div>

    </div>
  );
}
