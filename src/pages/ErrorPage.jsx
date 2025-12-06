import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left: 3D super visible */}
        <div className="relative h-1/2 lg:h-full">
          <Spline
            scene="https://prod.spline.design/2fXAux-rsCaAPM5P/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Right: content */}
        <div className="flex items-center justify-center h-1/2 lg:h-full px-4 lg:px-10 bg-gradient-to-l from-black/90 via-black/80 to-black/60">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg rounded-3xl bg-black/50 border border-white/10 backdrop-blur-md px-8 py-9 shadow-[0_18px_60px_rgba(0,0,0,0.7)]"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-3">
              404 • Page not found
            </p>

            {/* Animated main heading */}
            <motion.h1
              className="text-3xl sm:text-4xl font-black leading-snug bg-gradient-to-b from-white to-yellow-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 10, scale: 0.94 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: [1, 1.06, 1],
                rotate: [0, -1.5, 1, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.07 }}
            >
              കൗതുകം ലേശം കൂടുതൽ ആണ് ഇല്ലേ?
            </motion.h1>

            <div className="mt-4 space-y-1">
              <h2 className="text-lg sm:text-xl font-semibold text-white/90">
                നീ എത്തിയ സ്ഥലം ഒരിക്കലും ഉണ്ടായിരുന്നില്ല!
              </h2>
              <p className="text-sm sm:text-base text-white/75">
                ഇനി ഇങ്ങനെ വീണ്ടും വരരുത്.
              </p>
            </div>

            {/* Buttons with SVG icons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 sm:px-8 py-3 bg-white text-black rounded-full text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  {/* Home icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 11L12 3l9 8" />
                    <path d="M5 10v10h5v-6h4v6h5V10" />
                  </svg>
                </span>
                <span>Back to Home</span>
              </motion.a>

              <motion.button
                onClick={() => window.history.back()}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 sm:px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  {/* Arrow-back icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                    <path d="M9 12h10" />
                  </svg>
                </span>
                <span>Previous Page</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
