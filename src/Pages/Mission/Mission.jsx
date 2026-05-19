import { motion } from "framer-motion";
import { Target, Eye, ArrowRight } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0F172A] overflow-hidden">

      {/* Animated Floating Glow Orbs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#DC2626]/10 blur-[140px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-[#DC2626]/10 blur-[140px] rounded-full animate-pulse"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-2 h-2 bg-[#DC2626] rounded-full absolute top-1/4 left-1/3 animate-bounce"></div>
        <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/2 left-2/3 animate-ping"></div>
        <div className="w-2 h-2 bg-[#DC2626]/80 rounded-full absolute bottom-1/4 left-1/4 animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-24 text-center mx-auto"
        >
          <p className="text-[#DC2626] font-['Poppins'] text-sm font-semibold tracking-[2px] uppercase mb-4">
            Our Purpose
          </p>

          <h2 className="text-white font-['Poppins'] text-4xl md:text-6xl font-bold leading-tight tracking-[-1px] mb-6">
            Driven By Care, <br />
            Focused On <span className="text-[#DC2626]">Recovery.</span>
          </h2>

          <p className="text-[#CBD5E1] font-['Inter'] text-[18px] leading-8 max-w-2xl mx-auto">
            We blend compassion with innovation to help patients regain
            mobility, strength, and confidence for a healthier tomorrow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-[#DC2626]/20 to-red-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:border-[#DC2626]/40">

              <div className="w-[70px] h-[70px] bg-[#DC2626]/10 text-[#DC2626] rounded-[20px] flex items-center justify-center mb-8 group-hover:scale-110 transition">
                <Target className="w-8 h-8" />
              </div>

              <h3 className="text-white font-['Poppins'] text-[28px] font-semibold leading-[38px] mb-4">
                Our Mission
              </h3>

              <p className="text-[#CBD5E1] font-['Inter'] text-[15px] leading-[30px]">
                Our mission is to provide advanced, personalized, and
                compassionate physiotherapy care that helps patients recover
                faster, reduce pain, improve mobility, and regain confidence in
                their everyday lives through modern rehabilitation techniques
                and expert guidance.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-[#DC2626]/20 to-red-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:border-[#DC2626]/40">

              <div className="w-[70px] h-[70px] bg-[#DC2626]/10 text-[#DC2626] rounded-[20px] flex items-center justify-center mb-8 group-hover:scale-110 transition">
                <Eye className="w-8 h-8" />
              </div>

              <h3 className="text-white font-['Poppins'] text-[28px] font-semibold leading-[38px] mb-4">
                Our Vision
              </h3>

              <p className="text-[#CBD5E1] font-['Inter'] text-[15px] leading-[30px]">
                Our vision is to become a trusted and leading physiotherapy
                center known for delivering exceptional patient care,
                innovative therapy solutions, and long-term wellness focused on
                healthier and pain-free living.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Premium Animated Button */}
        <div className="mt-24 text-center">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            className="relative overflow-hidden bg-gradient-to-r from-[#C1121F] to-[#DC2626] text-white font-['Poppins'] text-base font-semibold px-10 py-4 rounded-xl inline-flex items-center gap-3 shadow-lg"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></span>
            Book Appointment
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}