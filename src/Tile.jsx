import { motion } from "framer-motion";

export const Tile = () => {
  return (
    <motion.div
      whileHover={{
        zIndex: 1,
        backgroundColor: "#d946ef",
      }}
      transition={{
        duration: 5,
        ease: "easeOut",
      }}
      className="aspect-square border-neutral-900 bg-neutral-950"
    />
  );
};
