import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Sparkles } from "lucide-react";
import logoImg from "../../imports/logo_final.png";

export function StartScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFF5FD] via-[#F0F9FF] to-[#F0FFF9]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E7A0FF]/15 via-transparent to-[#A8FFEB]/15"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#E7A0FF]/30 to-transparent blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#A8FFEB]/30 to-transparent blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

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
            className="mb-8 flex justify-center"
          >
            <img src={logoImg} alt="Paw Studio" className="h-40 w-auto drop-shadow-2xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 text-6xl md:text-7xl bg-gradient-to-r from-[#E7A0FF] via-[#C8B4FF] to-[#A8FFEB] bg-clip-text text-transparent"
          >
            Paw Studio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 text-xl md:text-2xl text-gray-600"
          >
            Creating cozy, magical games
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/home")}
            className="group relative px-12 py-5 rounded-full bg-gradient-to-r from-[#E7A0FF] to-[#A8FFEB] text-white text-lg shadow-lg shadow-[#E7A0FF]/30 hover:shadow-xl hover:shadow-[#E7A0FF]/40 transition-all duration-300"
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
