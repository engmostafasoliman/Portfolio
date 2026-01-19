import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ name = "", logoUrl = "", onFinish }) {
  React.useEffect(() => {
    const t = setTimeout(() => onFinish && onFinish(), 1400);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed inset-0 z-[60] bg-gradient-to-br from-white to-slate-50"
        onClick={() => onFinish && onFinish()}
      >
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 select-none">
            <motion.img
              src={logoUrl}
              alt="Logo"
              className="h-20 w-20 object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              draggable={false}
            />
            <motion.h1
              className="text-2xl font-semibold text-slate-900"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              {name}
            </motion.h1>
            <motion.div
              className="h-1 w-24 bg-slate-200 rounded-full overflow-hidden"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div
                className="h-full bg-slate-900"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
              />
            </motion.div>
            <p className="text-xs text-slate-500">Tap to skip</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}