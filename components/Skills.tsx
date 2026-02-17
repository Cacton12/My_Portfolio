"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillTag from "./SkillTag";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Laravel",
  "Tailwind CSS",
  "MySQL",
  "Git",
  "AWS",
  "Selenium",
  "C#",
  "Java SE",
  "JavaFx",
  ".NET",
  "Docker",
  "Next.js",
  "Azure",
  "Cloudflare",
  "Gemini API",
];

// Optional: memoize SkillTag if it is purely presentational
const MemoSkillTag = React.memo(SkillTag);

export default function Skills() {
  // Variants for container staggering
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // stagger each skill by 50ms
      },
    },
  };

  // Variants for individual skill animations
  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full px-4 py-20 bg-gray-950 text-white" id="skills">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500">Tech</span> Skills
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={skillVariants}>
              <MemoSkillTag skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
