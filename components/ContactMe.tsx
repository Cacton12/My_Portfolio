"use client";

import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <section className="w-full px-4 py-20 bg-black text-gray-100" id="contact">
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
          Interested in working together or just want to say hi? Feel free to reach out!
        </p>

        <motion.a
          href="mailto:colbyacton12@icloud.com"
          className="inline-block text-xl text-white underline mb-6 hover:text-blue-400 transition"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Send Me an Email
        </motion.a>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Connect with me</h3>
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://www.linkedin.com/in/colby-acton-93740b286/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons8-linkedin.svg" alt="LinkedIn Logo" className="w-12 h-12" />
            </a>
            <a
              href="https://github.com/Cacton12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/GitHub_Logo_White.png" alt="GitHub Logo" className="w-16 h-16 object-contain" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
