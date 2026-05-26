import { motion } from "framer-motion";
import { UserCheck, HeartPulse, Activity, Zap, ArrowRight } from "lucide-react";
import AboutImg from "../img/h2.webp"

export default function About() {
  return (
    <section className="relative pt-40 pb-24 bg-gradient-to-br from-white to-[#F8FAFC] overflow-hidden">

      {/* Red Glow Effect */}
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-[#DC2626]/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header - Centered */}
        <div className="max-w-4xl mb-24 text-center mx-auto">
          <p className="text-[#DC2626] font-['Poppins'] text-sm font-semibold tracking-[2px] uppercase mb-4">
            About Us
          </p>

          <h2 className="text-[#0F172A] font-['Poppins'] text-4xl md:text-6xl font-bold leading-tight tracking-[-1px] mb-6">
            Helping You Move Better, <br />
            Recover Faster & <span className="text-[#DC2626]">Live Pain Free.</span>
          </h2>

          <p className="text-[#475569] font-['Inter'] text-[18px] leading-8 max-w-2xl mx-auto">
            At Pro Active Physiotherapy, we provide advanced physiotherapy and
            rehabilitation treatments focused on pain relief, mobility
            improvement, and faster recovery.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side Cards */}
          <div className="grid sm:grid-cols-2 gap-8">

            {[
              {
                icon: <UserCheck className="w-6 h-6" />,
                title: "Expert Therapists",
                desc: "Highly trained professionals delivering evidence-based physiotherapy treatments."
              },
              {
                icon: <HeartPulse className="w-6 h-6" />,
                title: "Personalized Care",
                desc: "Customized recovery plans tailored to your specific needs and goals."
              },
              {
                icon: <Activity className="w-6 h-6" />,
                title: "Advanced Equipment",
                desc: "Modern rehabilitation tools and cutting-edge therapy techniques."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Fast Recovery Programs",
                desc: "Structured programs focused on quicker healing and long-term wellness."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-[#E2E8F0] rounded-3xl p-8 shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-lg transition"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[#DC2626]/10 text-[#DC2626] rounded-2xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-[#0F172A] font-['Poppins'] text-[22px] font-semibold leading-8 mb-3">
                  {item.title}
                </h3>

                <p className="text-[#64748B] font-['Inter'] text-[15px] leading-7">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Side Image + Button */}
          <div className="relative">

            <img
              src={AboutImg}
              alt="Physiotherapy"
              className="rounded-3xl shadow-xl object-cover w-full h-[500px]"
            />

            {/* CTA Button */}
            <div className="mt-10">
              <button className="bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white font-['Poppins'] text-base font-semibold px-7 py-4 rounded-xl flex items-center gap-3 hover:scale-105 transition">
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}