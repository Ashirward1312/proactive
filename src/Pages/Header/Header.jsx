import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../img/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Appointment", path: "/appointment" },
  ];

  // Logic for dynamic colors based on scroll and page
  const headerBg = isScrolled 
    ? "bg-white/95 backdrop-blur-xl py-3 shadow-lg shadow-slate-200/50 border-b border-slate-200/60" 
    : "bg-transparent py-5";

  const textColor = isHomePage && !isScrolled ? "text-white" : "text-[#0F172A]";
  const navTextColor = isHomePage && !isScrolled ? "text-white/80" : "text-slate-600";
  const logoTextColor = isHomePage && !isScrolled ? "text-white" : "text-[#0F172A]";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-['Inter'] ${headerBg}`}>
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* 🏥 Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#C1121F]/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src={logo} 
              alt="Proactive Physiotherapy Logo" 
              className="relative w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          <div className="flex flex-col">
            <span className={`font-['Poppins'] text-xl font-bold leading-tight tracking-tight transition-colors duration-500 ${logoTextColor}`}>
              Proactive
            </span>
            <span className="font-['Inter'] text-[10px] font-bold text-[#C1121F] uppercase tracking-[0.25em]">
              Physiotherapy
            </span>
          </div>
        </Link>

        {/* 🧭 Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => `
                text-sm font-semibold transition-all duration-300 relative group py-2
                ${isActive ? "text-[#C1121F]" : `${navTextColor} hover:text-[#C1121F]`}
              `}
            >
              {link.name}
              <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C1121F] to-[#DC2626] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* 📱 CTA Buttons & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/appointment">
            <button 
              className="hidden sm:flex items-center gap-2 text-white px-6 lg:px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-[#C1121F]/30 active:scale-95 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #C1121F 0%, #DC2626 100%)' }}
            >
              Book Now
            </button>
          </Link>
          
          <button 
            className={`lg:hidden w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 border ${
              isHomePage && !isScrolled ? "text-white border-white/20 hover:bg-white/10" : "text-[#0F172A] border-slate-100 hover:bg-slate-50"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-8 gap-8">
            <div className="flex items-center justify-between border-b border-slate-50 pb-6">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                <span className="font-bold text-[#0F172A]">Proactive</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path} 
                  className={({ isActive }) => `
                    text-lg font-bold transition-all
                    ${isActive ? "text-[#C1121F]" : "text-slate-900 hover:text-[#C1121F]"}
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <Link to="/appointment" onClick={() => setIsMobileMenuOpen(false)}>
              <button 
                className="w-full text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-[#C1121F]/20"
                style={{ background: 'linear-gradient(135deg, #C1121F 0%, #DC2626 100%)' }}
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}