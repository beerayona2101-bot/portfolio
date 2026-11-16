import React from 'react';
import { 
  ArrowUp, 
  MapPin, 
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Youtube
} from 'lucide-react';

export default function Footer({ onOpenAbout, onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050608] border-t border-white/[0.08] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          
          {/* Brand */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500/30 via-sky-500/30 to-amber-500/30 p-[1px] overflow-hidden">
                <div className="w-full h-full bg-[#0A0C13] rounded-[11px] flex items-center justify-center p-1">
                  <img 
                    src="/nyks-emblem.png" 
                    alt="NYKS Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span className="text-base font-extrabold text-white tracking-tight">
                NYKS MEDIA
              </span>
            </div>

            <p className="text-xs font-semibold text-slate-300">
              Technology. Marketing. Media.
            </p>

            <p className="text-xs text-slate-500 max-w-sm">
              Helping businesses build websites and mobile apps, grow with digital marketing, and stream events live on YouTube.
            </p>

            <div className="pt-1 flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>Hyderabad, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={onOpenAbout} 
                  className="hover:text-white transition-colors"
                >
                  About NYKS
                </button>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('#portfolio'); }}
                  className="hover:text-white transition-colors"
                >
                  Selected Work
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="#tech-services" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('#tech-services'); }}
                  className="hover:text-sky-400 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a 
                  href="#tech-services" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('#tech-services'); }}
                  className="hover:text-sky-400 transition-colors"
                >
                  Mobile Applications
                </a>
              </li>
              <li>
                <a 
                  href="#digital-services" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('#digital-services'); }}
                  className="hover:text-rose-400 transition-colors"
                >
                  Meta Ads & Marketing
                </a>
              </li>
              <li>
                <a 
                  href="#live-services" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('#live-services'); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  YouTube Live Streaming
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Connect
            </h4>
            <div className="space-y-2.5">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Chat</span>
              </a>
              <div className="flex items-center gap-2 text-slate-500">
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Facebook className="w-3.5 h-3.5 text-blue-400" />
                <span>Facebook</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Youtube className="w-3.5 h-3.5 text-red-500" />
                <span>YouTube</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <div>
            © 2026 NYKS MEDIA. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Hyderabad, India</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
