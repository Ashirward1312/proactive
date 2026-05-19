import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Heart
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] pt-20 pb-10 text-white font-['Inter'] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">

          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <h3 className="font-['Poppins'] text-2xl font-bold tracking-tight">
                PRO ACTIVE <span className="text-[#C1121F]">PHYSIO</span>
              </h3>
            </Link>

            <p className="text-slate-400 text-base leading-relaxed font-medium">
              Elite physiotherapy and clinical rehabilitation services dedicated
              to restoring your movement and optimizing performance.
            </p>

            {/* ✅ SOCIAL ICONS FIXED */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition-all transform hover:-translate-y-1"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all transform hover:-translate-y-1"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all transform hover:-translate-y-1"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 transition-all transform hover:-translate-y-1"
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Poppins'] text-lg font-bold mb-8">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Success Stories", path: "/#testimonials" },
                { name: "Contact Team", path: "/contact" },
                { name: "Book Now", path: "/appointment" }
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-[#C1121F] transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-['Poppins'] text-lg font-bold mb-8">
              Contact Info
            </h4>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="icon-box">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="label">Phone</p>
                  <p className="value">+91 12345 67890</p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="icon-box">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="label">Email</p>
                  <p className="value">
                    care@proactivephysio.com
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="icon-box">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="label">Clinic</p>
                  <p className="value">
                    123 Health Avenue, Medical Square
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="font-['Poppins'] text-lg font-bold mb-8">
              Operating Hours
            </h4>

            <div className="space-y-4 p-6 rounded-3xl bg-white/5 border border-white/10 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Mon - Fri</span>
                <span className="font-bold text-slate-200">8AM - 8PM</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Saturday</span>
                <span className="font-bold text-slate-200">9AM - 6PM</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Sunday</span>
                <span className="font-bold text-[#C1121F]">
                  Emergency Only
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} PRO ACTIVE PHYSIO. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>

          <p className="flex items-center gap-1.5">
            Designed with
            <Heart className="w-3.5 h-3.5 text-[#C1121F] fill-[#C1121F]" />
            for your health.
          </p>
        </div>
      </div>
    </footer>
  );
}