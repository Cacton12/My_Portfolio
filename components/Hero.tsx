"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const backgroundImages = [
  "/PicturesOfMe/Berta.jpg",
  "/PicturesOfMe/image3.jpg",
  "/PicturesOfMe/image2.jpg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center px-4 pt-24 text-center text-white overflow-hidden"
      id="home"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {backgroundImages.map((img, index) => {
            if (index !== currentImageIndex) return null;

            return (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "ease-in-out" }}
              >
                <Image
                  src={img}
                  alt={`Background ${index + 1}`}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
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
