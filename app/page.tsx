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

  useEffect(() => {
    const preloadVideos = projects.map(project => 
      new Promise<void>((resolve) => {
        const video = document.createElement("video");
        video.src = project.videoUrl;
        video.preload = "auto";
        video.onloadeddata = () => resolve();
        video.onerror = () => resolve();
      })
    );

    const preloadImages = projects.map(project =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = project.src;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      })
    );

    Promise.all([...preloadVideos, ...preloadImages]).then(() => {
      setShowContent(true);
    });
  }, []);

  // Only render content after preloading
  if (!showContent) return null;

  return (
    <div className="transition-opacity duration-1000 ease-out opacity-100">
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Projects />
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
