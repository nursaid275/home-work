// import { motion } from "framer-motion";

// export default function App() {
//   const cards = [
//     { icon: "♻️", title: "Recycle", text: "Reduce waste and reuse materials." },
//     { icon: "🌳", title: "Plant Trees", text: "Trees provide oxygen and clean air." },
//     { icon: "💧", title: "Save Water", text: "Every drop counts for our future." },
//   ];

//   return (
//     <div className="bg-slate-950 text-white overflow-x-hidden">
//       {/* Slide 1 */}
//       <section className="h-screen flex flex-col justify-center items-center text-center px-5 relative">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//           className="text-[150px] mb-8"
//         >
//           🌍
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-7xl md:text-8xl font-bold"
//         >
//           SAVE OUR
//         </motion.h1>

//         <motion.h2
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-green-400 text-7xl md:text-8xl font-bold"
//         >
//           ENVIRONMENT
//         </motion.h2>
//       </section>

//       {/* Slide 2 */}
//       <section className="min-h-screen flex flex-col justify-center items-center px-10">
//         <h2 className="text-6xl font-bold mb-16 text-green-400">
//           Why Is It Important?
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-slate-900 p-8 rounded-3xl border border-green-500">
//             <div className="text-6xl">🌳</div>
//             <h3 className="text-3xl font-bold mt-4">Forests</h3>
//             <p className="mt-3 text-gray-300">
//               Trees absorb carbon dioxide and produce oxygen.
//             </p>
//           </div>

//           <div className="bg-slate-900 p-8 rounded-3xl border border-green-500">
//             <div className="text-6xl">🐼</div>
//             <h3 className="text-3xl font-bold mt-4">Animals</h3>
//             <p className="mt-3 text-gray-300">
//               Millions of species depend on healthy ecosystems.
//             </p>
//           </div>

