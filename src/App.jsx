import { motion } from "framer-motion";

export default function App() {
  const cards = [
    { icon: "♻️", title: "Recycle", text: "Reduce waste and reuse materials." },
    { icon: "🌳", title: "Plant Trees", text: "Trees provide oxygen and clean air." },
    { icon: "💧", title: "Save Water", text: "Every drop counts for our future." },
  ];

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      {/* Slide 1 */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-5 relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="text-[150px] mb-8"
        >
          🌍
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-8xl font-bold"
        >
          SAVE OUR
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-green-400 text-7xl md:text-8xl font-bold"
        >
          ENVIRONMENT
        </motion.h2>
      </section>

      {/* Slide 2 */}
      <section className="min-h-screen flex flex-col justify-center items-center px-10">
        <h2 className="text-6xl font-bold mb-16 text-green-400">
          Why Is It Important?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-3xl border border-green-500">
            <div className="text-6xl">🌳</div>
            <h3 className="text-3xl font-bold mt-4">Forests</h3>
            <p className="mt-3 text-gray-300">
              Trees absorb carbon dioxide and produce oxygen.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl border border-green-500">
            <div className="text-6xl">🐼</div>
            <h3 className="text-3xl font-bold mt-4">Animals</h3>
            <p className="mt-3 text-gray-300">
              Millions of species depend on healthy ecosystems.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl border border-green-500">
            <div className="text-6xl">💧</div>
            <h3 className="text-3xl font-bold mt-4">Water</h3>
            <p className="mt-3 text-gray-300">
              Clean water is essential for life.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 3 */}
      <section className="min-h-screen flex flex-col justify-center items-center px-10">
        <h2 className="text-6xl font-bold mb-16 text-green-400">
          What Can We Do?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ scale: 1.1, y: -15 }}
              className="bg-green-500 p-8 rounded-3xl text-center"
            >
              <div className="text-6xl">{card.icon}</div>
              <h3 className="text-3xl font-bold mt-4">{card.title}</h3>
              <p className="mt-3">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Slide 4 */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-6xl font-bold mb-10 text-green-400">
          Environmental Facts
        </h2>

        <div className="text-4xl space-y-6">
          <p>🌍 More than 8 million tons of plastic enter oceans every year.</p>
          <p>🌳 One tree can absorb about 22 kg of CO₂ annually.</p>
          <p>♻ Recycling saves energy and natural resources.</p>
        </div>
      </section>

      {/* Slide 5 */}
      <section className="h-screen flex flex-col justify-center items-center bg-green-600">
        <h2 className="text-7xl font-bold mb-8">
          Together We Can Make A Difference
        </h2>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[180px]"
        >
          🌎
        </motion.div>
      </section>

      {/* Slide 6 */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-8xl font-bold text-green-400">
          THANK YOU!
        </h1>

        <p className="mt-8 text-3xl">
          Let's protect our planet together 💚
        </p>
      </section>
    </div>
  );
}