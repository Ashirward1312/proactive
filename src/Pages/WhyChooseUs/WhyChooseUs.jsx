import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Stethoscope, 
  Clock, 
  Award, 
  ThumbsUp, 
  HeartPulse,
  Sparkles
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Expert Physiotherapists",
      description: "Our team consists of highly qualified and experienced professionals dedicated to your recovery."
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "Personalised Care",
      description: "We don't believe in one-size-fits-all. Every treatment plan is tailored specifically to your needs and goals."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Timings",
      description: "We offer early morning and evening appointments to fit your busy lifestyle without hassle."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Evidence-Based Treatment",
      description: "Our methods are rooted in the latest scientific research and proven clinical practices."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "State-of-the-Art Facility",
      description: "Equipped with modern technology and equipment to ensure you get the best possible care."
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "High Success Rate",
      description: "Thousands of patients have successfully recovered and regained their mobility with our help."
    }
  ];

  return (
    <section className="relative py-32 bg-[#FFFDF7] overflow-hidden font-['Inter']">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-[#C1121F]/10 to-red-400/5 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/15 to-yellow-400/5 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                          bg-gradient-to-r from-[#C1121F]/10 to-[#D4AF37]/10 border border-[#D4AF37]/30 
                          text-[#C1121F] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            Why Choose Us
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] to-[#D4AF37]">Best Choice</span> For Your Health
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            We are committed to providing the highest quality physiotherapy care, 
            helping you move better, feel better, and live pain-free.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white/80 backdrop-blur-md rounded-3xl p-8 
                              border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]
                              hover:shadow-[0_20px_40px_-15px_rgba(193,18,31,0.15)] hover:border-[#D4AF37]/40
                              hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#FFF8F6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center
                                  bg-gradient-to-br from-gray-50 to-gray-100 text-gray-600
                                  group-hover:from-[#C1121F] group-hover:to-[#D4AF37] group-hover:text-white
                                  shadow-sm group-hover:shadow-lg group-hover:shadow-red-500/30
                                  transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#C1121F] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
