"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationTimeline = [
  {
    institution: "New Brunswick Community College (NBCC)",
    program: "Programmer Analyst",
    period: "2023 - 2025",
    description:
      "Learned full stack development, problem solving and critical thinking",
  },
  {
    institution: "University of New Brunswick (UNB)",
    program: "Bachelor of Civil Engineering",
    period: "2021 - 2022",
    description:
      "Completed foundational courses in science and engineering before changing paths",
  },
];

export default function Education() {
  return (
    <section className="w-full px-4 py-20 bg-gray-950 text-white"
    id="education"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500">My</span> Education
        </motion.h2>

        <div className="relative border-l-4 border-blue-500 pl-6">
          {educationTimeline.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon animation */}
              <div className="absolute -left-[26px] top-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-blue-400">{edu.program}</h3>
              <p className="text-lg text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-400 italic mb-2">{edu.period}</p>
              <p className="text-gray-200">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
