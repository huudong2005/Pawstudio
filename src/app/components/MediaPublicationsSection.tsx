import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { BookOpen, Sparkles } from "lucide-react";

export function MediaPublicationsSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-white to-[#E7A0FF]/5">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E7A0FF] to-transparent opacity-30"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#A8FFEB]/20 to-transparent blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 8,
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
              Media Publications
            </h2>
            <Sparkles className="w-8 h-8 text-[#A8FFEB]" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our promotional materials and creative publications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <button
            onClick={() => navigate("/media-publications")}
            className="group relative px-10 py-6 rounded-full overflow-hidden backdrop-blur-xl bg-gradient-to-r from-[#E7A0FF]/10 to-[#A8FFEB]/10 border-2 border-[#E7A0FF]/30 hover:border-[#A8FFEB]/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#A8FFEB]/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E7A0FF]/20 to-[#A8FFEB]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative flex items-center gap-4">
              <BookOpen className="w-8 h-8 text-[#E7A0FF] group-hover:text-[#A8FFEB] transition-colors duration-300" strokeWidth={2.5} />
              <span className="text-2xl bg-gradient-to-r from-[#E7A0FF] to-[#A8FFEB] bg-clip-text text-transparent">
                View Publications
              </span>
            </div>

            <motion.div
              className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#A8FFEB] blur-xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
