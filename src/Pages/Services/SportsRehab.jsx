import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  CheckCircle2,
  Zap,
  Activity,
  ArrowRight,
  Trophy,
  Target,
  Search,
  FileText,
} from "lucide-react";
import RehabImg1 from "../img/rehab.jpeg";
import RehabImg2 from "../img/rehab2.jpeg";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

export default function SportsRehab() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const treatments = [
    "ACL & Ligament Reconstruction",
    "Meniscus Tear Recovery",
    "Rotator Cuff & Shoulder Stability",
    "Ankle Sprains & Instability",
    "Muscle Strain & Tear Rehab",
    "Tendonitis & Overuse Injuries",
    "Stress Fracture Recovery",
    "Post-Fracture Rehabilitation",
    "Groin & Hip Pain Management",
    "Sports-Specific Performance Drills",
  ];

  const processSteps = [
    {
      title: "Detailed Assessment",
      desc: "We analyze injury, movement patterns, and sport demands.",
      icon: <Search className="w-5 h-5" />,
      chip: "bg-blue-600",
    },
    {
      title: "Customized Plan",
      desc: "A recovery roadmap tailored to your performance goals.",
      icon: <FileText className="w-5 h-5" />,
      chip: "bg-[#C1121F]",
    },
    {
      title: "Active Recovery",
      desc: "Manual therapy + elite strength and conditioning progression.",
      icon: <Activity className="w-5 h-5" />,
      chip: "bg-emerald-600",
    },
    {
      title: "Return Stronger",
      desc: "Phased return-to-play so you come back confident and ready.",
      icon: <Trophy className="w-5 h-5" />,
      chip: "bg-[#FACC15]",
    },
  ];

  const handleBack = () => {
    // fallback if user opened page directly
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <div className="bg-white text-slate-900 font-['Inter'] overflow-x-hidden selection:bg-[#C1121F] selection:text-white">
      {/* ✅ BACK BUTTON (fixed + header-safe) */}
      <div className="fixed left-4 sm:left-6 top-24 sm:top-28 z-[60]">
        <button
          onClick={handleBack}
          aria-label="Go back"
          className="group flex items-center gap-2 bg-white/85 backdrop-blur-xl border border-slate-200 px-3.5 py-2.5 rounded-2xl shadow-lg shadow-black/5 hover:border-[#C1121F]/30 transition"
        >
          <span className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-[#C1121F] transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </span>
          <span className="text-[11px] font-['Poppins'] font-extrabold uppercase tracking-[0.18em] text-slate-900">
            Back
          </span>
        </button>
      </div>

      {/* 🚀 HERO */}
      <section className="relative pt-24 lg:pt-28 pb-14 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-white -z-10" />
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-[#C1121F]/6 rounded-full blur-[120px] -z-10"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-24 -left-24 w-[520px] h-[520px] bg-[#FACC15]/8 rounded-full blur-[120px] -z-10"
        />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="relative z-10"
            >
              <motion.div
                variants={itemUp}
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#C1121F]/5 border border-[#C1121F]/10"
              >
                <span className="w-2 h-2 rounded-full bg-[#C1121F]" />
                <span className="text-[11px] font-['Poppins'] font-semibold uppercase tracking-[0.2em] text-[#C1121F]">
                  Elite Sports Recovery
                </span>
              </motion.div>

              <motion.h1
                variants={itemUp}
                className="mt-6 font-['Poppins'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight"
              >
                Recover <span className="text-[#C1121F]">Stronger</span>, <br className="hidden sm:block" />
                Return <span className="text-[#FACC15]">Smarter</span>.
              </motion.h1>

              <motion.p
                variants={itemUp}
                className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl"
              >
                Don’t just heal—rebuild performance. Sport-specific rehab designed to restore mobility,
                strength, and confidence for a safe return to play.
              </motion.p>

              <motion.div variants={itemUp} className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/book"
                  className="group relative bg-[#C1121F] text-white px-6 py-3.5 rounded-2xl font-['Poppins'] font-semibold text-sm sm:text-base overflow-hidden transition hover:shadow-xl hover:shadow-[#C1121F]/20 active:scale-95"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Book Assessment <ArrowRight className="w-5 h-5" />
                  </span>
                  <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>

                <a
                  href="#process"
                  className="px-6 py-3.5 rounded-2xl font-['Poppins'] font-semibold text-sm sm:text-base border border-slate-200 bg-white hover:bg-slate-50 transition active:scale-95"
                >
                  View Process
                </a>
              </motion.div>

              <motion.div variants={itemUp} className="mt-6 flex items-center gap-3 text-xs text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Evidence-based
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C1121F]" />
                  Sport-specific
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FACC15]" />
                  Return-to-play testing
                </span>
              </motion.div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: 18 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_90px_-25px_rgba(15,23,42,0.35)] border-8 border-white bg-white">
                <div className="relative aspect-[16/12]">
                  <img
                    src={RehabImg1}
                    alt="Sports Injury Rehabilitation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/35 via-transparent to-transparent" />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-3 sm:-top-8 sm:-right-8 bg-[#0F172A] px-5 py-4 rounded-2xl shadow-2xl border border-white/10 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-[#FACC15]" />
                  <div>
                    <div className="font-['Poppins'] font-bold text-white text-lg">Top Rated</div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest">Sports Rehab</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🛠 PROCESS */}
      <section id="process" className="py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-10 lg:mb-14"
          >
            <span className="text-[11px] font-['Poppins'] font-semibold uppercase tracking-[0.2em] text-[#C1121F] block">
              How we heal
            </span>
            <h2 className="mt-3 font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight">
              Your Road to <span className="text-[#C1121F]">Recovery</span>
            </h2>
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
                className="group relative rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.35)]
                           hover:shadow-[0_26px_70px_-40px_rgba(193,18,31,0.35)]
                           hover:-translate-y-1 transition-all duration-500"
              >
                {/* hover wash */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C1121F]/8 via-transparent to-[#FACC15]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className={`w-12 h-12 ${step.chip} text-white rounded-2xl flex items-center justify-center shadow-sm`}>
                      {step.icon}
                    </div>

                    <div className="text-[11px] font-['Poppins'] font-bold text-slate-400">
                      0{idx + 1}
                    </div>
                  </div>

                  <h3 className="mt-4 font-['Poppins'] text-lg font-bold text-[#0F172A]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>

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
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="relative"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white bg-white">
                <div className="relative aspect-[16/12]">
                  <img src={RehabImg2} alt="Athlete Training" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/12 via-transparent to-transparent" />
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#C1121F]/10 -z-10 rounded-full blur-3xl opacity-60" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight">
                Expert sports care <br />
                <span className="text-[#C1121F]">with measurable results.</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Every sport and every body is different. We use objective testing and sports-specific movement analysis
                so your program matches your goals—not generic exercises.
              </p>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-[#F8FAFC] rounded-3xl border border-slate-100">
                  <Target className="w-8 h-8 text-[#C1121F] mb-3" />
                  <h4 className="font-['Poppins'] text-base font-bold text-[#0F172A]">Precision</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Targeted drills for your sport’s real movement demands.
                  </p>
                </div>

                <div className="p-5 bg-[#F8FAFC] rounded-3xl border border-slate-100">
                  <Zap className="w-8 h-8 text-[#FACC15] mb-3" />
                  <h4 className="font-['Poppins'] text-base font-bold text-[#0F172A]">Efficiency</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Smart progressions for faster, safer recovery.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🤕 INJURIES GRID */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-10 lg:mb-14"
          >
            <h2 className="font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A]">
              Injuries we <span className="text-[#C1121F]">treat</span>
            </h2>
            <div className="mt-4 w-20 h-1.5 bg-[#FACC15] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {treatments.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.99 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.02, ease }}
                className="flex items-center gap-4 p-5 rounded-3xl bg-white border border-slate-200/70 hover:border-[#C1121F]/25 hover:shadow-lg transition"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#C1121F]/5 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#C1121F]" />
                </div>
                <span className="font-['Poppins'] text-sm sm:text-[15px] font-semibold text-slate-800">
                  {t}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 CTA */}
      <section className="pb-16 lg:pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-6xl bg-[#0F172A] rounded-[3rem] p-10 sm:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/25 via-transparent to-transparent" />
          </div>

          <div className="relative z-10">
            <h2 className="font-['Poppins'] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to <span className="text-[#C1121F]">perform</span> again?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Don’t let an injury keep you on the sidelines. Start a structured rehab plan that’s built for your sport.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book"
                className="bg-[#C1121F] text-white px-8 py-4 rounded-2xl font-['Poppins'] font-bold text-sm sm:text-base hover:bg-[#DC2626] transition shadow-xl shadow-[#C1121F]/25"
              >
                Book My Assessment
              </Link>

              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-['Poppins'] font-bold text-sm sm:text-base hover:bg-white/20 transition inline-flex items-center justify-center gap-2"
              >
                Talk to Specialist <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}