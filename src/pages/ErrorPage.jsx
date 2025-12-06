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

                      <motion.h1
            className="text-3xl sm:text-4xl font-black leading-snug bg-gradient-to-b from-white to-yellow-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: [0, -4, 0],
              textShadow: [
                "0 0 0px rgba(250, 204, 21, 0.0)",
                "0 0 16px rgba(250, 204, 21, 0.7)",
                "0 0 0px rgba(250, 204, 21, 0.0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.03 }}
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

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 sm:px-8 py-3 bg-white text-black rounded-full text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-black" />
                <span>Back to Home</span>
              </motion.a>

              <motion.button
                onClick={() => window.history.back()}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 sm:px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full border border-white" />
                <span>Previous Page</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
