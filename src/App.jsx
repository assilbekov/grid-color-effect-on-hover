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
      <div className="flex flex-col gap-5 absolute inset-0 justify-center items-center pointer-events-none text-white z-10">
        <motion.h1 
          className="text-9xl tracking-tight"
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
        >
          Hello world!
        </motion.h1>
        <motion.p 
          className="text-xl text-center tracking-wide"
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.25}}
        >
          Hover over the squares to see the magic happen!
        </motion.p>
        <motion.button 
          className="rounded-full text-3xl pointer-events-auto cursor-pointer bg-indigo-700 px-10 py-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type:"spring", stiffness: 450, damping: 20 }}
        >
          Click me!
        </motion.button>
      </div>
    </main>
  )
}

export default App;
