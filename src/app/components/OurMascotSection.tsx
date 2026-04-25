import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import mascotImg from "../../imports/IMG_4267.png";

export function OurMascotSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-white to-[#A8FFEB]/5">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E7A0FF] to-transparent opacity-30"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#E7A0FF]/20 to-transparent blur-3xl"
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
          className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#A8FFEB]/20 to-transparent blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-[#E7A0FF]" />
            <h2 className="text-5xl bg-gradient-to-r from-[#E7A0FF] to-[#A8FFEB] bg-clip-text text-transparent">
              Our Mascot
            </h2>
            <Sparkles className="w-8 h-8 text-[#A8FFEB]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative max-w-4xl w-full">
            <motion.div
              className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/40 border border-[#E7A0FF]/20 shadow-2xl shadow-[#E7A0FF]/10 p-8 cursor-pointer"
              whileHover={{
                y: -12,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(231, 160, 255, 0.25)",
              }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E7A0FF]/5 to-[#A8FFEB]/5"></div>
              <motion.div
                className="relative"
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <img
                  src={mascotImg}
                  alt="Our Mascot"
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
              <motion.div
                className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-[#A8FFEB]/40 blur-2xl"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-16 h-16 rounded-full bg-[#E7A0FF]/40 blur-2xl"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5,
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
