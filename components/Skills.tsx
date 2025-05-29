"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillTag from "./SkillTag"; // Make sure path is correct

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
  "Selenium ",
  "C#",
  "Java SE",
  "JavaFx",
  ".NET",
  "Docker",
  "Next.js",
];

export default function Skills() {
  return (
    <section className="w-full px-4 py-20 bg-gray-950 text-white"
    id="skills"
    >
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

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
