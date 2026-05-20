import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  MapPin,
  Heart,
  Clock,
} from "lucide-react";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

// ── Real clinic data ─────────────────────────────────────────────
const WA_NUMBER  = "918085354646";
const INSTAGRAM  = "https://www.instagram.com/proactive_physiotherapy/?hl=en";
const ADDRESS    = "LIG-68, Aashirwad, Sector-2, Shankar Nagar, Raipur, Chhattisgarh";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] pt-20 pb-10 text-white font-['Inter'] overflow-hidden relative">

      {/* Subtle background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C1121F]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">

          {/* ── Brand ── */}
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="inline-block">
              <h3 className="font-['Poppins'] text-2xl font-bold tracking-tight">
                PRO ACTIVE <span className="text-[#C1121F]">PHYSIO</span>
              </h3>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed">
              Elite physiotherapy & clinical rehabilitation services dedicated
              to restoring your movement and optimizing performance.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 hover:-translate-y-1"
              >
                <FaWhatsapp size={17} />
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Instagram"
                className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent transition-all duration-300 hover:-translate-y-1"
                style={{}}
              >
                <FaInstagram size={17} />
              </a>

              
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="font-['Poppins'] text-base font-bold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us",       path: "/about" },
                { name: "Our Treatments", path: "/treatment" },
                { name: "Success Stories",path: "/#testimonials" },
                { name: "Contact Team",   path: "/contact" },
                { name: "Book Now",       path: "/appointment" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-[#C1121F] transition-colors inline-flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div>
            <h4 className="font-['Poppins'] text-base font-bold mb-6 text-white">
              Contact Info
            </h4>
            <ul className="space-y-5">

              {/* Phone */}
              <li className="flex gap-3 items-start">
                <div className="w-9 h-9 shrink-0 rounded-xl bg-[#C1121F]/10 text-[#C1121F] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+918085354646" className="text-slate-300 hover:text-white transition text-sm block">
                    +91 80853 54646
                  </a>
                  <a href="tel:+919893092426" className="text-slate-300 hover:text-white transition text-sm block">
                    +91 98930 92426
                  </a>
                </div>
              </li>

              {/* WhatsApp */}
              <li className="flex gap-3 items-start">
                <div className="w-9 h-9 shrink-0 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                  <FaWhatsapp size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">WhatsApp</p>
                  <a
                    href={`https://wa.me/${WA_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[#25D366] transition text-sm"
                  >
                    +91 80853 54646
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex gap-3 items-start">
                <div className="w-9 h-9 shrink-0 rounded-xl bg-[#C1121F]/10 text-[#C1121F] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">Clinic</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition text-sm leading-relaxed"
                  >
                    LIG-68, Aashirwad, Sector-2,<br />
                    Shankar Nagar, Raipur,<br />
                    Chhattisgarh
                  </a>
                </div>
              </li>

            </ul>
          </div>

          {/* ── Hours ── */}
          <div>
            <h4 className="font-['Poppins'] text-base font-bold mb-6 text-white">
              Operating Hours
            </h4>

            <div className="space-y-4 p-5 rounded-3xl bg-white/5 border border-white/10 text-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-[#C1121F]" />
                  Mon – Fri
                </div>
                <span className="font-bold text-slate-200 text-xs">8AM – 8PM</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-[#C1121F]" />
                  Saturday
                </div>
                <span className="font-bold text-slate-200 text-xs">9AM – 6PM</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-[#C1121F]" />
                  Sunday
                </div>
                <span className="font-bold text-[#C1121F] text-xs">Emergency Only</span>
              </div>

              {/* Quick CTA */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20an%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-['Poppins'] font-semibold text-xs transition-colors"
                >
                  <FaWhatsapp size={14} />
                  Book via WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-8 mt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-slate-500">
            {/* Left Side */}
            <div className="text-center md:text-left">
              <p className="text-sm tracking-wide">
                © {new Date().getFullYear()}{" "}
                <span className="text-white font-semibold">
                  PRO ACTIVE PHYSIO
                </span>
                . All rights reserved.
              </p>
              <p className="text-xs mt-1">
                Designed for better care & modern physiotherapy experience.
              </p>
            </div>

            {/* Right Side */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link
                to="/privacy"
                className="hover:text-white transition-all duration-300 hover:scale-105"
              >
                Privacy Policy
              </Link>
              <span className="text-white/10">•</span>
              <Link
                to="/terms"
                className="hover:text-white transition-all duration-300 hover:scale-105"
              >
                Terms of Service
              </Link>
              <span className="hidden md:block text-white/10">|</span>
              <a
                href="https://spadvertising.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-all duration-300"
              >
                <span className="text-slate-400 text-xs uppercase tracking-wider">
                  Made by
                </span>
                <span className="font-semibold text-slate-200 group-hover:text-[#C1121F] transition-colors duration-300">
                  SP Advertising
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}