"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    }, 6000); // Even 6s rotation
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center px-4 pt-24 text-center text-white overflow-hidden"
      id="home"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${img})`,
              opacity: currentImageIndex === index ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
