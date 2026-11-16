import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Top Vibrant Multi-Color Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-purple-500 via-rose-500 to-amber-400 z-50 origin-left shadow-lg shadow-cyan-500/50"
        style={{ scaleX }}
      />

      {/* Vibrant Cosmic Ambient Background System */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Subtle high-tech grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />

        {/* Dynamic Vibrant Mouse Spotlight */}
        <div 
          className="absolute inset-0 transition-opacity duration-300 opacity-70"
          style={{
            background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.14), rgba(168, 85, 247, 0.09) 35%, rgba(244, 63, 94, 0.05) 60%, transparent 80%)`
          }}
        />

        {/* Floating Radiant Colored Blobs */}
        {/* Top Left: Electric Cyan & Azure */}
        <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/18 via-sky-600/15 to-transparent rounded-full blur-[130px] animate-mesh-1" />

        {/* Top Right: Electric Violet & Magenta */}
        <div className="absolute top-[5%] -right-[10%] w-[650px] h-[650px] bg-gradient-to-bl from-purple-600/20 via-pink-600/15 to-transparent rounded-full blur-[140px] animate-mesh-2" />

        {/* Center: YouTube Ruby Red & Rose Glow for Broadcast Energy */}
        <div className="absolute top-[40%] left-[20%] w-[550px] h-[550px] bg-gradient-to-r from-red-600/14 via-rose-500/12 to-transparent rounded-full blur-[140px] animate-mesh-1" style={{ animationDelay: '-5s' }} />

        {/* Bottom Right: Sunset Gold & Amber for Creative Energy */}
        <div className="absolute top-[65%] -right-[5%] w-[600px] h-[600px] bg-gradient-to-tl from-amber-500/16 via-orange-600/12 to-transparent rounded-full blur-[140px] animate-mesh-2" style={{ animationDelay: '-8s' }} />

        {/* Bottom Left: Emerald & Cyan for Tech Scalability */}
        <div className="absolute -bottom-[10%] -left-[5%] w-[650px] h-[650px] bg-gradient-to-tr from-emerald-500/14 via-cyan-500/12 to-transparent rounded-full blur-[140px] animate-mesh-1" style={{ animationDelay: '-12s' }} />

        {/* Soft edge blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070913]/60 via-transparent to-[#070913]/80" />
      </div>
    </>
  );
}
