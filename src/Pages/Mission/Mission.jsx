import { motion } from "framer-motion";
import { Target, Eye, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function MissionVision() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-[#FFF8F6] to-[#FFFDF7] overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#C1121F]/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                          bg-[#C1121F]/5 border border-[#D4AF37]/30 
                          text-[#C1121F] text-xs tracking-widest uppercase mb-8">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            Our Purpose
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Driven By{" "}
            <span className="text-[#C1121F]">Care</span>, Focused On{" "}
            <span className="text-[#D4AF37]">Recovery</span>.
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            We combine compassion with clinical expertise to deliver
            personalised physiotherapy focused on restoring strength,
            mobility and confidence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white border border-[#D4AF37]/20 rounded-3xl p-10
                            shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)]
                            hover:shadow-[0_20px_60px_-20px_rgba(193,18,31,0.25)]
                            hover:-translate-y-2 transition-all duration-500">

              <div className="w-14 h-14 rounded-xl 
                              bg-gradient-to-br from-[#C1121F] to-[#D4AF37]
                              flex items-center justify-center mb-6 shadow-md">
                <Target className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To provide advanced and personalised physiotherapy care
                designed to accelerate recovery, reduce pain and empower
                individuals to regain confidence in everyday life.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white border border-[#D4AF37]/20 rounded-3xl p-10
                            shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)]
                            hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.35)]
                            hover:-translate-y-2 transition-all duration-500">

              <div className="w-14 h-14 rounded-xl 
                              bg-gradient-to-br from-[#D4AF37] to-[#C1121F]
                              flex items-center justify-center mb-6 shadow-md">
                <Eye className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To become a trusted leader in physiotherapy known for
                excellence, innovation and long‑term wellness solutions
                built on care and commitment.
              </p>
            </div>
          </motion.div>

        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link
            to="/book"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full
                       bg-[#C1121F] text-white text-sm font-medium
                       shadow-lg hover:bg-[#a50f1a]
                       transition-all duration-300"
          >
            Book Appointment
            <span className="bg-white/20 p-2 rounded-full">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}