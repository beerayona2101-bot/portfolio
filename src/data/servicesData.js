export const CORE_DIVISIONS = [
  {
    id: "tech",
    number: "01",
    tag: "TECHNOLOGY",
    title: "Web & Mobile Apps",
    shortDesc: "Custom websites, web apps, and mobile solutions.",
    icon: "Code2",
    color: "#38BDF8",
    gradient: "from-sky-500/20 to-indigo-500/20",
    borderClass: "glass-card-glow-tech",
    linkTarget: "#tech-services"
  },
  {
    id: "digital",
    number: "02",
    tag: "DIGITAL",
    title: "Digital Marketing",
    shortDesc: "Meta Ads, social media growth, and creative content.",
    icon: "Megaphone",
    color: "#F43F5E",
    gradient: "from-rose-500/20 to-orange-500/20",
    borderClass: "glass-card-glow-digital",
    linkTarget: "#digital-services"
  },
  {
    id: "live",
    number: "03",
    tag: "LIVE MEDIA",
    title: "YouTube & Event Live",
    shortDesc: "Multi-cam live streaming and event coverage.",
    icon: "Radio",
    color: "#10B981",
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderClass: "glass-card-glow-live",
    linkTarget: "#live-services"
  }
];

export const TECH_SERVICES = {
  id: "tech-services",
  badge: "NYKS TECHNOLOGY",
  title: "Web & Mobile Application Development",
  description: "Fast, modern, responsive applications built for your business.",
  ctaText: "Build Your App →",
  categories: [
    {
      title: "Websites",
      description: "Fast, responsive, modern web presence.",
      items: [
        "Business Websites",
        "Corporate Portals",
        "Landing Pages",
        "E-Commerce Stores",
        "Portfolio Sites"
      ],
      icon: "Globe"
    },
    {
      title: "Web Applications",
      description: "Custom management systems and dashboards.",
      items: [
        "Admin Dashboards",
        "CRM & ERP Systems",
        "HRMS Portals",
        "Hospital & Clinic Systems",
        "Custom Business Apps"
      ],
      icon: "LayoutDashboard"
    },
    {
      title: "Mobile Applications",
      description: "High-performance iOS & Android apps.",
      items: [
        "Android Applications",
        "iOS Applications",
        "Cross-Platform Apps",
        "Customer & B2B Apps",
        "E-Commerce Apps"
      ],
      icon: "Smartphone"
    }
  ],
  technologies: [
    { name: "React", category: "Frontend" },
    { name: "Vite", category: "Tooling" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "API" },
    { name: "MongoDB", category: "Database" },
    { name: "Python", category: "Backend" },
    { name: "Flutter", category: "Mobile" },
    { name: "Firebase", category: "Cloud" },
    { name: "REST APIs", category: "Integration" },
    { name: "Cloudinary", category: "Media CDN" }
  ]
};

export const DIGITAL_SERVICES = {
  id: "digital-services",
  badge: "NYKS DIGITAL",
  title: "Digital Marketing",
  description: "Targeted campaigns and creative content that drive real results.",
  ctaText: "Grow Your Brand →",
  categories: [
    {
      title: "Social Media",
      description: "Build audience and active brand presence.",
      items: [
        "Instagram & Facebook",
        "LinkedIn Growth",
        "Content Calendars",
        "Brand Strategy"
      ],
      icon: "Share2"
    },
    {
      title: "Creative Design",
      description: "Visual assets that catch immediate attention.",
      items: [
        "Social Media Posters",
        "Ad Creatives",
        "Brand Identity",
        "Business Graphics"
      ],
      icon: "Palette"
    },
    {
      title: "Video Marketing",
      description: "High-engagement short video content.",
      items: [
        "Promotional Videos",
        "Instagram Reels & Shorts",
        "Product Showcases",
        "AI Video Production"
      ],
      icon: "Video"
    },
    {
      title: "Meta Ads",
      description: "High-ROI paid ads on FB & Instagram.",
      items: [
        "Lead Generation",
        "Targeted Ad Campaigns",
        "Audience Research",
        "Daily Optimization"
      ],
      icon: "Target"
    }
  ]
};

export const LIVE_SERVICES = {
  id: "live-services",
  badge: "NYKS LIVE",
  title: "YouTube Live & Event Media",
  description: "Broadcast-quality live streaming for celebrations and events.",
  ctaText: "Plan Your Event →",
  servicesList: [
    { name: "YouTube Live", desc: "Crystal clear 4K/HD streaming directly to YouTube." },
    { name: "Weddings & Celebrations", desc: "Cinematic multi-camera broadcast for families worldwide." },
    { name: "Corporate Events & Summits", desc: "AGMs, product launches, and hybrid conferences." },
    { name: "Concerts & Shows", desc: "Multi-angle visual capture with soundboard audio mix." },
    { name: "Interviews & Panels", desc: "Studio lighting, crisp wireless mics, and multi-cam angles." }
  ],
  productionHighlights: [
    { title: "ATEM Switchers", detail: "Hardware vision mixing & real-time lower thirds." },
    { title: "Pro Audio", detail: "DSP filtering and wireless multi-channel mics." },
    { title: "Cinema Cameras", detail: "Crisp 4K/FHD multi-angle event coverage." },
    { title: "Bonded Internet", detail: "Multi-SIM redundancy for zero streaming drops." }
  ]
};
