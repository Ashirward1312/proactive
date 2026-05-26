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
      path: "/treatment/sports-rehab",
      desc: "Return to sport stronger & safer with our elite programs.",
      icon: <Zap className="w-6 h-6 text-white" />,
      gradient: "from-rose-500 to-red-500",
      shadow: "hover:shadow-rose-500/20",
    },
    {
      title: "Back & Neck Pain",
      path: "/treatment/back-neck-pain",
      desc: "Expert treatment to relieve pain & improve mobility.",
      icon: <Activity className="w-6 h-6 text-white" />,
      gradient: "from-amber-400 to-orange-500",
      shadow: "hover:shadow-orange-500/20",
    },
    {
      title: "Post-Surgery Rehab",
      path: "/treatment/post-rehab",
      desc: "Recover faster with expert care following your procedure.",
      icon: <ClipboardCheck className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-cyan-500",
      shadow: "hover:shadow-blue-500/20",
    },
    {
      title: "Workplace Injuries",
      path: "/treatment/workplaces",
      desc: "Support for recovery & getting you back to work safely.",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      gradient: "from-emerald-400 to-teal-500",
      shadow: "hover:shadow-emerald-500/20",
    },
    {
      title: "Manual Therapy",
      path: "/treatment/manual-therapy",
      desc: "Hands-on treatment for fast & effective pain relief.",
      icon: <Hand className="w-6 h-6 text-white" />,
      gradient: "from-fuchsia-500 to-purple-600",
      shadow: "hover:shadow-fuchsia-500/20",
    },
    {
      title: "Exercise Physiology",
      path: "/treatment/exercise-physiology",
      desc: "Individualised exercise programs tailored to your goals.",
      icon: <Dumbbell className="w-6 h-6 text-white" />,
      gradient: "from-violet-500 to-indigo-600",
      shadow: "hover:shadow-indigo-500/20",
    },
    {
      title: "Women's Health",
      path: "/treatment/women-health",
      desc: "Pelvic health, pregnancy & postnatal physiotherapy care.",
      icon: <Heart className="w-6 h-6 text-white" />,
      gradient: "from-pink-400 to-rose-500",
      shadow: "hover:shadow-pink-500/20",
    },
    {
      title: "NDIS Physio",
      path: "/treatment/ndis",
      desc: "Personalised supports to improve function & independence.",
      icon: <Accessibility className="w-6 h-6 text-white" />,
      gradient: "from-sky-400 to-blue-600",
      shadow: "hover:shadow-sky-500/20",
    },
  ];

  return (
    <section className="relative pt-28 pb-24 bg-gray-50 font-['Inter'] overflow-hidden">
      {/* Background Colorful Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-red-50 text-[#C1121F] text-xs uppercase tracking-widest font-bold mb-5 border border-red-100 shadow-sm">
            Our Treatments
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] to-orange-500">Physiotherapy</span> Treatments
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Professional, evidence-based care designed to restore mobility,
            reduce pain and improve your overall quality of life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Link
                to={service.path}
                className={`group relative flex flex-col bg-white/80 backdrop-blur-md rounded-3xl p-8 
                           border border-white/50 shadow-sm hover:shadow-2xl 
                           hover:-translate-y-2 transition-all duration-300 ${service.shadow} h-full z-10 overflow-hidden`}
              >
                {/* Decorative background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

                {/* Link */}
                <div className="mt-auto flex items-center text-sm font-bold text-gray-900 group-hover:text-[#C1121F] transition-colors">
                  <span className="relative">
                    Learn More
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C1121F] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C1121F] to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Link
              to="/book"
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-[#C1121F] to-red-700 text-white
                         px-10 py-5 rounded-2xl text-base font-bold shadow-xl
                         hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Book Appointment
              <div className="bg-white/20 p-1.5 rounded-full">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}