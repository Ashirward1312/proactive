export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Book Online",
      desc: "Choose a time that suits you through our portal.",
    },
    {
      number: "2",
      title: "Initial Assessment",
      desc: "We assess your injury & functional goals.",
    },
    {
      number: "3",
      title: "Treatment Plan",
      desc: "Tailored plan to help you recover fast.",
    },
    {
      number: "4",
      title: "Guided Recovery",
      desc: "Hands-on care & progress tracking.",
    },
    {
      number: "5",
      title: "Strength Support",
      desc: "Stay strong & prevent future injuries.",
    },
  ];

  return (
    <section className="py-24 bg-white font-['Inter'] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#C1121F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#FACC15] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#C1121F] font-['Poppins'] font-bold text-sm uppercase tracking-[0.3em] mb-4 block">
            The Process
          </span>
          <h2 className="text-4xl md:text-[42px] font-bold font-['Poppins'] text-[#0F172A] leading-tight mb-6">
            How It <span className="text-[#C1121F]">Works</span>
          </h2>
          <p className="font-['Inter'] text-slate-500 text-lg leading-relaxed">
            A simple, evidence-based approach to getting you back to your best.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-slate-100">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C1121F]/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                
                {/* Step Circle */}
                <div className="relative mb-8">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-[#C1121F]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Circle */}
                  <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-2xl bg-white border-2 border-slate-100 shadow-sm text-2xl font-black font-['Poppins'] text-[#0F172A] group-hover:bg-[#C1121F] group-hover:text-white group-hover:border-[#C1121F] group-hover:rotate-6 transition-all duration-500 shadow-slate-200/50">
                    {step.number}
                  </div>

                  {/* Connecting Dash (Mobile only between items) */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 w-0.5 h-12 bg-slate-100 -translate-x-1/2 mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-['Poppins'] text-xl font-bold text-[#0F172A] group-hover:text-[#C1121F] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-['Inter'] text-slate-500 text-sm leading-relaxed px-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Support Note */}
        <div className="mt-20 text-center">
          <p className="font-['Inter'] text-slate-400 text-sm flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span>
            We support you at every stage of your recovery journey.
          </p>
        </div>
      </div>
    </section>
  );
}