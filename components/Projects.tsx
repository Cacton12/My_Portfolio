"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/components/projectData";

// -------------------- Types --------------------
interface Project {
  title: string;
  description: string;
  videoUrl: string;
  details: string;
  src: string;
  button: string;
  skills: string[];
  featured: boolean;
}

// -------------------- Project Card --------------------
function ProjectCard({
  project,
  index,
  openModal,
}: {
  project: Project;
  index: number;
  openModal: (i: number) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playPreview = () => {
    videoRef.current?.play().catch(() => {});
  };

  const stopPreview = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <motion.div
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="
        relative h-72 w-full max-w-sm bg-[#1e293b] rounded-2xl shadow-xl
        overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-2xl
        transition-all duration-300
      "
      onClick={() => openModal(index)}
    >
      <video
        ref={videoRef}
        src={project.videoUrl}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-between z-10">
        <h2 className="text-xl font-bold text-white">{project.title}</h2>
        <p className="text-gray-300 text-sm line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="text-xs bg-blue-500/50 px-2 py-1 rounded-full text-white"
            >
              {skill}
            </span>
          ))}
        </div>

        <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg w-32 mx-auto mt-3 shadow-md transition">
          {project.button}
        </button>
      </div>
    </motion.div>
  );
}

// -------------------- Main Component --------------------
export default function Projects() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  // Get featured project
  const featuredProject = projects.find((p) => p.featured) ?? projects[0];
  const featuredIndex = projects.indexOf(featuredProject);

  // Filter out featured project for the "All Projects" section
  const otherProjects = projects.filter((p) => p !== featuredProject);

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-24 px-6 flex flex-col items-center"
    >
      {/* Featured Work */}
      <h1 className="text-5xl font-bold mb-10 tracking-tight text-blue-500">
        Featured Work
      </h1>

      <motion.div
        onClick={() => setModalIndex(featuredIndex)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="
          relative w-full max-w-7xl h-[26rem] bg-[#1e293b]
          rounded-3xl shadow-2xl overflow-hidden cursor-pointer
          hover:-translate-y-2 hover:shadow-3xl transition-all duration-300
        "
      >
        <video
          src={featuredProject.videoUrl}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-black/60 p-10 flex flex-col justify-between z-10">
          <h2 className="text-4xl font-bold">{featuredProject.title}</h2>
          <p className="text-gray-200 text-lg line-clamp-4">
            {featuredProject.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {featuredProject.skills.map((skill, i) => (
              <span
                key={i}
                className="text-sm bg-blue-500/50 px-3 py-1 rounded-full text-white"
              >
                {skill}
              </span>
            ))}
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg shadow-lg font-medium transition w-44 mx-auto"
          >
            {featuredProject.button}
          </button>
        </div>
      </motion.div>

      {/* Other Projects */}
      <h1 className="text-5xl font-bold mt-24 mb-12 tracking-tight text-blue-500">
        Other Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-12 w-full max-w-7xl">
        {otherProjects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            openModal={setModalIndex}
          />
        ))}
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setModalIndex(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-3xl w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-blue-400"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-3">{projects[modalIndex].title}</h2>
            <p className="text-gray-300 mb-4">{projects[modalIndex].description}</p>

            <video
              src={projects[modalIndex].videoUrl}
              className="w-full h-72 object-cover rounded-xl mb-4"
              autoPlay
              loop
              muted
            />

            <div className="flex flex-wrap gap-2 mb-4">
              {projects[modalIndex].skills.map((skill, i) => (
                <span key={i} className="text-xs bg-blue-500/50 px-2 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>

            <div
              className="text-gray-200 text-sm"
              dangerouslySetInnerHTML={{ __html: projects[modalIndex].details }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
