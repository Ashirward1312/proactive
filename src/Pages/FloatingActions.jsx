import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const WA_NUMBER = "918085354646";
const INSTAGRAM = "https://www.instagram.com/proactivephysiotherapy";

/**
 * FloatingActions — always visible, fixed bottom-right action buttons.
 * Displays WhatsApp and Instagram side-by-side or stacked beautifully.
 */
export default function FloatingActions() {
  const actions = [
    {
      label: "Instagram",
      href: INSTAGRAM,
      icon: <FaInstagram size={24} />,
      bg: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      shadow: "shadow-pink-500/30",
      pingColor: "bg-pink-500",
      hasPing: false
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20an%20appointment.`,
      icon: <FaWhatsapp size={26} />,
      bg: "from-[#25D366] to-[#1ebe5d]",
      shadow: "shadow-green-500/30",
      pingColor: "bg-[#25D366]",
      hasPing: true // Highlight WhatsApp with an active pulse ping
    },
  ];

  return (
    <div className="fixed bottom-6 left-5 z-[999] flex flex-col gap-4">
      {actions.map((action) => (
        <motion.div
          key={action.label}
          initial={{ opacity: 0, x: -20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative group flex items-center justify-start"
        >
          {/* Floating Icon Button */}
          <a
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={action.label}
            className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${action.bg} text-white flex items-center justify-center shadow-2xl ${action.shadow} hover:scale-110 hover:rotate-3 active:scale-95 transition-all duration-300`}
          >
            {/* Conditional Pulse Ring */}
            {action.hasPing && (
              <span className={`absolute inset-0 rounded-2xl ${action.pingColor} animate-ping opacity-35 pointer-events-none`} />
            )}
            
            {action.icon}
          </a>

          {/* Label pill shown on hover to the right */}
          <span className="ml-3 pointer-events-none opacity-0 -translate-x-3 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 bg-[#0F172A] text-white text-xs font-['Poppins'] font-semibold px-3.5 py-2 rounded-2xl shadow-xl whitespace-nowrap transition-all duration-300">
            {action.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
