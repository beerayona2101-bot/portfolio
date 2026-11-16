import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Instagram,
  Facebook,
  MessageCircle
} from 'lucide-react';

export default function ContactSection({ initialService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: initialService || "Website Development",
    budget: "₹50k - ₹1.5L",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const serviceOptions = [
    "Website Development",
    "Web Application",
    "Mobile Application",
    "Digital Marketing",
    "Social Media Marketing",
    "Branding & Creative",
    "YouTube Live",
    "Event Media",
    "Other"
  ];

  const budgetOptions = [
    "< ₹50,000",
    "₹50,000 - ₹1,50,000",
    "₹1,50,000 - ₹5,00,000",
    "₹5,00,000+",
    "Custom / Let's Discuss"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hi NYKS MEDIA!\n\nName: ${formData.name || 'Client'}\nService: ${formData.service}\nBudget: ${formData.budget}\nDetails: ${formData.message || 'I would like to discuss my project.'}`
    );
    window.open(`https://wa.me/919490644434?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#06070A] relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
            <span>Contact Us</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have an Idea? Let's Build It.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Fill the form or reach out directly on WhatsApp. We reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0E111C] border border-white/[0.08] space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                Direct Channels
              </h3>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400">Email</div>
                  <a href="mailto:contact@nyksmedia.com" className="text-xs font-semibold text-white hover:text-sky-300">
                    contact@nyksmedia.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400">Phone / WhatsApp</div>
                  <a href="tel:+919490644434" className="text-xs font-semibold text-white hover:text-emerald-300 transition-colors">
                    +91 9490644434
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400">Headquarters</div>
                  <div className="text-xs font-semibold text-white">Hyderabad, India</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://www.instagram.com/nyks_media_digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/20 text-pink-400 text-xs font-medium transition-all"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span className="truncate">@nyks_media_digital</span>
                </a>
                <a
                  href="https://www.facebook.com/nyks_media_digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 text-xs font-medium transition-all"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span className="truncate">Facebook</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] text-xs font-bold transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 9490644434)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
              <span>All project inquiries are strictly confidential under standard NDA.</span>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#0E111C] border border-white/[0.08] shadow-xl">
              
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Request Received!
                  </h3>
                  <p className="text-xs text-slate-300">
                    Thank you, {formData.name}. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-xl bg-white/[0.05] text-xs font-semibold text-slate-300"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#08090F] border border-white/[0.1] focus:border-sky-500 text-white text-xs placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">
                        Company / Business
                      </label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#08090F] border border-white/[0.1] focus:border-sky-500 text-white text-xs placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#08090F] border border-white/[0.1] focus:border-sky-500 text-white text-xs placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 94906 44434"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#08090F] border border-white/[0.1] focus:border-sky-500 text-white text-xs placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">
                        Service *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#08090F] border border-white/[0.1] focus:border-sky-500 text-white text-xs transition-colors"
                      >
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-[#0E111C] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">
                        Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#08090F] border border-white/[0.1] focus:border-sky-500 text-white text-xs transition-colors"
                      >
                        {budgetOptions.map((b, i) => (
                          <option key={i} value={b} className="bg-[#0E111C] text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">
                      Brief Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what you want to build or stream..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#08090F] border border-white/[0.1] focus:border-sky-500 text-white text-xs placeholder:text-slate-600 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white bg-sky-600 hover:bg-sky-500 text-xs shadow-md transition-all"
                  >
                    <span>{loading ? "Sending..." : "Send Request"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
