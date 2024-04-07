import { motion } from "framer-motion";

function App() {
  return (
    <main className="w-full relative">
      <section className="w-full grid grid-cols-20 h-screen overflow-y-clip aspect-square">
        {Array.from({length: 20 * 12}).map((_, i) => (
          <motion.div 
            key={i} 
            whileHover={{
              zIndex: 1,
              backgroundColor: "#7c3aed",
            }}
            transition={{
              duration: 5,
              ease: "easeOut",
            }}
            className="aspect-square bg-neutral-950 border-neutral-900"
          />
        ))}
      </section>
    </main>
  )
}

export default App;
