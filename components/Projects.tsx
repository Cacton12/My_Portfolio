"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects, Project, ProjectsProps } from "@/components/projectData";

// -------------------- Project Card --------------------
function ProjectCard({
  project,
  index,
  openModal,
  isMobile,
}: {
  project: Project;
  index: number;
  openModal: (i: number) => void;
  isMobile: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  const playPreview = () => videoRef.current?.play().catch(() => {});
  const stopPreview = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  // Auto-play video on mobile if needed
  useEffect(() => {
    if (isMobile) {
      videoRef.current?.play().catch(() => {});
    }
  }, [isMobile]);

  return (
    <motion.div
      onMouseEnter={!isMobile ? playPreview : undefined}
      onMouseLeave={!isMobile ? stopPreview : undefined}
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
      {!videoError ? (
        <video
          ref={videoRef}
          src={isMobile ? project.mobileSrc ?? project.videoUrl : project.videoUrl}
          poster={project.mobileSrc ?? project.src}
          muted
          loop
          playsInline
          autoPlay={!isMobile}
          preload={isMobile ? "none" : "metadata"}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          onError={(e) => {
            console.warn(`Project video failed to load: ${project.title}`, e);
            setVideoError(true);
          }}
          onLoadedData={() => setVideoError(false)}
        />
      ) : (
        <img
          src={project.mobileSrc ?? project.src ?? "/Rabbit.avif"}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/Rabbit.avif";
          }}
        />
      )}
      <div className="absolute inset-0 bg-black/60 p-4 flex flex-col justify-between z-10 overflow-hidden">
        <h2 className="text-xl font-bold text-white">{project.title}</h2>
        <p
          className="text-gray-300 text-sm overflow-hidden mt-1"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2, // limit to 2 lines
            WebkitBoxOrient: "vertical",
          }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="text-xs bg-blue-500/50 px-2 py-1 rounded-full text-white"
            >
              {skill}
            </span>
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg w-32 mx-auto mt-3 shadow-md transition text-sm">
          {project.button}
        </button>
      </div>
    </motion.div>
  );
}

// -------------------- Main Component --------------------
export default function Projects({ isMobile }: ProjectsProps) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
    const [featuredVideoError, setFeaturedVideoError] = useState(false);
    const [modalVideoError, setModalVideoError] = useState(false);

  const closeModal = () => {
    videoRef.current?.pause();
    setModalIndex(null);
  };

  const featuredProject = projects.find((p) => p.featured) ?? projects[0];
  const featuredIndex = projects.indexOf(featuredProject);
  const otherProjects = projects.filter((p) => p !== featuredProject);

  // Autoplay featured video on mobile
  useEffect(() => {
    if (isMobile) {
      const featuredVid = document.getElementById("featuredVideo") as HTMLVideoElement;
      featuredVid?.play().catch(() => {});
    }
  }, [isMobile]);

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
        {!featuredVideoError ? (
          <video
            id="featuredVideo"
            src={isMobile ? featuredProject.mobileSrc ?? featuredProject.videoUrl : featuredProject.videoUrl}
            poster={featuredProject.mobileSrc ?? featuredProject.src}
            muted
            loop
            playsInline
            autoPlay={!isMobile}
            preload={isMobile ? "none" : "metadata"}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            onError={(e) => {
              console.warn(`Featured video failed to load: ${featuredProject.title}`, e);
              setFeaturedVideoError(true);
            }}
            onLoadedData={() => setFeaturedVideoError(false)}
          />
        ) : (
          <img
            src={featuredProject.mobileSrc ?? featuredProject.src ?? "/Rabbit.avif"}
            alt={featuredProject.title}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/Rabbit.avif";
            }}
          />
        )}
        <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-between z-10 overflow-hidden">
          <h2 className="text-4xl font-bold truncate">{featuredProject.title}</h2>
          <p
            className="text-gray-200 text-lg mt-1 overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {featuredProject.description}
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            {featuredProject.skills.map((skill, i) => (
              <span
                key={i}
                className="text-sm bg-blue-500/50 px-3 py-1 rounded-full text-white"
              >
                {skill}
              </span>
            ))}
          </div>
          <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg shadow-lg font-medium transition w-44 mx-auto text-sm">
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
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-3xl w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-blue-400"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-3">
              {projects[modalIndex].title}
            </h2>
            <p className="text-gray-300 mb-4">
              {projects[modalIndex].description}
            </p>

            <div className="relative w-full mb-4 rounded-xl overflow-hidden">
              {!modalVideoError ? (
                <video
                  ref={videoRef}
                  src={isMobile
                    ? projects[modalIndex].mobileSrc ?? projects[modalIndex].videoUrl
                    : projects[modalIndex].videoUrl
                  }
                  poster={projects[modalIndex].mobileSrc ?? projects[modalIndex].src}
                  className="w-full h-auto"
                  controls
                  autoPlay={!isMobile}
                  loop
                  muted
                  playsInline
                  preload={isMobile ? "none" : "metadata"}
                  onError={(e) => {
                    console.warn(`Modal video failed to load: ${projects[modalIndex].title}`, e);
                    setModalVideoError(true);
                  }}
                />
              ) : (
                <img
                  src={projects[modalIndex].mobileSrc ?? projects[modalIndex].src ?? "/Rabbit.avif"}
                  alt={projects[modalIndex].title}
                  className="w-full h-auto object-cover rounded-xl"
                  onError={(e) => {(e.currentTarget as HTMLImageElement).src = "/Rabbit.avif";}}
                />
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {projects[modalIndex].skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-500/50 px-2 py-1 rounded-full"
                >
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
