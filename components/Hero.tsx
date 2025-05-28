"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages = [
  "/PicturesOfMe/Berta.jpeg",
  "/PicturesOfMe/image3.jpeg",
  "/PicturesOfMe/image2.jpeg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5750); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center px-4 pt-24 text-center text-white overflow-hidden"
    id="home"
    >
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            }}
          />
        </AnimatePresence>

        {/* Optional: add a dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Foreground content */}
      <motion.div
        className="relative z-10"
        initial={{ x: 1500, opacity: 0 }}
        animate = {{x:0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 13 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I’m <span className="text-blue-500">Colby</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto text-gray-300">
          I&apos;m a passionate Indigenous programmer who loves to create, learn, and connect with people.  
        </p>
      </motion.div>
    </section>
  );
}
