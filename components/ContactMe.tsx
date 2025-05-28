// app/components/ContactMe.tsx
"use client";

import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <section className="w-full px-4 py-20 bg-black text-gray-100"
    id="contact"
    >
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-blue-500">Contact</span> Me
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Interested in working together or just want to say talk? Send me a message!
        </p>
        <div>
          <motion.a
            href="mailto:colbyacton12@icloud.com"
            className="text-white"
              whileHover={{ scale: 1.1, color: "#3B82F6" }}
              transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl pb-2">
              Send Me An Email
            </h2>
          </motion.a>
          Email: Colbyacton12@icloud.com
        </div>
        <div className="flex justify-center items-center gap-4">
          <a href="https://www.linkedin.com/in/colby-acton-93740b286/" target="_blank" rel="noopener noreferrer">
            <img src="icons8-linkedin.svg" alt="LinkedIn Logo" className="w-12 h-12" />
          </a>
          <a href="https://github.com/Cacton12" target="_blank" rel="noopener noreferrer">
            <img src="GitHub_Logo_White.png" alt="GitHub Logo" className="w-20 h-20 object-contain" />
          </a>
      </div>

      </motion.div>
    </section>
  );
}
