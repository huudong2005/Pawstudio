import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowLeft, Sparkles } from "lucide-react";
import standee1 from "../../imports/STANDEE_1.png";
import standee2 from "../../imports/STANDEE_2.png";
import brochure2 from "../../imports/BROCHURE_2.png";
import brochureBack from "../../imports/BROCHURE_BACK.png";
import brochureFont from "../../imports/BROCHURE_FONT.png";

const products = [
  { id: 1, name: "Standee Design 1", image: standee1 },
  { id: 2, name: "Standee Design 2", image: standee2 },
  { id: 3, name: "Brochure", image: brochure2 },
  { id: 4, name: "Brochure Back", image: brochureBack },
  { id: 5, name: "Brochure Front", image: brochureFont },
];

export function MediaPublications() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E7A0FF]/5 via-white to-[#A8FFEB]/5 pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#E7A0FF]/10 to-transparent blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#A8FFEB]/10 to-transparent blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10">
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#E7A0FF]/80 border-b border-white/20 shadow-lg shadow-[#E7A0FF]/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <button
              onClick={() => navigate("/home")}
              className="group flex items-center gap-3 text-white hover:text-white/90 transition-colors duration-300"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-lg">Back to Home</span>
            </button>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-10 h-10 text-[#E7A0FF]" />
              <h1 className="text-6xl md:text-7xl bg-gradient-to-r from-[#E7A0FF] via-[#C8B4FF] to-[#A8FFEB] bg-clip-text text-transparent">
                Media Publications
              </h1>
              <Sparkles className="w-10 h-10 text-[#A8FFEB]" />
            </div>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mt-6">
              Our collection of promotional materials and creative publications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/40 border border-[#E7A0FF]/20 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#A8FFEB]/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E7A0FF]/5 to-[#A8FFEB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative aspect-square p-8 flex items-center justify-center bg-gradient-to-br from-[#E7A0FF]/5 to-transparent">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="relative p-6 bg-white/60 backdrop-blur-sm border-t border-[#E7A0FF]/10">
                    <h3 className="text-2xl text-center bg-gradient-to-r from-[#E7A0FF] to-[#A8FFEB] bg-clip-text text-transparent">
                      {product.name}
                    </h3>
                  </div>

                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#A8FFEB]/30 blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex justify-center gap-3"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#E7A0FF] to-[#A8FFEB]"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
