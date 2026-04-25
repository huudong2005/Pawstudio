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
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -50,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth + (Math.random() - 0.5) * 400,
                y: window.innerHeight + 50,
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            >
              <div className="relative">
                <motion.div
                  className="w-2 h-2 rounded-full bg-white"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-white to-transparent blur-sm"
                  style={{
                    transform: "rotate(-45deg)",
                    transformOrigin: "left center",
                  }}
                />
              </div>
            </motion.div>
          ))}
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
