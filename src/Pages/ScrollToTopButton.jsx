import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

/**
 * ScrollToTopButton — fixed bottom-right scroll-to-top helper button.
 * Only appears when the user scrolls down a certain height.
 */
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-5 z-[999] w-14 h-14 rounded-2xl bg-[#0F172A] hover:bg-[#C1121F] border border-white/10 text-white flex items-center justify-center shadow-2xl transition-colors duration-300"
        >
          <ChevronUp className="w-6 h-6 animate-bounce" style={{ animationDuration: '2s' }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
