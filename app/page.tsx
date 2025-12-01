"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import { projects } from "@/components/projectData";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
      navigator.userAgent
    );

    setIsMobile(mobileCheck);

    const preloadImages = projects.map((project) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = mobileCheck && project.mobileSrc ? project.mobileSrc : project.src;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      })
    );

    const preloadVideos = projects.map((project) =>
      new Promise<void>((resolve) => {
        if (mobileCheck) return resolve(); // skip video preloading on mobile

        const video = document.createElement("video");
        video.src = project.videoUrl;
        video.preload = "auto";
        video.muted = true;
        video.onloadeddata = () => resolve();
        video.onerror = () => resolve();
      })
    );

    Promise.all([...preloadImages, ...preloadVideos]).then(() => setShowContent(true));
  }, []);

  if (!showContent) return null;

  return (
    <div className="transition-opacity duration-1000 ease-out opacity-100">
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Projects isMobile={isMobile} /> {/* <-- pass mobile flag */}
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <ContactMe />
        <Footer />
      </main>
    </div>
  );
}
