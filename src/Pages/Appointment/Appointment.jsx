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
  ArrowRight
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function Appointment() {
  return (
    <div className="bg-white text-slate-900 font-['Inter'] overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-36 pb-32 overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0F172A]">

        {/* Animated Glow Orbs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#C1121F]/20 blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-400/20 blur-[140px] rounded-full animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <span className="text-[#FACC15] font-['Poppins'] text-sm tracking-[3px] uppercase font-semibold">
              Booking
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
              Your Health, <br />
              <span className="text-[#C1121F]">Scheduled.</span>
            </h1>

            <p className="text-slate-300 text-lg mt-8 max-w-lg leading-relaxed">
              Secure your consultation with our clinical specialists.
              Choose your service, select a time, and begin your recovery journey.
            </p>

            <div className="flex gap-4 mt-10">
              <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Secure Booking
              </div>

              <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm">
                <Zap className="w-4 h-4 text-yellow-400" />
                Instant Confirmation
              </div>
            </div>
          </motion.div>

          {/* RIGHT BOOKING CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-12 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-10 font-['Poppins']">
              Request Appointment
            </h3>

            <form className="space-y-6">

              {/* Name */}
              <div className="relative group">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60 group-focus-within:text-[#C1121F]" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C1121F] transition"
                />
              </div>

              {/* Service */}
              <div className="relative group">
                <Activity className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60 group-focus-within:text-[#C1121F]" />
                <select className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/20 text-white focus:outline-none focus:border-[#C1121F] transition appearance-none">
                  <option className="text-black">Select Service</option>
                  <option className="text-black">Sports Physio</option>
                  <option className="text-black">Back & Neck Pain</option>
                  <option className="text-black">Manual Therapy</option>
                  <option className="text-black">Women's Health</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60 group-focus-within:text-[#C1121F]" />
                  <input
                    type="date"
                    className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/20 text-white focus:outline-none focus:border-[#C1121F]"
                  />
                </div>

                <div className="relative group">
                  <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60 group-focus-within:text-[#C1121F]" />
                  <input
                    type="time"
                    className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/20 text-white focus:outline-none focus:border-[#C1121F]"
                  />
                </div>
              </div>

              {/* Animated Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="w-full bg-gradient-to-r from-[#C1121F] to-[#DC2626] py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-3 shadow-lg"
              >
                Confirm Appointment
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-[#0F172A] font-['Poppins']">
              Why Book With Us?
            </h2>
            <div className="mt-5 w-24 h-1.5 bg-[#FACC15] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <CheckCircle2 />,
                title: "Expert Diagnosis",
                desc: "Assessed by highly experienced clinical specialists."
              },
              {
                icon: <Star />,
                title: "Premium Facility",
                desc: "State-of-the-art rehabilitation environment."
              },
              {
                icon: <Zap />,
                title: "Rapid Results",
                desc: "Focused programs delivering faster recovery."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-12 rounded-[40px] bg-white shadow-lg border border-slate-100 hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-[#C1121F]/10 text-[#C1121F] rounded-2xl flex items-center justify-center mb-8">
                  {item.icon}
                </div>

                <h4 className="text-xl font-bold text-[#0F172A] mb-4 font-['Poppins']">
                  {item.title}
                </h4>

                <p className="text-slate-500 leading-relaxed">
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