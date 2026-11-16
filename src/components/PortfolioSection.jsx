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

  const getDivisionColor = (div) => {
    if (div.includes("TECH")) return "text-sky-400 bg-sky-500/10 border-sky-500/20";
    if (div.includes("DIGITAL")) return "text-rose-400 bg-rose-500/10 border-rose-500/20";
    return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
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
      whileHover={{ y: -4 }}
      onClick={() => onSelect(project)}
      className="group rounded-2xl bg-[#0D101C] border border-white/[0.08] hover:border-white/[0.2] overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-lg cursor-pointer relative"
    >
      <div className="relative z-10">
        {/* Card Image */}
        <div className="relative h-44 w-full overflow-hidden bg-slate-900">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D101C] via-transparent to-transparent opacity-80" />
          
          <div className="absolute top-3 left-3">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${getDivisionColor(project.division)}`}>
              {project.categoryLabel}
            </span>
          </div>

          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="p-2 rounded-lg bg-black/70 border border-white/20 text-white flex items-center justify-center">
              <Eye className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4">
          <h3 className="text-base font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-2 mb-3">
            {project.shortDesc}
          </p>

          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 pt-2 border-t border-white/[0.04] flex items-center justify-between">
        <span className="text-xs font-semibold text-sky-400 group-hover:text-sky-300 flex items-center gap-1">
          <span>Case Study</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </span>
        <span className="text-[10px] text-slate-500 font-mono">
          {project.division}
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
    <section id="portfolio" className="py-20 bg-[#080A12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Portfolio</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Real projects delivered across Technology, Marketing, and Media.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0F1322] border border-white/[0.08]">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
