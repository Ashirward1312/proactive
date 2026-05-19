import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Zap, 
  Activity, 
  ArrowRight,
  Accessibility,
  HeartHandshake,
  ShieldCheck,
  Search,
  FileText
} from "lucide-react";
import NdisImg1 from "../img/ndis.jpeg";
import NdisImg2 from "../img/ndis2.jpeg";
import BackButton from "./BackButton";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

export default function NDIS() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const treatments = [
    "Neurological Rehabilitation",
    "Mobility & Gait Training",
    "Functional Capacity Assessments",
    "Assistive Technology Prescription",
    "Postural Support & Seating",
    "Community Access Support",
    "Hydrotherapy Programs",
    "Strength & Balance Training",
    "Chronic Pain Management",
    "Paediatric Disability Support",
  ];

  const processSteps = [
    {
      title: "Goal Mapping",
      desc: "Detailed review of NDIS goals and current functional capacity.",
      icon: <Search className="w-5 h-5" />,
      chip: "bg-blue-600"
    },
    {
      title: "Support Design",
      desc: "A therapy plan that fits your lifestyle and NDIS funding.",
      icon: <FileText className="w-5 h-5" />,
      chip: "bg-[#C1121F]"
    },
    {
      title: "Active Support",
      desc: "Clinical interventions focused on independence and mobility.",
      icon: <Accessibility className="w-5 h-5" />,
      chip: "bg-emerald-600"
    },
    {
      title: "Progress Review",
      desc: "Regular clinical reporting to ensure you stay on track.",
      icon: <Activity className="w-5 h-5" />,
      chip: "bg-[#FACC15]"
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-['Inter'] overflow-x-hidden selection:bg-[#C1121F] selection:text-white">
      {/* 🚀 HERO */}
      <section className="relative pt-24 lg:pt-28 pb-14 lg:pb-18 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-white -z-10" />
        <motion.div style={{ y: y1 }} className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-[#C1121F]/6 rounded-full blur-[120px] -z-10" />
        <motion.div style={{ y: y2 }} className="absolute -bottom-24 -left-24 w-[520px] h-[520px] bg-[#FACC15]/8 rounded-full blur-[120px] -z-10" />

        <div className="mx-auto max-w-7xl px-6">
          <BackButton />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="relative z-10">
              <motion.div variants={itemUp} className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#C1121F]/5 border border-[#C1121F]/10">
                <span className="w-2 h-2 rounded-full bg-[#C1121F]" />
                <span className="text-[11px] font-['Poppins'] font-semibold uppercase tracking-[0.2em] text-[#C1121F]">NDIS Registered Provider</span>
              </motion.div>

              <motion.h1 variants={itemUp} className="mt-6 font-['Poppins'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight">
                Empowering <span className="text-[#C1121F]">Life</span> <br /> Through Specialized Support.
              </motion.h1>

              <motion.p variants={itemUp} className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Enhancing independence through expert clinical care. We provide high-quality physiotherapy tailored precisely to your NDIS goals and lifestyle.
              </motion.p>

              <motion.div variants={itemUp} className="mt-7 flex flex-wrap gap-3">
                <Link to="/book" className="group relative bg-[#C1121F] text-white px-6 py-3.5 rounded-2xl font-['Poppins'] font-semibold text-sm sm:text-base overflow-hidden transition hover:shadow-xl hover:shadow-[#C1121F]/20 active:scale-95">
                  <span className="relative z-10 inline-flex items-center gap-2">Register for Support <ArrowRight className="w-5 h-5" /></span>
                  <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>
                <a href="#process" className="px-6 py-3.5 rounded-2xl font-['Poppins'] font-semibold text-sm sm:text-base border border-slate-200 bg-white hover:bg-slate-50 transition active:scale-95">
                  See Process
                </a>
              </motion.div>

              <motion.div variants={itemUp} className="mt-6 flex flex-wrap gap-3 text-xs text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Community Access
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C1121F]" />
                  Goal-Focused
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FACC15]" />
                  Full Reporting
                </span>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div initial={{ opacity: 0, scale: 0.98, x: 18 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease }} className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_90px_-25px_rgba(15,23,42,0.35)] border-8 border-white bg-white">
                <div className="relative aspect-[16/12]">
                  <img src={NdisImg1} alt="NDIS Physio" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/35 via-transparent to-transparent" />
                </div>
              </div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 -right-3 sm:-top-8 sm:-right-8 bg-[#0F172A] px-5 py-4 rounded-2xl shadow-2xl border border-white/10 hidden md:block">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  <div>
                    <div className="font-['Poppins'] font-bold text-white text-lg">Active</div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest">Support Life</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🛠 PROCESS (premium cards) */}
      <section id="process" className="py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-center mb-10 lg:mb-14">
            <span className="text-[11px] font-['Poppins'] font-semibold uppercase tracking-[0.2em] text-[#C1121F] block">The support journey</span>
            <h2 className="mt-3 font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight">Your Road to <span className="text-[#C1121F]">Independence</span></h2>
            <div className="mt-4 w-20 h-1.5 bg-[#FACC15] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease }}
                className="group relative rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.35)] hover:shadow-[0_26px_70px_-40px_rgba(193,18,31,0.35)] hover:-translate-y-1 transition-all duration-500"
              >
                {/* hover wash */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C1121F]/8 via-transparent to-[#FACC15]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className={`w-12 h-12 ${step.chip} text-white rounded-2xl flex items-center justify-center shadow-sm`}>
                      {step.icon}
                    </div>
                    <span className="text-[11px] font-['Poppins'] font-bold text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="mt-4 font-['Poppins'] text-lg font-bold text-[#0F172A]">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-['Poppins'] font-bold uppercase tracking-wider text-slate-800 group-hover:text-[#C1121F] transition-colors">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏥 APPROACH */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
             <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="relative">
                <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white bg-white">
                  <div className="relative aspect-[16/12]">
                    <img src={NdisImg2} alt="NDIS Support Session" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/12 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#C1121F]/10 -z-10 rounded-full blur-3xl opacity-60" />
             </motion.div>

             <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
                <h2 className="font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight">
                  Empowering you <br />
                  <span className="text-[#C1121F]">every step of the way.</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  Our approach to NDIS physiotherapy is built on understanding your unique lifestyle and goals. We implement specialized strategies to enhance your functional capacity and confidence.
                </p>
                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="p-5 bg-[#F8FAFC] rounded-3xl border border-slate-100">
                      <Accessibility className="w-8 h-8 text-[#C1121F] mb-3" />
                      <h4 className="font-['Poppins'] text-base font-bold text-[#0F172A]">Access</h4>
                      <p className="mt-1 text-sm text-slate-600">Expert community and home-based support.</p>
                   </div>
                   <div className="p-5 bg-[#F8FAFC] rounded-3xl border border-slate-100">
                      <HeartHandshake className="w-8 h-8 text-[#FACC15] mb-3" />
                      <h4 className="font-['Poppins'] text-base font-bold text-[#0F172A]">Care</h4>
                      <p className="mt-1 text-sm text-slate-600">Dedicated, compassionate disability care.</p>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 🤕 EXPERTISE GRID */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-center mb-10 lg:mb-14">
             <h2 className="font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A]">Our <span className="text-[#C1121F]">Expertise</span></h2>
             <div className="mt-4 w-20 h-1.5 bg-[#FACC15] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {treatments.map((t, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.02, ease }} className="flex items-center gap-4 p-5 rounded-3xl bg-white border border-slate-200/70 hover:border-[#C1121F]/25 hover:shadow-lg transition">
                <div className="w-11 h-11 rounded-2xl bg-[#C1121F]/5 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#C1121F]" />
                </div>
                <span className="font-['Poppins'] text-sm sm:text-[15px] font-semibold text-slate-800">{t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 CTA */}
      <section className="pb-16 lg:pb-20 px-6">
        <motion.div initial={{ opacity: 0, scale: 0.99 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="mx-auto max-w-6xl bg-[#0F172A] rounded-[3rem] p-10 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/25 via-transparent to-transparent" />
          </div>

          <div className="relative z-10">
            <h2 className="font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">Achieve your <span className="text-[#C1121F]">independence</span>.</h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We are dedicated to helping you achieve your NDIS goals through expert clinical care and compassionate, life-changing support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book" className="bg-[#C1121F] text-white px-8 py-4 rounded-2xl font-['Poppins'] font-bold text-sm sm:text-base hover:bg-[#DC2626] transition shadow-xl shadow-[#C1121F]/25">
                Register for Support
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-['Poppins'] font-bold text-sm sm:text-base hover:bg-white/20 transition inline-flex items-center justify-center gap-2">
                Talk to Coordinator <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
