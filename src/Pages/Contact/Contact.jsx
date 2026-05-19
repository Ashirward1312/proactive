import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare
} from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ease = [0.22, 1, 0.36, 1];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const message = formData.get("message");

    const phone = "911234567890";
    const text = `Hi, I'm ${name}. ${message}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="relative bg-gradient-to-br from-white via-[#F8FAFC] to-white overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-red-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      {/* HERO */}
      <section className="pt-32 pb-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
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
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            {/* Contact Cards */}
            {[
              { icon: <Phone />, label: "Call Us", value: "+91 12345 67890" },
              { icon: <Mail />, label: "Email Us", value: "care@proactivephysio.com" },
              { icon: <MapPin />, label: "Visit Us", value: "123 Health Avenue, Medical Square" },
              { icon: <Clock />, label: "Working Hours", value: "Mon - Sat: 8 AM - 8 PM" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="group flex items-center gap-6 p-7 bg-white/70 backdrop-blur-lg border border-slate-200 rounded-3xl shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-[#C1121F]/10 text-[#C1121F] rounded-2xl flex items-center justify-center group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="font-semibold text-[#0F172A] text-lg">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social Icons */}
            <div className="flex gap-4 pt-6">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4 }}
                  className="w-12 h-12 bg-[#0F172A] text-white rounded-xl flex items-center justify-center hover:bg-[#C1121F] transition"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#0F172A] to-[#111827] p-12 rounded-[40px] text-white shadow-2xl overflow-hidden"
          >

            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-red-500/10 blur-[100px] rounded-full"></div>

            <MessageSquare className="absolute top-10 right-10 w-24 h-24 opacity-5" />

            <h3 className="text-3xl font-bold mb-10 font-['Poppins']">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

              <input
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-slate-400 focus:outline-none focus:border-[#C1121F] transition"
              />

              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
                className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-slate-400 focus:outline-none focus:border-[#C1121F] transition"
              />

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Tell us how we can help..."
                className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-slate-400 focus:outline-none focus:border-[#C1121F] transition resize-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#C1121F] to-[#DC2626] py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-lg"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>

          </motion.div>

        </div>
      </section>
    </div>
  );
}