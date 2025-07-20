"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Download } from "lucide-react";

const experiences = [
  {
    role: "Labourer",
    company: "City of Fredericton",
    period: "current",
    description:
      "Maintain parks and trails through mowing, trimming, and equipment operation. Built adaptability, problem-solving skills, and public engagement experience.",
  },
  {
    role: "Labourer",
    company: "University of New Brunswick",
    period: "July - September 2023",
    description:
      "Mowed grass and performed various outdoor maintenance tasks. Gained hands-on experience, improved efficiency, and strengthened work ethic through consistent physical labor.",
  },
  {
    role: "Software Developer Intern",
    company: "Spandrel Interactive",
    period: "April - June 2025",
    description:
      "Focused on resolving bugs, collaborating closely with the QA team to ensure the website functions smoothly and meets quality standards. Creating a user-friendly experience through iterative fixes.",
  },
];


export default function Experience() {
  return (
    <section className="w-full px-4 py-20 bg-black text-white"
    id="experience"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500">My</span> Experience
        </motion.h2>

        <div className="grid gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="p-6 border border-gray-700 rounded-xl shadow-xl bg-gray-900 hover:border-blue-500 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold">{exp.role}</h3>
              </div>
              <p className="text-gray-300">{exp.company}</p>
              <p className="text-sm text-gray-400 italic">{exp.period}</p>
              <p className="mt-2 text-gray-200">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Resume Button */}
        <div className="flex justify-center mt-12">
          <a
            href="/Resume-Colby-Acton.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
