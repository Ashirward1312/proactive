import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Activity } from "lucide-react";
import mainHero from "../img/h3.jpg";
import mainhero2 from "../img/h2.jpg";
import mainhero3 from "../img/h4.jpg";

export default function HeroSection() {
    const images = [mainHero, mainhero2, mainhero3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="relative h-[90vh] lg:h-screen w-full overflow-hidden flex items-center justify-center">
            
            {/* 🖼️ BACKGROUND SLIDESHOW LAYER */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <img
                            src={images[currentIndex]}
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* 🌑 DARK OVERLAY LAYER - Centered Gradient */}
            <div className="absolute inset-0 z-10 bg-black/40" />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0F172A]/80 via-transparent to-[#0F172A]/80" />
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0F172A]/30 to-[#0F172A]/70" />

            {/* 📝 CONTENT LAYER - Centered Content */}
            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#C1121F]/20 border border-[#C1121F]/30 backdrop-blur-md mb-10">
                            <Activity className="w-4 h-4 text-[#C1121F]" />
                            <span className="text-[12px] font-['Poppins'] font-semibold uppercase tracking-[2px] text-white">
                                Physiotherapy Excellence
                            </span>
                        </div>

                        <h1 className="font-['Poppins'] text-4xl sm:text-6xl lg:text-[84px] font-bold text-white leading-[1.05] tracking-[-3px] mb-8">
                            Move Better, <br />
                            <span className="text-white opacity-90">Recover </span>
                            <span className="text-[#C1121F]">Faster.</span>
                        </h1>

                        <p className="font-['Inter'] text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-14 opacity-90">
                            Elite clinical care tailored to your recovery goals. We combine advanced science with personalized therapy to get you back to peak performance.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <button
                                className="group relative bg-[#C1121F] text-white px-10 py-5 rounded-[24px] font-['Poppins'] font-bold text-[18px] overflow-hidden transition-all hover:scale-[1.05] active:scale-95 shadow-2xl shadow-[#C1121F]/40"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Book Assessment <Calendar className="w-5 h-5" />
                                </span>
                                <div className="absolute inset-0 bg-[#0F172A] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </button>

                            <button className="group px-10 py-5 rounded-[24px] font-['Poppins'] font-bold text-[18px] text-white border border-white/30 backdrop-blur-md hover:bg-white hover:text-[#0F172A] transition-all flex items-center gap-3">
                                Our Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 🌀 BOTTOM MESH FOR SMOOTH BLEND */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 opacity-20" />
        </section>
    );
}
