import React, { useState } from 'react';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import DevServices from './components/DevServices';
import MarketingServices from './components/MarketingServices';
import MediaServices from './components/MediaServices';
import PathSelector from './components/PathSelector';
import PortfolioSection from './components/PortfolioSection';
import WhyNyks from './components/WhyNyks';
import ProcessSection from './components/ProcessSection';
import TechnologySection from './components/TechnologySection';
import ContactSection from './components/ContactSection';
import PreFooterCta from './components/PreFooterCta';
import Footer from './components/Footer';
import AboutModal from './components/AboutModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Layers } from 'lucide-react';

export default function App() {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactInitialService, setContactInitialService] = useState("");

  const handleStartProject = (serviceName = "") => {
    if (serviceName) {
      setContactInitialService(serviceName);
    }
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#06070A] text-slate-100 flex flex-col selection:bg-indigo-600 selection:text-white relative">
      
      {/* Dynamic Ambient Background & Scroll Progress System */}
      <AmbientBackground />

      {/* 1. Navbar */}
      <Navbar 
        onOpenContact={() => handleStartProject()}
        onOpenAbout={() => setAboutModalOpen(true)}
      />

      <main className="flex-grow relative z-10">
        {/* 2. Hero & 3. Three Core Services Indicator */}
        <Hero 
          onStartProject={() => handleStartProject()}
        />

        {/* 4. About NYKS MEDIA (More Than a Media Company + Three Pillars Diagram) */}
        <AboutSection 
          onOpenContact={() => handleStartProject()}
        />

        {/* Comprehensive Services Flow */}
        <section id="services" className="py-12 bg-[#06070A]/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4 shadow-sm">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span>End-to-End Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                What We Do
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                From building your digital product to promoting your brand and broadcasting your events — NYKS MEDIA handles the complete digital journey.
              </p>
            </div>

            {/* 5. Web & Mobile Development — Featured (Prominent #1) */}
            <DevServices onStartProject={handleStartProject} />

            {/* 6. Digital Marketing */}
            <MarketingServices onStartProject={handleStartProject} />

            {/* 7. YouTube Live & Event Media */}
            <MediaServices onStartProject={handleStartProject} />
          </div>
        </section>

        {/* Interactive Pathway Selector: What Are You Looking For? */}
        <PathSelector onSelectPath={(path) => console.log('Path selected', path)} />

        {/* 8. Selected Portfolio */}
        <PortfolioSection onStartProject={handleStartProject} />

        {/* 9. Why NYKS MEDIA (6 Feature Cards) */}
        <WhyNyks />

        {/* 10. Our Process (01 Discover to 06 Grow) */}
        <ProcessSection />

        {/* 11. Technology (Technology That Powers Your Ideas) */}
        <TechnologySection />

        {/* 12. Pre-Footer CTA (Your Idea Is the Next Project.) */}
        <PreFooterCta 
          onStartProject={() => handleStartProject()}
          onTalkToUs={() => handleStartProject()}
        />

        {/* 13. Contact (Have an Idea? Let's Build It.) */}
        <ContactSection initialService={contactInitialService} />
      </main>

      {/* 14. Footer */}
      <Footer 
        onOpenAbout={() => setAboutModalOpen(true)}
        onOpenContact={() => handleStartProject()}
      />

      {/* Dedicated About Modal Dialog */}
      <AboutModal 
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onStartProject={() => {
          setAboutModalOpen(false);
          handleStartProject();
        }}
      />

      {/* Floating Instant WhatsApp Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}
