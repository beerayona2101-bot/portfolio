import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { 
  PORTFOLIO_CATEGORIES, 
  PORTFOLIO_PROJECTS 
} from '../data/portfolioData';
import { 
  ArrowRight, 
  Sparkles, 
  Eye 
} from 'lucide-react';
import ProjectModal from './ProjectModal';

function PortfolioCardItem({ project, onSelect }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const getDivisionBadge = (div) => {
    if (div.includes("TECH")) return "text-cyan-300 bg-cyan-500/20 border-cyan-400/40";
    if (div.includes("DIGITAL")) return "text-pink-300 bg-pink-500/20 border-pink-400/40";
    return "text-red-300 bg-red-500/20 border-red-400/40";
  };

  const getBorderColor = (div) => {
    if (div.includes("TECH")) return "hover:border-cyan-400/60 hover:shadow-cyan-500/20";
    if (div.includes("DIGITAL")) return "hover:border-pink-500/60 hover:shadow-pink-500/20";
    return "hover:border-red-500/60 hover:shadow-red-500/20";
  };

  return (
    <motion.div
      layout
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      whileHover={{ y: -6, scale: 1.02 }}
      onClick={() => onSelect(project)}
      className={`group rounded-3xl bg-gradient-to-b from-[#101526] to-[#0A0D18] border border-white/[0.1] ${getBorderColor(project.division)} overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer relative`}
    >
      <div className="relative z-10">
        {/* Card Image */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-900">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101526] via-transparent to-transparent opacity-85" />
          
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border backdrop-blur-md shadow-md ${getDivisionBadge(project.division)}`}>
              {project.categoryLabel}
            </span>
          </div>

          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg">
              <Eye className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
            {project.division}
          </div>

          <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
            {project.shortDesc}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-[10px] font-medium text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 pt-3 border-t border-white/[0.06] flex items-center justify-between">
        <span className="text-xs font-bold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1.5">
          <span>Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
        <span className="text-[10px] text-slate-400 font-mono">
          Problem → Result
        </span>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection({ onStartProject }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "all" 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#070A14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-rose-500/15 border border-white/[0.15] text-xs font-bold text-white uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Selected Portfolio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
              Verified projects delivered across Web & Mobile, Digital Marketing, and YouTube Live.
            </p>
          </div>

          {/* Filter Tabs with Vibrant Gradient Active State */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-[#0E1322] border border-white/[0.1] shadow-lg">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500 via-purple-600 to-rose-500 text-white shadow-md shadow-purple-600/30' 
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <PortfolioCardItem 
                key={project.id} 
                project={project} 
                onSelect={setSelectedProject} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            onStartSimilar={onStartProject}
          />
        )}

      </div>
    </section>
  );
}
