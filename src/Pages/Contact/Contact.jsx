import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare
} from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const ease = [0.22, 1, 0.36, 1];

// ── Real clinic data ─────────────────────────────────────────────
const PHONE_1 = "8085354646";
const PHONE_2 = "9893092426";
const WA_NUMBER = "918085354646"; // WhatsApp — 91 + number (no spaces)
const INSTAGRAM  = "https://www.instagram.com/proactivephysiotherapy";
const ADDRESS    = "LIG-68, Aashirwad, Sector-2, Shankar Nagar, Raipur, Chhattisgarh";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name    = formData.get("name");
    const message = formData.get("message");
    const text    = `Hi, I'm ${name}. ${message}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const contactCards = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Call Us",
      value: `+91 ${PHONE_1} / ${PHONE_2}`,
      href: `tel:+91${PHONE_1}`,
    },
    {
      icon: <FaWhatsapp size={22} />,
      label: "WhatsApp",
      value: `+91 ${PHONE_1}`,
      href: `https://wa.me/${WA_NUMBER}`,
      target: "_blank",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email Us",
      value: "care@proactivephysio.com",
      href: "mailto:care@proactivephysio.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Visit Us",
      value: ADDRESS,
      href: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`,
      target: "_blank",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Working Hours",
      value: "Mon – Sat: 8 AM – 8 PM",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-white via-[#F8FAFC] to-white overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-red-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-400/10 blur-[120px] rounded-full" />

      {/* HERO */}
      <section className="pt-32 pb-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6 leading-tight font-['Poppins']">
            Let's Start Your{" "}
            <span className="text-[#C1121F]">Recovery Journey</span>
          </h1>
          <p className="text-slate-600 text-lg">
            Reach out today and take the first step toward a pain‑free life.
          </p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="pb-28 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-5">

            {/* Contact Cards */}
            {contactCards.map((item, index) => {
              const Wrapper = item.href ? motion.a : motion.div;
              const wrapperProps = item.href
                ? { href: item.href, target: item.target ?? "_self", rel: "noopener noreferrer" }
                : {};

              return (
                <Wrapper
                  key={index}
                  {...wrapperProps}
                  whileHover={{ y: -4 }}
                  className="group flex items-center gap-5 p-6 bg-white/70 backdrop-blur-lg border border-slate-200 rounded-3xl shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-xl hover:border-[#C1121F]/20 transition-all cursor-pointer"
                >
                  <div className="w-13 h-13 min-w-[52px] min-h-[52px] bg-[#C1121F]/10 text-[#C1121F] rounded-2xl flex items-center justify-center group-hover:bg-[#C1121F] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="font-semibold text-[#0F172A] text-base leading-snug">
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}

            {/* Social Row */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center gap-2.5 px-5 py-3 bg-[#25D366] text-white rounded-2xl font-['Poppins'] font-semibold text-sm shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all"
              >
                <FaWhatsapp size={18} />
                WhatsApp Us
              </motion.a>

              <motion.a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center gap-2.5 px-5 py-3 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white rounded-2xl font-['Poppins'] font-semibold text-sm shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all"
              >
                <FaInstagram size={18} />
                Follow Us
              </motion.a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#0F172A] to-[#111827] p-10 rounded-[40px] text-white shadow-2xl overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-red-500/10 blur-[100px] rounded-full" />
            <MessageSquare className="absolute top-10 right-10 w-24 h-24 opacity-5" />

            <h3 className="text-3xl font-bold mb-2 font-['Poppins']">Send a Message</h3>
            <p className="text-slate-400 text-sm mb-8">We'll reply via WhatsApp within minutes.</p>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <input
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-slate-400 focus:outline-none focus:border-[#C1121F] transition text-sm"
              />
              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
                className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-slate-400 focus:outline-none focus:border-[#C1121F] transition text-sm"
              />
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Tell us how we can help..."
                className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-slate-400 focus:outline-none focus:border-[#C1121F] transition resize-none text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#C1121F] to-[#DC2626] py-4 rounded-2xl font-['Poppins'] font-semibold flex items-center justify-center gap-3 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all"
              >
                Book Appointment
              </motion.button>
            </form>

            {/* Address strip inside form card */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="w-4 h-4 mt-0.5 text-[#C1121F] shrink-0" />
              <span>{ADDRESS}</span>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}