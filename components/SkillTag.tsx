"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface SkillTagProps {
  skill: string;
  delay: number;
}

export default function SkillTag({ skill, delay }: SkillTagProps) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.4, delay }}
      className="bg-gray-800 text-sm px-4 py-2 rounded-full text-white shadow-md hover:bg-blue-500 hover:scale-105 transition duration-300">
    
      {skill}
    </motion.div>
  );
}
