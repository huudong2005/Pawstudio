import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import logoImg from "../../imports/logo_final.png";

export function StartScreen() {
  const navigate = useNavigate();
  const [showStars, setShowStars] = useState(false);

  const handleStart = () => {
    setShowStars(true);
    setTimeout(() => {
      navigate("/home");
    }, 1800);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#E7A0FF]">
      {showStars && (
        <div className="absolute inset-0 z-50 pointer-events-none">
          {[...Array(30)].map((_, i) => {
            const size = 20 + Math.random() * 20;
            const startX = Math.random() * window.innerWidth;
            const endX = startX + (Math.random() - 0.5) * 600;

            return (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: startX,
                  y: -100,
                  opacity: 0,
                }}
                animate={{
                  x: endX,
                  y: window.innerHeight + 100,
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.5 + Math.random() * 0.5,
                  delay: i * 0.05,
                  ease: "easeInOut",
                }}
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 0.8,
                        repeat: Infinity,
                      },
                    }}
                  >
                    <svg
                      width={size}
                      height={size}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z"
                        fill="url(#starGradient)"
                        filter="url(#glow)"
                      />
                      <defs>
                        <linearGradient id="starGradient" x1="4" y1="2" x2="20" y2="18">
                          <stop offset="0%" stopColor="#FFFFFF" />
                          <stop offset="50%" stopColor="#A8FFEB" />
                          <stop offset="100%" stopColor="#FFFFFF" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                    </svg>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-white via-[#A8FFEB] to-transparent blur-md"
                    style={{
                      width: `${size * 3}px`,
                      height: `${size / 3}px`,
                      transform: "rotate(-45deg) translateX(-50%) translateY(-50%)",
                      transformOrigin: "center",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 flex justify-center"
          >
            <img src={logoImg} alt="Paw Studio" className="h-72 md:h-96 w-auto drop-shadow-2xl" />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
            disabled={showStars}
            className="group relative px-12 py-5 rounded-full bg-[#A8FFEB] text-[#E7A0FF] text-lg shadow-lg shadow-white/40 hover:shadow-xl hover:shadow-white/60 transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              <Sparkles className="w-6 h-6" />
              Start
              <Sparkles className="w-6 h-6" />
            </span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex justify-center gap-4"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-br from-[#E7A0FF] to-[#A8FFEB]"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
