import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

/**
 * BackButton — inline component (NOT fixed).
 * Place inside the hero section above the grid.
 * No z-index conflicts, no overlap with header or content.
 */
export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <div className="mb-8 lg:mb-10">
      <button
        onClick={handleBack}
        aria-label="Go back"
        className="group inline-flex items-center gap-2.5 bg-white border border-slate-200 px-4 py-2.5 rounded-2xl shadow-sm shadow-black/5 hover:border-[#C1121F]/30 hover:shadow-md transition-all duration-300"
      >
        {/* Arrow icon */}
        <span className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-[#C1121F] transition-colors duration-300">
          <ChevronLeft className="w-4 h-4" />
        </span>
        <span className="text-[11px] font-['Poppins'] font-extrabold uppercase tracking-[0.18em] text-slate-700 group-hover:text-[#C1121F] transition-colors duration-300">
          Back
        </span>
      </button>
    </div>
  );
}