//           <div className="bg-slate-900 p-8 rounded-3xl border border-green-500">
//             <div className="text-6xl">💧</div>
//             <h3 className="text-3xl font-bold mt-4">Water</h3>
//             <p className="mt-3 text-gray-300">
//               Clean water is essential for life.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Slide 3 */}
//       <section className="min-h-screen flex flex-col justify-center items-center px-10">
//         <h2 className="text-6xl font-bold mb-16 text-green-400">
//           What Can We Do?
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {cards.map((card) => (
//             <motion.div
//               key={card.title}
//               whileHover={{ scale: 1.1, y: -15 }}
//               className="bg-green-500 p-8 rounded-3xl text-center"
//             >
//               <div className="text-6xl">{card.icon}</div>
//               <h3 className="text-3xl font-bold mt-4">{card.title}</h3>
//               <p className="mt-3">{card.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Slide 4 */}
//       <section className="h-screen flex flex-col justify-center items-center text-center">
//         <h2 className="text-6xl font-bold mb-10 text-green-400">
//           Environmental Facts
//         </h2>

//         <div className="text-4xl space-y-6">
//           <p>🌍 More than 8 million tons of plastic enter oceans every year.</p>
//           <p>🌳 One tree can absorb about 22 kg of CO₂ annually.</p>
//           <p>♻ Recycling saves energy and natural resources.</p>
//         </div>
//       </section>

//       {/* Slide 5 */}
//       <section className="h-screen flex flex-col justify-center items-center bg-green-600">
//         <h2 className="text-7xl font-bold mb-8">
//           Together We Can Make A Difference
//         </h2>

//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="text-[180px]"
//         >
//           🌎
//         </motion.div>
//       </section>

//       {/* Slide 6 */}
//       <section className="h-screen flex flex-col justify-center items-center text-center">
//         <h1 className="text-8xl font-bold text-green-400">
//           THANK YOU!
//         </h1>

//         <p className="mt-8 text-3xl">
//           Let's protect our planet together 💚
//         </p>
//       </section>
//     </div>
//   );
// }





import { motion } from "framer-motion";

export default function App() {
  const cards = [
    { icon: "♻️", title: "Recycle", text: "Reduce waste and reuse materials." },
    { icon: "🌳", title: "Plant Trees", text: "Trees provide oxygen and clean air." },
    { icon: "💧", title: "Save Water", text: "Every drop counts for our future." },
  ];

  return (
    <div className="bg-[#020712] text-white overflow-x-hidden font-mono relative min-h-screen">
      
      {/* ================= ГЛОБАЛЬНЫЙ ИНТЕРФЕЙС ДЖАРВИСА (ФОН) ================= */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        {/* Лазерная сетка HUD */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        {/* Свечение интерфейса по углам экрана */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full" />

        {/* Сканирующие телеметрические данные (Джарвис декор) */}
        <div className="absolute top-5 left-5 text-[10px] text-cyan-400/40 tracking-widest uppercase space-y-1 hidden md:block">
          <p>📡 SYSTEM_STATUS: ACTIVE</p>
          <p>🔋 ENERGY_CORE: 97%</p>
          <p>🌍 ECO_MONITORING: INITIALIZED</p>
        </div>
        <div className="absolute bottom-5 right-5 text-[10px] text-cyan-400/40 tracking-widest uppercase text-right hidden md:block">
          <p>BIOMETRIC_SCAN: AUTHORIZED</p>
          <p>GRID_MARKER: ALPHA-8</p>
        </div>
      </div>
      {/* ==================================================================== */}

      {/* Slide 1 */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-5 relative">
        <div className="relative flex items-center justify-center mb-8">
          {/* Крутящиеся кольца HUD вокруг Земли */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-cyan-500/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-[200px] h-[200px] rounded-full border-2 border-cyan-400/20"
          />
          {/* Сама планета */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="text-[140px] z-10 drop-shadow-[0_0_35px_rgba(34,211,238,0.3)]"
          >
            🌍
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
        >
          SAVE OUR
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-cyan-400 text-6xl md:text-8xl font-black tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
        >
          ENVIRONMENT
        </motion.h2>
      </section>

      {/* Slide 2 */}
      <section className="min-h-screen flex flex-col justify-center items-center px-10 relative">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
          &gt;_ Why Is It Important?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
          {[
            { icon: "🌳", title: "Forests", desc: "Trees absorb carbon dioxide and produce oxygen." },
            { icon: "🐼", title: "Animals", desc: "Millions of species depend on healthy ecosystems." },
            { icon: "💧", title: "Water", desc: "Clean water is essential for life." }
          ].map((item, index) => (
            <div key={index} className="bg-slate-950/60 backdrop-blur-md p-8 rounded-2xl border border-cyan-500/30 relative overflow-hidden group shadow-[0_0_15px_rgba(6,182,212,0.05)]">
              {/* Лазерный уголок кибер-интерфейса */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
              
              <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-2xl font-bold mt-4 text-cyan-300">{item.title}</h3>
              <p className="mt-3 text-gray-400 font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Slide 3 */}
      <section className="min-h-screen flex flex-col justify-center items-center px-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.3)]">
          &gt;_ What Can We Do?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-slate-950/80 backdrop-blur-md p-8 rounded-2xl border border-green-500/40 text-center relative shadow-[0_0_20px_rgba(34,197,94,0.1)]"
            >
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-400" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-400" />

              <div className="text-6xl drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]">{card.icon}</div>
              <h3 className="text-2xl font-bold mt-4 text-green-400">{card.title}</h3>
              <p className="mt-3 text-gray-300 font-sans">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Slide 4 */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
          DATA_LOG: Environmental Facts
        </h2>

        <div className="text-xl md:text-3xl space-y-6 max-w-4xl font-sans text-gray-300">
          <p className="border-b border-cyan-500/20 pb-4 backdrop-blur-sm bg-slate-950/20 p-4 rounded-xl">
            🔹 More than <span className="text-cyan-400 font-bold font-mono">8,000,000 tons</span> of plastic enter oceans every year.
          </p>
          <p className="border-b border-cyan-500/20 pb-4 backdrop-blur-sm bg-slate-950/20 p-4 rounded-xl">
            🔹 One tree can absorb about <span className="text-green-400 font-bold font-mono">22 kg</span> of CO₂ annually.
          </p>
          <p className="backdrop-blur-sm bg-slate-950/20 p-4 rounded-xl">
            🔹 Recycling saves massive amounts of energy and natural resources.
          </p>
        </div>
      </section>

      {/* Slide 5 */}
      <section className="h-screen flex flex-col justify-center items-center text-center relative bg-gradient-to-b from-transparent to-cyan-950/30">
        <h2 className="text-4xl md:text-6xl font-black mb-12 max-w-5xl px-4 text-cyan-300">
          TOGETHER WE CAN MAKE A DIFFERENCE
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Свечение ядра */}
          <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[50px]" />
          
          {/* Голографические прицелы Джарвиса */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-cyan-400/40"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-[250px] h-[250px] rounded-full border border-double border-green-400/30"
          />
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-[160px] z-10 drop-shadow-[0_0_40px_rgba(6,182,212,0.4)]"
          >
            🌎
          </motion.div>
        </div>
      </section>

      {/* Slide 6 */}
      <section className="h-screen flex flex-col justify-center items-center text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[600px] h-[300px] border border-cyan-500/20 rounded-3xl bg-slate-950/40 backdrop-blur-md -z-10" />
        
        <h1 className="text-6xl md:text-8xl font-black text-green-400 tracking-widest drop-shadow-[0_0_20px_rgba(74,222,128,0.4)]">
          THANK YOU!
        </h1>

        <p className="mt-8 text-2xl md:text-3xl text-cyan-300">
          Let's protect our planet together 💚
        </p>
        <p className="text-[11px] text-cyan-500/40 font-mono mt-4 tracking-widest">
          PROTOCOL_TERMINATED // JARVIS_V4
        </p>
      </section>
    </div>
  );
}