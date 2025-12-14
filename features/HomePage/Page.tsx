"use client";

import React from "react";
import { 
  Download, 
  ArrowRightLeft, 
  FileText, 
  Mail, 
  CheckCircle, 
  Star,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Briefcase
} from "lucide-react";

// --- PROFILE DATA ---
const profile = {
  name: "Abraham Allotey",
  role: "Group CEO, Unlimited Solutions",
  location: "Accra, Ghana",
  // Constructed bio based on his companies
  bio: "Entrepreneur and business leader managing a diverse portfolio of companies. Focused on delivering excellence in product distribution, corporate travel solutions, and student housing services across Ghana.",
  // Professional Placeholder (Replace with his real photo)
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60",
  email: "info@unlimited.com", // Placeholder
  socials: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
    twitter: "#",
  }
};

// --- THE COMPANIES SLIDER ---
const links = [
  {
    title: "Unlimited Solutions Services",
    description: "Purchase & supply services. Sub-distributor for Colgate products in Tema & Ashiaman.",
    // Logistics/Warehouse Image
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=60",
    url: "https://unlimited-kohl.vercel.app" // <--- YOUR LINK HERE
  },
  {
    title: "MiWorld Travel and Tour",
    description: "Comprehensive travel solutions for individuals & corporate clients across West Africa.",
    // Travel/Plane Image
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&auto=format&fit=crop&q=60",
    url: "#" // Placeholder for now
  },
  {
    title: "Bethel Hostels",
    description: "Premium student accommodation for University of Ghana & UPSA students.",
    // Building/Hostel Image
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=60",
    url: "#" // Placeholder for now
  }
];

export default function HomePage() {

  // --- FUNCTIONALITY: Generate vCard ---
  const handleSaveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${profile.name}
ORG:${profile.role}
ADR:;;${profile.location}
NOTE:${profile.bio}
EMAIL:${profile.email}
END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${profile.name.replace(" ", "_")}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExchange = () => {
    window.location.href = `mailto:${profile.email}?subject=Let's Connect`;
  };

  return (
    <>
      {/* 1. GLOBAL STYLES FOR SCROLLBAR HIDING */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>

      {/* PAGE WRAPPER */}
      <div className="min-h-screen w-full bg-white md:bg-neutral-100 flex items-start md:items-center justify-center md:p-8">
        
        {/* MOBILE APP CARD */}
        <div className="w-full md:max-w-[400px] bg-white md:rounded-[36px] md:shadow-2xl overflow-hidden relative min-h-screen md:min-h-0 ring-1 ring-black/5">
          
          {/* --- HEADER IMAGE --- */}
          <div className="relative h-[45vh] md:h-[400px] w-full group">
            <img 
              src={profile.image} 
              alt={profile.name} 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            
            {/* Pro Badge */}
            <div className="absolute bottom-10 left-6 bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm border border-white/20">
              <Star size={10} className="fill-white" /> CEO
            </div>
          </div>

          {/* --- CONTENT CARD --- */}
          <div className="relative -mt-8 bg-white rounded-t-[36px] px-6 pt-10 pb-12 z-10">
            
            {/* Drag Handle (Visual) */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-neutral-200 rounded-full md:hidden" />

            {/* NAME & HEADER */}
            <div className="mb-8">
              <h1 className="text-[28px] font-extrabold text-black flex items-center gap-2 tracking-tight leading-none">
                {profile.name}
                <CheckCircle size={22} className="text-blue-500 fill-blue-500 text-white" />
              </h1>
              <p className="text-neutral-500 text-sm mt-3 leading-snug font-medium">
                {profile.role} <br /> {profile.location}
              </p>
            </div>

            {/* MAIN ACTIONS */}
            <div className="flex gap-3 mb-10">
              <button 
                onClick={handleSaveContact}
                className="flex-1 bg-black text-white h-[52px] rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 active:scale-95 transition-transform shadow-lg shadow-black/20 hover:bg-neutral-800"
              >
                <Download size={18} strokeWidth={2.5} />
                Save contact
              </button>
              <button 
                onClick={handleExchange}
                className="flex-1 bg-white border border-neutral-200 text-black h-[52px] rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 active:scale-95 transition-transform hover:bg-neutral-50"
              >
                <ArrowRightLeft size={18} strokeWidth={2.5} />
                Connect
              </button>
            </div>

            {/* BIO */}
            <div className="mb-10">
              <h3 className="font-bold text-black text-lg mb-3">About</h3>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                {profile.bio}
              </p>
            </div>

            {/* QUICK ACTIONS */}
            <div className="mb-10">
              <h3 className="font-bold text-black text-lg mb-3">Quick Actions</h3>
              <div className="flex gap-3">
                <button className="flex-1 border border-neutral-200 h-[52px] rounded-2xl text-sm font-semibold text-neutral-800 flex items-center justify-center gap-2.5 hover:bg-neutral-50 transition-colors active:bg-neutral-100">
                  <FileText size={18} />
                  Company Profile
                </button>
                <button className="flex-1 border border-neutral-200 h-[52px] rounded-2xl text-sm font-semibold text-neutral-800 flex items-center justify-center gap-2.5 hover:bg-neutral-50 transition-colors active:bg-neutral-100">
                  <Mail size={18} />
                  Email Me
                </button>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mb-10">
              <h3 className="font-bold text-black text-lg mb-4">Social</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
                <SocialBtn icon={<Linkedin size={22} />} href={profile.socials.linkedin} />
                <SocialBtn icon={<Facebook size={22} />} href={profile.socials.facebook} />
                <SocialBtn icon={<Twitter size={22} />} href={profile.socials.twitter} />
                <SocialBtn icon={<Instagram size={22} />} href={profile.socials.instagram} />
              </div>
            </div>

            {/* --- COMPANIES SLIDER (The Core Feature) --- */}
            <div className="relative">
              <div className="flex items-center justify-between mb-4 cursor-pointer group">
                <h3 className="font-bold text-black text-lg">My Companies</h3>
                <ChevronRight size={20} className="text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Horizontal Scroll Container */}
              <div className="flex overflow-x-auto gap-4 pb-8 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
                {links.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-[200px] snap-start bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-95 duration-200 group"
                  >
                    {/* Image Area */}
                    <div className="h-32 w-full bg-neutral-100 relative overflow-hidden">
                      <img 
                        src={link.image} 
                        alt={link.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      {/* Overlay badge */}
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur rounded-md p-1.5 shadow-sm">
                        <Briefcase size={14} className="text-black" />
                      </div>
                    </div>
                    {/* Text Area */}
                    <div className="p-4">
                      <p className="text-[14px] font-bold text-black leading-tight mb-1">
                        {link.title}
                      </p>
                      <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-[-15px]">
                <div className="w-6 h-1.5 bg-black rounded-full" />
                <div className="w-1.5 h-1.5 bg-neutral-200 rounded-full" />
                <div className="w-1.5 h-1.5 bg-neutral-200 rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

// Helper Component for Social Buttons
const SocialBtn = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <a 
    href={href}
    className="w-14 h-14 flex-shrink-0 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-black hover:text-white hover:border-black transition-all active:scale-90 shadow-sm"
  >
    {icon}
  </a>
);