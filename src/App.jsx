import { motion } from "framer-motion";
import { Tile } from "./Tile";

function App() {
  return (
    <main className="relative w-full">
      <section className="grid aspect-square h-screen w-full grid-cols-20 overflow-y-clip">
        {Array.from({ length: 20 * 12 }).map((_, i) => (
          <Tile key={i} />
        ))}
      </section>
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 text-white">
        <motion.h1
          className="text-9xl tracking-tight"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello world!
        </motion.h1>
        <motion.p
          className="text-center text-xl tracking-wide"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Hover over the squares to see the magic happen!
        </motion.p>
        <motion.button
          className="pointer-events-auto cursor-pointer rounded-full bg-indigo-700 px-10 py-3 text-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 450, damping: 20 }}
        >
          Click me!
        </motion.button>
      </div>
    </main>
  );
}

export default App;
