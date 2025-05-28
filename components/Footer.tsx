"use client";

import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-4 px-6 border-t border-gray-700">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left justify-center items-center"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
      </motion.div>

      <motion.div
        className="mt-10 text-center text-gray-500 text-sm"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        &copy; {new Date().getFullYear()} Colby Acton. All rights reserved.
      </motion.div>
    </footer>
  );
}
