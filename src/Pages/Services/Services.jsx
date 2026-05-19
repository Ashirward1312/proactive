import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Zap, 
  Activity, 
  ClipboardCheck, 
  Briefcase, 
  Hand, 
  Dumbbell, 
  Heart, 
  Accessibility 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Sports Injury Rehab",
      path: "/services/sports-rehab",
      desc: "Return to sport stronger & safer with our elite programs.",
      icon: <Zap className="w-7 h-7" />,
      color: "text-[#C1121F]"
    },
    {
      title: "Back & Neck Pain",
      path: "/services/back-neck-pain",
      desc: "Expert treatment to relieve pain & improve mobility.",
      icon: <Activity className="w-7 h-7" />,
      color: "text-[#FACC15]"
    },
    {
      title: "Post-Surgery Rehab",
      path: "/services/post-rehab",
      desc: "Recover faster with expert care following your procedure.",
      icon: <ClipboardCheck className="w-7 h-7" />,
      color: "text-blue-600"
    },
    {
      title: "Workplace Injuries",
      path: "/services/workplaces",
      desc: "Support for recovery & getting you back to work safely.",
      icon: <Briefcase className="w-7 h-7" />,
      color: "text-emerald-600"
    },
    {
      title: "Manual Therapy",
      path: "/services/manual-therapy",
      desc: "Hands-on treatment for fast & effective pain relief.",
      icon: <Hand className="w-7 h-7" />,
      color: "text-[#C1121F]"
    },
    {
      title: "Exercise Physiology",
      path: "/services/exercise-physiology",
      desc: "Individualised exercise programs tailored to your goals.",
      icon: <Dumbbell className="w-7 h-7" />,
      color: "text-[#FACC15]"
    },
    {
      title: "Women's Health",
      path: "/services/women-health",
      desc: "Pelvic health, pregnancy & postnatal physiotherapy care.",
      icon: <Heart className="w-7 h-7" />,
      color: "text-[#C1121F]"
    },
    {
      title: "NDIS Physio",
      path: "/services/ndis",
      desc: "Personalised supports to improve function & independence.",
      icon: <Accessibility className="w-7 h-7" />,
      color: "text-blue-600"
    },
  ];

  return (
    <section id="services" className="pt-32 lg:pt-48 pb-20 lg:pb-32 bg-[#F8FAFC] font-['Inter'] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        
        {/* Subtle Background Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C1121F]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FACC15]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-18"
        >
          <span className="text-[#C1121F] font-['Poppins'] font-bold text-xs uppercase tracking-[0.25em] mb-4 block">
            Specialized Care
          </span>

          <h2 className="font-['Poppins'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
            Our Elite <span className="text-[#C1121F]">Physiotherapy</span> Services
          </h2>

          <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Clinical excellence meets compassionate care. We provide a comprehensive range of specialized treatments to restore your vitality and performance.
          </p>
          <div className="mt-6 w-20 h-1.5 bg-[#FACC15] mx-auto rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                to={service.path}
                className="group relative h-full flex flex-col rounded-[2rem] border border-slate-200/70 bg-white p-7 sm:p-8 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.35)]
                           hover:shadow-[0_32px_80px_-40px_rgba(193,18,31,0.45)]
                           hover:-translate-y-2 transition-all duration-500 outline-none
                           focus-visible:ring-2 focus-visible:ring-[#C1121F]/30 overflow-hidden"
              >
                {/* Premium hover wash */}
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#C1121F]/8 via-transparent to-[#FACC15]/12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top row: icon + arrow */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 ${service.color}
                                    flex items-center justify-center
                                    group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900
                                    transition-all duration-500 shadow-sm`}
                    >
                      {service.icon}
                    </div>

                    <div className="w-10 h-10 rounded-2xl border border-slate-200/70 bg-white flex items-center justify-center
                                    group-hover:border-[#C1121F]/25 group-hover:bg-[#C1121F]/5 transition-colors duration-300">
                      <ArrowRight className="w-5 h-5 text-slate-700 group-hover:text-[#C1121F] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Poppins'] text-xl sm:text-[22px] font-bold text-[#0F172A] leading-tight mb-3">
                    {service.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm text-slate-600 leading-relaxed font-medium mb-8">
                    {service.desc}
                  </p>

                  {/* Bottom link */}
                  <div className="mt-auto inline-flex items-center gap-2 text-[11px] font-['Poppins'] font-extrabold uppercase tracking-[0.18em] text-slate-900 group-hover:text-[#C1121F] transition-colors">
                    Explore Service
                    <span className="w-8 h-[2px] bg-slate-200 group-hover:bg-[#C1121F]/40 rounded-full transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 lg:mt-18 text-center"
        >
          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-3 text-white px-10 py-5 rounded-2xl font-['Poppins'] font-bold text-sm sm:text-base
                       shadow-2xl shadow-[#C1121F]/30 hover:shadow-3xl hover:shadow-[#C1121F]/40 transition hover:scale-[1.03] active:scale-95
                       bg-[#C1121F] hover:bg-[#DC2626]"
          >
            Start Your Recovery Journey <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}