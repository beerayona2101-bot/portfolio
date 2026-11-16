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
      {/* Top Scroll Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-sky-400 via-indigo-500 to-emerald-400 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Full screen ambient background system */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Dynamic Cursor Spotlight */}
        <div 
          className="absolute inset-0 transition-opacity duration-300 opacity-60"
          style={{
            background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.06), rgba(56, 189, 248, 0.03) 40%, transparent 80%)`
          }}
        />

        {/* Floating Ambient Glowing Blobs */}
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-indigo-600/[0.07] rounded-full blur-[140px] animate-float-slow" />
        <div className="absolute top-[35%] right-[10%] w-[450px] h-[450px] bg-sky-500/[0.06] rounded-full blur-[130px] animate-float-slow" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-[65%] left-[8%] w-[480px] h-[480px] bg-rose-500/[0.05] rounded-full blur-[140px] animate-float-slow" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-[85%] right-[15%] w-[520px] h-[520px] bg-emerald-500/[0.05] rounded-full blur-[150px] animate-float-slow" style={{ animationDelay: '-4s' }} />

        {/* Top edge subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06070A] via-transparent to-[#06070A] opacity-90" />
      </div>
    </>
  );
}
