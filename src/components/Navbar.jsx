import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Code2, 
  Smartphone, 
  Megaphone, 
  Palette, 
  Radio, 
  Video, 
  ArrowRight,
  Sparkles,
  MessageCircle
} from 'lucide-react';

export default function Navbar({ onOpenContact, onOpenAbout }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    {
      name: "Web Development",
      desc: "Business, corporate & custom websites",
      href: "#tech-services",
      icon: Code2,
      color: "text-sky-400",
      bgHover: "hover:bg-sky-500/10"
    },
    {
      name: "Mobile App Development",
      desc: "Android, iOS & cross-platform apps",
      href: "#tech-services",
      icon: Smartphone,
      color: "text-indigo-400",
      bgHover: "hover:bg-indigo-500/10"
    },
    {
      name: "Digital Marketing",
      desc: "Social media, Meta Ads & lead growth",
      href: "#digital-services",
      icon: Megaphone,
      color: "text-rose-400",
      bgHover: "hover:bg-rose-500/10"
    },
    {
      name: "Branding & Creative",
      desc: "Identity, posters & campaign visuals",
      href: "#digital-services",
      icon: Palette,
      color: "text-amber-400",
      bgHover: "hover:bg-amber-500/10"
    },
    {
      name: "YouTube Live",
      desc: "4K live streaming with ATEM switchers",
      href: "#live-services",
      icon: Radio,
      color: "text-emerald-400",
      bgHover: "hover:bg-emerald-500/10"
    },
    {
      name: "Event Media",
      desc: "Weddings, concerts & corporate coverage",
      href: "#live-services",
      icon: Video,
      color: "text-purple-400",
      bgHover: "hover:bg-purple-500/10"
    }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[#06070A]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/80' 
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with official emblem icon */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="NYKS MEDIA Home"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/30 via-sky-500/30 to-amber-500/30 p-[1px] shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all duration-300 group-hover:scale-105 overflow-hidden">
              <div className="w-full h-full bg-[#0A0C13] rounded-[11px] flex items-center justify-center p-1">
                <img 
                  src="/nyks-emblem.png" 
                  alt="NYKS Logo Icon" 
                  className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-white flex items-center gap-1.5 group-hover:text-slate-200 transition-colors">
                NYKS MEDIA
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                Tech • Marketing • Media
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <a 
              href="#" 
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/[0.05] transition-all"
            >
              Home
            </a>

            {/* Services Dropdown with Framer Motion */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/[0.05] transition-all focus:outline-none"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-sky-400' : 'text-slate-400'}`} />
              </button>

              {/* Animated Dropdown Menu */}
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 lg:w-96"
                  >
                    <div className="bg-[#0C0F1A]/95 backdrop-blur-2xl border border-white/[0.12] rounded-2xl p-3.5 shadow-2xl shadow-black/90">
                      <div className="flex items-center justify-between px-3 py-1.5 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                        <span>Our Divisions & Services</span>
                        <Sparkles className="w-3 h-3 text-sky-400" />
                      </div>
                      <div className="space-y-1 mt-1">
                        {serviceLinks.map((service, idx) => {
                          const Icon = service.icon;
                          return (
                            <a
                              key={idx}
                              href={service.href}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(service.href);
                              }}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-all duration-200 group"
                            >
                              <div className={`p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform ${service.color}`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-xs text-slate-400 line-clamp-1">
                                  {service.desc}
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a 
              href="#portfolio" 
              onClick={(e) => { e.preventDefault(); handleNavClick("#portfolio"); }}
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/[0.05] transition-all"
            >
              Portfolio
            </a>

            <button 
              onClick={onOpenAbout}
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/[0.05] transition-all"
            >
              About
            </button>

            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/[0.05] transition-all"
            >
              Contact
            </a>
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://wa.me/919490644434"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all shadow-sm"
              title="Chat with us on WhatsApp (+91 9490644434)"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenContact}
              className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-600 bg-size-200 hover:bg-right transition-all duration-300 shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/50"
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.1] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-white/[0.08] bg-[#08090D]/98 backdrop-blur-2xl px-5 pt-3 pb-6 overflow-hidden"
          >
            <div className="space-y-1">
              <a
                href="#"
                onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="block px-3 py-2.5 text-base font-medium text-white rounded-lg hover:bg-white/[0.06]"
              >
                Home
              </a>

              {/* Mobile Services Accordion */}
              <div className="py-1">
                <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Services
                </div>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {serviceLinks.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <a
                        key={idx}
                        href={service.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(service.href);
                        }}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.06]"
                      >
                        <Icon className={`w-4 h-4 ${service.color}`} />
                        <span>{service.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <a
                href="#portfolio"
                onClick={(e) => { e.preventDefault(); handleNavClick("#portfolio"); }}
                className="block px-3 py-2.5 text-base font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.06]"
              >
                Portfolio
              </a>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAbout(); }}
                className="block w-full text-left px-3 py-2.5 text-base font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.06]"
              >
                About NYKS MEDIA
              </button>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="block px-3 py-2.5 text-base font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.06]"
              >
                Contact Us
              </a>

              <div className="pt-4 space-y-2">
                <a
                  href="https://wa.me/919490644434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-[#25D366] bg-[#25D366]/15 border border-[#25D366]/30 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
                  <span>Chat on WhatsApp (9490644434)</span>
                </a>

                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-sky-600 shadow-lg shadow-indigo-600/30"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
