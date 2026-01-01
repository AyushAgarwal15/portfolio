import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ message, type = "success", isVisible, onClose, duration = 4000 }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  const getToastStyles = () => {
    switch (type) {
      case "success":
        return {
          borderColor: "border-[#00cea8]",
          iconBg: "bg-gradient-to-r from-[#00cea8] to-[#38ef7d]",
          icon: (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          ),
        };
      case "error":
        return {
          borderColor: "border-[#bf61ff]",
          iconBg: "bg-gradient-to-r from-[#bf61ff] to-[#ec008c]",
          icon: (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ),
        };
      default:
        return {
          borderColor: "border-[#804dee]",
          iconBg: "bg-gradient-to-r from-[#804dee] to-[#915EFF]",
          icon: (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        };
    }
  };

  const styles = getToastStyles();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -100, x: "-50%" }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className={`fixed top-24 left-1/2 z-[99999] bg-[#1d1836] backdrop-blur-md border ${styles.borderColor} text-white px-5 py-4 rounded-2xl shadow-[0_0_40px_rgba(128,77,238,0.3)] flex items-center gap-4 min-w-[340px] max-w-[90vw]`}
        >
          {/* Icon with gradient background */}
          <div className={`flex-shrink-0 ${styles.iconBg} p-2 rounded-xl shadow-lg`}>
            {styles.icon}
          </div>
          
          {/* Message */}
          <p className="text-[15px] font-medium flex-1 text-white/90">{message}</p>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="flex-shrink-0 hover:bg-white/10 rounded-full p-1.5 transition-all duration-200 hover:rotate-90"
          >
            <svg className="w-4 h-4 text-white/60 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
