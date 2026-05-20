import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We are open Monday to Saturday from 9:00 AM to 8:00 PM. We are closed on Sundays and public holidays."
    },
    {
      question: "What should I wear to my appointment?",
      answer: "Please wear comfortable, loose-fitting clothing that allows easy access to the area being treated. For example, if you have a knee injury, wearing shorts is recommended."
    },
    {
      question: "How long does a physiotherapy session last?",
      answer: "An initial consultation typically lasts between 45 to 60 minutes. Standard follow-up sessions usually take about 30 to 45 minutes."
    },
    {
      question: "Do I need to bring anything to my first visit?",
      answer: "Yes, please bring any previous medical records, X-rays, or MRI reports related to your condition if you have them. This helps us understand your issue better."
    },
    
  ];

  return (
    <section className="relative py-32 bg-[#FDFBF7] overflow-hidden font-['Inter']">
      
      {/* Lightweight Background Elements (Optimized for performance) */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/5 to-orange-400/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-[#C1121F]/5 to-rose-400/5 rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                          bg-gradient-to-r from-[#C1121F]/10 to-[#D4AF37]/10 border border-[#D4AF37]/30 
                          text-[#C1121F] text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
            <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
            FAQs
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] to-[#D4AF37]">Questions</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about our physiotherapy services, treatments, and what to expect during your visit.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`border rounded-[2rem] transition-all duration-500 overflow-hidden ${
                  isActive 
                    ? "bg-gradient-to-br from-white to-[#FFF8F6] border-[#D4AF37]/50 shadow-[0_20px_40px_-15px_rgba(193,18,31,0.15)] scale-[1.02]" 
                    : "bg-white/80 backdrop-blur-sm border-gray-200 hover:border-[#C1121F]/30 hover:bg-white hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className={`text-lg md:text-xl font-bold transition-all duration-300 pr-8 ${
                    isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] to-[#D4AF37]" : "text-gray-800 group-hover:text-[#C1121F]"
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    isActive ? "bg-gradient-to-br from-[#C1121F] to-[#D4AF37] text-white shadow-lg shadow-red-500/30 rotate-180" : "bg-gray-50 text-gray-400 group-hover:bg-red-50 group-hover:text-[#C1121F] group-hover:rotate-90"
                  }`}>
                    {isActive ? (
                      <Minus className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 text-gray-600 text-base md:text-lg leading-relaxed border-t border-gray-100/50 relative">
                        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
