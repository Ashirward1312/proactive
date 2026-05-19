import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Professional Athlete",
      text: "The clinical team at Proactive helped me recover from my ACL injury faster than I ever expected. Their evidence-based approach is truly professional and transformative.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      text: "Years of chronic back pain were resolved in just a few sessions. The manual therapy techniques they use are state-of-the-art. I can finally work pain-free again.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=michael"
    },
    {
      name: "Emma Williams",
      role: "Wellness Consultant",
      text: "The specialized care I received for women's health was exceptional. They combine empathy with clinical precision in a way that is rare to find. Highly recommend!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=emma"
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden font-['Inter']">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_#DC262608,_transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#DC2626]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header - Centered */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#DC2626] font-['Poppins'] font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            Success Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['Poppins'] text-4xl md:text-6xl font-bold text-[#0F172A] leading-tight tracking-tight"
          >
            What Our <span className="text-[#DC2626]">Patients Say</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 w-24 h-1.5 bg-[#DC2626]/10 mx-auto rounded-full overflow-hidden"
          >
            <div className="w-1/2 h-full bg-[#DC2626]" />
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.1)] relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-12 h-12 text-[#0F172A]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-['Inter'] text-slate-600 text-lg leading-relaxed mb-10 font-medium italic">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-5 border-t border-slate-50 pt-8">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-14 h-14 rounded-2xl object-cover shadow-lg border-2 border-white"
                />
                <div>
                  <h4 className="font-['Poppins'] font-bold text-[#0F172A] text-lg">{review.name}</h4>
                  <p className="text-sm text-[#DC2626] font-bold uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stat/Social Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F8FAFC] border border-slate-100">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/100?u=${i}`} 
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Avatar"
                />
              ))}
            </div>
            <p className="text-sm font-bold text-slate-600 ml-2">
              Join <span className="text-[#DC2626]">2,500+</span> happy patients
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
