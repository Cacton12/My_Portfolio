"use client";

import { useRef, useState, useEffect, useCallback, memo, useMemo } from "react";
import { motion } from "framer-motion";
import { projects, Project, ProjectsProps } from "@/components/projectData";

// -------------------- Project Card --------------------
const ProjectCard = memo(function ProjectCard({
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
  const [isInView, setIsInView] = useState(false);

  const playPreview = useCallback(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const stopPreview = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }, []);

  const handleOpenModal = useCallback(() => {
    openModal(index);
  }, [openModal, index]);

  const handleStopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <motion.div
      onMouseEnter={!isMobile ? playPreview : undefined}
      onMouseLeave={!isMobile ? stopPreview : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
      onViewportEnter={() => setIsInView(true)}
      className="
        relative h-72 w-full max-w-sm bg-[#1e293b] rounded-2xl shadow-xl
        overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-2xl
        transition-all duration-300
      "
      onClick={handleOpenModal}
    >
      {isMobile ? (
        <img
          src={project.mobileSrc ?? project.src ?? "/Rabbit.avif"}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/Rabbit.avif";
          }}
        />
      ) : !videoError && isInView ? (
        <video
          ref={videoRef}
          src={project.videoUrl}
          poster={project.src}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          onError={() => setVideoError(true)}
        />
      ) : (
        <img
          src={project.src ?? "/Rabbit.avif"}
          alt={project.title}
          loading="lazy"
          decoding="async"
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
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs bg-blue-500/50 px-2 py-1 rounded-full text-white"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-3">
          <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg shadow-md transition text-sm">
            {project.button}
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleStopPropagation}
              className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg shadow-md transition text-sm inline-block"
            >
              Try Project
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

// -------------------- Modal Component --------------------
const ProjectModal = memo(function ProjectModal({
  project,
  isMobile,
  onClose,
}: {
  project: Project;
  isMobile: boolean;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoHasPlayableExtension = useCallback((url: string | undefined) => {
    if (!url) return false;
    const ext = url.split("?")[0].split("#")[0].split(".").pop()?.toLowerCase();
    return ext === "mp4" || ext === "webm";
  }, []);

  const handleBackdropClick = useCallback(() => {
    videoRef.current?.pause();
    onClose();
  }, [onClose]);

  const handleStopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={handleBackdropClick}
      style={{ overflow: "auto" }}
    >
      <div
        className="bg-gray-900 rounded-2xl max-w-3xl w-full p-6 relative shadow-2xl"
        onClick={handleStopPropagation}
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-blue-400 transition-colors"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="relative w-full mb-4 rounded-xl overflow-hidden">
          {videoHasPlayableExtension(project.videoUrl) ? (
            <video
              ref={videoRef}
              src={project.videoUrl}
              poster={project.mobileSrc ?? project.src}
              className="w-full h-auto"
              controls
              autoPlay={!isMobile}
              loop
              muted
              playsInline
              preload={isMobile ? "none" : "metadata"}
            />
          ) : (
            <img
              src={project.mobileSrc ?? project.src ?? "/Rabbit.avif"}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover rounded-xl"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/Rabbit.avif";
              }}
            />
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs bg-blue-500/50 px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <div
          className="text-gray-200 text-sm"
          dangerouslySetInnerHTML={{ __html: project.details }}
        />
      </div>
    </div>
  );
});

// -------------------- Featured Project --------------------
const FeaturedProject = memo(function FeaturedProject({
  project,
  isMobile,
  onOpen,
}: {
  project: Project;
  isMobile: boolean;
  onOpen: () => void;
}) {
  const [videoError, setVideoError] = useState(false);

  const handleStopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    if (isMobile) {
      const featuredVid = document.getElementById("featuredVideo") as HTMLVideoElement;
      featuredVid?.play().catch(() => {});
    }
  }, [isMobile]);

  return (
    <motion.div
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative w-full max-w-7xl h-[26rem] bg-[#1e293b] rounded-3xl shadow-2xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-3xl transition-all duration-300"
    >
      {isMobile ? (
        <img
          src={project.mobileSrc ?? project.src ?? "/Rabbit.avif"}
          alt={project.title}
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/Rabbit.avif";
          }}
        />
      ) : !videoError ? (
        <video
          id="featuredVideo"
          src={project.videoUrl}
          poster={project.src}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          onError={() => setVideoError(true)}
        />
      ) : (
        <img
          src={project.src ?? "/Rabbit.avif"}
          alt={project.title}
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/Rabbit.avif";
          }}
        />
      )}
      <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-between z-10 overflow-hidden">
        <h2 className="text-4xl font-bold truncate">{project.title}</h2>
        <p
          className="text-gray-200 text-lg mt-1 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3 mt-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="text-sm bg-blue-500/50 px-3 py-1 rounded-full text-white"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg shadow-lg font-medium transition text-sm">
            {project.button}
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleStopPropagation}
              className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-lg shadow-lg font-medium transition text-sm inline-block"
            >
             Try Project
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

// -------------------- Main Component --------------------
export default function Projects({ isMobile }: ProjectsProps) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const featuredProject = useMemo(
    () => projects.find((p) => p.featured) ?? projects[0],
    []
  );
  const featuredIndex = useMemo(
    () => projects.indexOf(featuredProject),
    [featuredProject]
  );
  const otherProjects = useMemo(
    () => projects.filter((p) => p !== featuredProject),
    [featuredProject]
  );

  const closeModal = useCallback(() => {
    setModalIndex(null);
  }, []);

  const openFeaturedModal = useCallback(() => {
    setModalIndex(featuredIndex);
  }, [featuredIndex]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (modalIndex !== null) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [modalIndex]);

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-24 px-6 flex flex-col items-center"
    >
      {/* Featured Work */}
      <h1 className="text-5xl font-bold mb-10 tracking-tight text-blue-500">
        Featured Work
      </h1>

      <FeaturedProject
        project={featuredProject}
        isMobile={isMobile}
        onOpen={openFeaturedModal}
      />

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
        <ProjectModal
          project={projects[modalIndex]}
          isMobile={isMobile}
          onClose={closeModal}
        />
      )}
    </section>
  );
}