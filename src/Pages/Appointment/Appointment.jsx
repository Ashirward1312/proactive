import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Activity,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Star,
  ArrowRight,
  Phone,
  MapPin
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ease = [0.22, 1, 0.36, 1];

// ── Real clinic data ─────────────────────────────────────────────
const PHONE_1 = "8085354646";
const PHONE_2 = "9893092426";
const WA_NUMBER = "918085354646";
const ADDRESS = "LIG-68, Aashirwad, Sector-2, Shankar Nagar, Raipur, Chhattisgarh";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    service: "Select Service",
    phone: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (formData.name === "" || formData.phone === "" || formData.service === "Select Service") {
      alert("Please fill in the required fields to schedule.");
      return;
    }
    
    // Construct pre-filled WhatsApp message
    const message = `Hi Proactive Physio! I want to request an appointment:\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `🛠 Service: ${formData.service}\n` +
      `📅 Date: ${formData.date || "Not Selected"}\n` +
      `⏰ Time: ${formData.time || "Not Selected"}`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-white text-slate-900 font-['Inter'] overflow-x-hidden selection:bg-[#C1121F] selection:text-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-36 pb-32 overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0F172A]">

        {/* Animated Glow Orbs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#C1121F]/15 blur-[140px] rounded-full animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-400/10 blur-[140px] rounded-full animate-pulse pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <span className="text-[#FACC15] font-['Poppins'] text-sm tracking-[3px] uppercase font-semibold">
              Instant Scheduling
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-white mt-6 leading-tight font-['Poppins']">
              Your Health, <br />
              <span className="text-[#C1121F]">Scheduled.</span>
            </h1>

            <p className="text-slate-300 text-lg mt-8 max-w-lg leading-relaxed">
              Book a premium consultation with our clinical physiotherapists. Fill out the request form, or contact us directly using the details below.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Secure Patient Portal
              </div>
              <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold">
                <Zap className="w-4 h-4 text-yellow-400" />
                WhatsApp Confirmation
              </div>
            </div>

            {/* Instant Contact Details Stack */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Phone Contacts */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C1121F]/10 border border-[#C1121F]/20 text-[#C1121F] rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Poppins'] text-sm font-semibold text-slate-400 uppercase tracking-wider">Call Helpline</h4>
                  <a href={`tel:+91${PHONE_1}`} className="text-white text-lg font-bold hover:text-[#C1121F] transition block mt-1">+91 {PHONE_1}</a>
                  <a href={`tel:+91${PHONE_2}`} className="text-slate-300 text-sm hover:text-[#C1121F] transition block">+91 {PHONE_2}</a>
                </div>
              </div>

              {/* Clinic Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 text-slate-300 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Poppins'] text-sm font-semibold text-slate-400 uppercase tracking-wider">Our Address</h4>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    LIG-68, Aashirwad, Sector-2, Shankar Nagar, Raipur (C.G.)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT BOOKING CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="relative bg-[#1E293B]/70 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 lg:p-12 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8 font-['Poppins']">
              Book Appointment
            </h3>

            <form onSubmit={handleBooking} className="space-y-5">

              {/* Name */}
              <div className="relative group">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#C1121F] transition-colors" />
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C1121F] focus:bg-white/10 transition text-sm"
                />
              </div>

              {/* Phone */}
              <div className="relative group">
                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#C1121F] transition-colors" />
                <input
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="WhatsApp Mobile Number"
                  className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C1121F] focus:bg-white/10 transition text-sm"
                />
              </div>

              {/* Service Selection */}
              <div className="relative group">
                <Activity className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-[#C1121F] transition-colors pointer-events-none" />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full pl-14 pr-10 py-4 rounded-2xl bg-[#0F172A] border border-white/15 text-white focus:outline-none focus:border-[#C1121F] focus:bg-[#1E293B] transition text-sm appearance-none cursor-pointer"
                >
                  <option disabled value="Select Service">Select Service</option>
                  <option value="Back & Neck Pain Recovery">Back & Neck Pain Recovery</option>
                  <option value="Sports Injury Rehab">Sports Injury Rehab</option>
                  <option value="Manual & Exercise Therapy">Manual & Exercise Therapy</option>
                  <option value="NDIS Specialty Physio">NDIS Specialty Physio</option>
                  <option value="Exercise Physiology">Exercise Physiology</option>
                  <option value="Women's Health Specialty">Women's Health Specialty</option>
                  <option value="Post-Op Rehabilitation">Post-Op Rehabilitation</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-white opacity-60" />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-[#C1121F] transition-colors pointer-events-none" />
                  <input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#C1121F] transition text-xs cursor-pointer"
                  />
                </div>

                <div className="relative group">
                  <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-[#C1121F] transition-colors pointer-events-none" />
                  <input
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-[#C1121F] transition text-xs cursor-pointer"
                  />
                </div>
              </div>

              {/* Book Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-[#C1121F] to-[#DC2626] py-4 rounded-2xl text-white font-['Poppins'] font-semibold flex items-center justify-center gap-3 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all cursor-pointer"
              >
                Book Appointment
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-[11px] font-['Poppins'] font-semibold uppercase tracking-[0.2em] text-[#C1121F] block">Commitment to Excellence</span>
            <h2 className="text-4xl font-bold text-[#0F172A] font-['Poppins'] mt-3">
              Why Book With Us?
            </h2>
            <div className="mt-4 w-20 h-1.5 bg-[#FACC15] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Expert Diagnosis",
                desc: "Assessed by clinical specialties who formulate tailor-made plans."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Premium Facility",
                desc: "A fully sanitized, state-of-the-art modern physiotherapy clinic."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Rapid Results",
                desc: "Metric-driven recovery targets delivering safe, sustainable progress."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[35px] bg-white shadow-[0_15px_50px_-20px_rgba(15,23,42,0.08)] border border-slate-100 hover:border-[#C1121F]/10 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-[#C1121F]/10 text-[#C1121F] rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h4 className="text-lg font-bold text-[#0F172A] mb-3 font-['Poppins']">
                  {item.title}
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}