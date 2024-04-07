import { motion } from "framer-motion";

function App() {
  return (
    <main className="w-full relative">
      <section className="w-full grid grid-cols-20 h-screen overflow-y-clip aspect-square">
        {Array.from({length: 20 * 12}).map((_, i) => (
          <motion.div 
            key={i} 
            whileHover={{zIndex: 1, backgroundColor: "#4F46E5"}}
            transition={{duration: 3, ease: "easeOut"}}
            className="hover:bg-indigo-900 aspect-square bg-slate-800"
          />
        ))}
      </section>
    </main>
  )
}

export default App;
